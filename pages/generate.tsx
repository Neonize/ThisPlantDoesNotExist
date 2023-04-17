import { useEffect, useState } from "react";
import Layout from "@/sections/Layout";
import Image from "next/image";
import Alert from "@/components/Alert";
import * as banana from "@banana-dev/banana-dev";
import { response } from "@/models/model";

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
export async function getServerSideProps() {
  if (api_key === undefined || model_key === undefined) {
    return {
      props: {
        id: "",
        message: "API or MODEL_KEY not provided",
        created: 0,
        apiVersion: "",
        callID: "",
        finished: false,
        modelOutputs: [],
      },
    };
  }
  try {
    const id = await banana.start(api_key, model_key, model_inputs);
    let out = (await banana.check(api_key, id)) as response;
    return {
      props: out,
    };
  } catch (error) {
    return {
      props: {
        id: "",
        message: JSON.stringify(error),
        created: 0,
        apiVersion: "string",
        callID: "string",
        finished: false,
        modelOutputs: [],
      },
    };
  }
}

export default function GeneratePage(props: response) {
  const [image, setImage] = useState("");

  useEffect(() => {
    if (props.modelOutputs.length > 0) {
      if (props.modelOutputs[0].images.length > 0) {
        setImage(props.modelOutputs[0].images[0]);
      }
    }
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-4">
        <p>ID: {props.id}</p>
        {image ? (
          <Image
            src={`data:image/jpeg;base64,${image}`}
            alt="generated Image"
            width={768}
            height={768}
          />
        ) : (
          <div className="text-thin tracking-wider">Loading...</div>
        )}
      </div>
      {props.message !== "" && props.message !== "success" ? (
        <Alert errorMessage={props.message} />
      ) : null}
    </Layout>
  );
}
