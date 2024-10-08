"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";
import Alert from "./Alert";

export default function Plant({ id, message, link }: { id: string, message: string, link: string }) {
  const [image, setImage] = useState("");
  const [buttonDisabled, setbuttonDisabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // if (props.modelOutputs && props.modelOutputs.length > 0) {
    //   if (props.modelOutputs[0].images.length > 0) {
    //     setImage(props.modelOutputs[0].images[0]);
    //   }
    // }
    // Always do navigations after the first render
    if (id !== "") {
      router.push("/generate?plantId=" + id);
    }
  }, [id, router]);

  const generateNew = async () => {
    setbuttonDisabled(true);
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button onClick={() => generateNew()} disabled={buttonDisabled}>
        Generate New
      </button>
      <p>ID: {id}</p>
      <p>Message: {message}</p>
      {image ? (
        <Image
          src={`data:image/jpeg;base64,${image}`}
          // src={link}
          alt="generated Image"
          width={768}
          height={768}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      ) : (
        <div className="text-thin tracking-wider">Loading...</div>
      )}
      {message !== "" && message !== "success" && message !== "loading" ? (
        <Alert errorMessage={message} />
      ) : null}
    </div>
  );
}
