import Plant from "@/components/Plant";
import { plantData, response } from "@/models/model";
import * as banana from "@banana-dev/banana-dev";

const api_key = process.env.API_KEY;
const model_key = process.env.MODEL_KEY;

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
};

async function generate(): Promise<plantData> {
  try {
    const id = await banana.start(api_key!, model_key!, model_inputs);
    const out = (await banana.check(api_key!, id)) as response;
    return {
      id: out.id,
      message: out.message,
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
async function check(id: string): Promise<plantData> {
  try {
    const out = (await banana.check(api_key!, id)) as response;
    return {
      id: out.id,
      message: out.message,
      link: "",
    };
  } catch (error) {
    return {
      id: id,
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
  if (api_key === undefined || model_key === undefined) {
    return <Plant id={""} message={"API_KEY or MODEL_KEY not set"} link={""} />;
  }
  let searchId = searchParams.id;
  if (searchId !== undefined) {
    let data: plantData = { id: "", message: "", link: "" };
    if (Array.isArray(searchId)) {
      searchId = searchId[0];
    }
    data = await check(searchId);
    return <Plant id={data.id} message={data.message} link={data.link} />;
  }
  const data = await generate();
  return <Plant id={data.id} message={data.message} link={data.link} />;
}
