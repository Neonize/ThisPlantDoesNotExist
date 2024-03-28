import Plant from "@/components/Plant";
import { Client } from "@banana-dev/banana-dev"

const api_key = process.env.API_KEY || ""
const banana_url = process.env.BANANA_URL || ""

const model_inputs = {
  endpoint: "txt2img",
  params: {
    prompt:
      "Photograph of a plant, white pot, studio lighting, big leaves, white background",
    negative_prompt: "",
    steps: 30,
    sampler_name: "Euler a",
    cfg_scale: 7.5,
    seed: Math.floor(Math.random() * 42690),
    batch_size: 1,
    n_iter: 1,
    width: 768,
    height: 768,
    tiling: false,
  },
}

const myClient = new Client(
  api_key, // Found in dashboard
  banana_url, // Found in model view in dashboard
  // "DEBUG" // verbosity
)

async function generate(): Promise<{ id: string, message: string, link: string }> {
  try {
    const out = await myClient.call("/", model_inputs);
    return {
      id: out.json.id,
      message: out.json.message,
      link: "",
    };
  } catch (error) {
    return {
      id: "",
      message: JSON.stringify(error),
      link: "",
    };
  }
}

export default async function Generate({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  if (api_key === undefined) {
    return <Plant id={""} message={"API_KEY or MODEL_KEY not set"} link={""} />;
  }
  let searchId = searchParams.id;
  if (searchId !== undefined) {
    let data = { id: "", message: "", link: "" };
    if (Array.isArray(searchId)) {
      searchId = searchId[0];
    }
    return <Plant id={data.id} message={data.message} link={data.link} />;
  }
  const data = await generate();
  return <Plant id={data.id} message={data.message} link={data.link} />;
}
