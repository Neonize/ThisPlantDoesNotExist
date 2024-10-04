import { NextResponse } from 'next/server';
import Together from "together-ai";

const TOGETHER_API_KEY = process.env.TOGETHER_API_KEY || "";

const together = new Together({ apiKey: TOGETHER_API_KEY });

export async function POST() {
  if (!TOGETHER_API_KEY) {
    return NextResponse.json({ error: 'TOGETHER_API_KEY not set' }, { status: 500 });
  }

  try {
    const response = await together.images.create({
      model: "black-forest-labs/FLUX.1-schnell",
      prompt: "Photograph of a plant, white pot, studio lighting, big leaves, white background",
      width: 768,
      height: 768,
      steps: 4,
      n: 1,
    });

    if (!response.data || !Array.isArray(response.data) || response.data.length === 0) {
      throw new Error("Unexpected API response format");
    }

    const imageData = response.data[0] as any;

    if (typeof imageData.url !== 'string') {
      throw new Error("Image URL not found in API response");
    }

    return NextResponse.json({ imageUrl: imageData.url });
  } catch (error) {
    console.error("Error generating image:", error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}