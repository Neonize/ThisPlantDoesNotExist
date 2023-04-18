import { useEffect, useState } from "react";
import Layout from "@/sections/Layout";
import Image from "next/image";
import Alert from "@/components/Alert";
import * as banana from "@banana-dev/banana-dev";
import { response } from "@/models/model";
import { useRouter } from "next/router";

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
export async function getServerSideProps(context: {
  res: { setHeader: (arg0: string, arg1: string) => void };
  query: { plantId: any };
}) {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const { plantId } = context.query;
  if (api_key === undefined || model_key === undefined) {
    return {
      props: {
        id: "",
        message: "API or MODEL_KEY not provided",
      },
    };
  }
  try {
    let id = "";
    if (!plantId || plantId === "") {
      id = await banana.start(api_key, model_key, model_inputs);
    } else {
      id = plantId;
    }
    let out = (await banana.check(api_key, id)) as response;
    return {
      props: {
        id: out.id,
        message: out.message,
      },
    };
  } catch (error) {
    return {
      props: {
        id: plantId,
        message: JSON.stringify(error),
      },
    };
  }
}

export default function GeneratePage(props: response) {
  const [image, setImage] = useState("");
  const [buttonDisabled, setbuttonDisabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (props.modelOutputs && props.modelOutputs.length > 0) {
      if (props.modelOutputs[0].images.length > 0) {
        setImage(props.modelOutputs[0].images[0]);
      }
    }
    // Always do navigations after the first render
    router.push("/generate?plantId=" + props.id, undefined, { shallow: true });
  }, []);

  const generateNew = async () => {
    setbuttonDisabled(true);
    router.push("/");
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-4">
        <button onClick={() => generateNew()} disabled={buttonDisabled}>
          Generate New
        </button>
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
