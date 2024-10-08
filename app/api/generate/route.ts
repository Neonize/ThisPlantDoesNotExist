import { NextResponse } from 'next/server';
import Together from "together-ai";
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const TOGETHER_API_KEY = process.env.TOGETHER_API_KEY || "";
const ANONYMOUS_USER_ID = process.env.ANONYMOUS_USER_ID || "anonymous";

const together = new Together({ apiKey: TOGETHER_API_KEY });

export async function POST(request: Request) {
  if (!TOGETHER_API_KEY) {
    return NextResponse.json({ error: 'TOGETHER_API_KEY not set' }, { status: 500 });
  }

  const supabase = createRouteHandlerClient({ cookies });

  try {
    const { customPrompt = "", steps = 4, isSquare = true, userId = null } = await request.json();

    const basePrompt = "Photograph of a plant, white pot, studio lighting";
    const fullPrompt = customPrompt ? `${basePrompt}, ${customPrompt}` : basePrompt;

    const response = await together.images.create({
      model: "black-forest-labs/FLUX.1-schnell-Free",
      prompt: fullPrompt,
      width: isSquare ? 768 : 512,
      height: isSquare ? 768 : 768,
      steps: Math.min(Math.max(steps, 1), 8), // Ensure steps is between 1 and 8
      n: 1,
    });

    if (!response.data || !Array.isArray(response.data) || response.data.length === 0) {
      throw new Error("Unexpected API response format");
    }

    const imageData = response.data[0] as any;

    if (typeof imageData.url !== 'string') {
      throw new Error("Image URL not found in API response");
    }

    // Use the provided userId or the anonymous user ID
    const userIdToSave = userId || ANONYMOUS_USER_ID;

    const { data, error } = await supabase
      .from('generated_images')
      .insert({
        user_id: userIdToSave,
        image_url: imageData.url,
        settings: {
          customPrompt,
          steps
        },
        is_public: !userId // Set is_public to true for anonymous generations
      });

    if (error) {
      console.error("Error saving image data to Supabase:", error);
      // We'll still return the image URL even if saving to Supabase fails
    }

    return NextResponse.json({ imageUrl: imageData.url });
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}