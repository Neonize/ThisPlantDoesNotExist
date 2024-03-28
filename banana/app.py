from io import BytesIO
import torch
import base64
from potassium import Potassium, Request, Response
from diffusers import StableDiffusionXLPipeline, UNet2DConditionModel, EulerDiscreteScheduler
from huggingface_hub import hf_hub_download
from safetensors.torch import load_file

base = "stabilityai/stable-diffusion-xl-base-1.0"
repo = "ByteDance/SDXL-Lightning"
ckpt = "sdxl_lightning_4step_unet.safetensors" # Use the correct ckpt for your step setting!

# create a new Potassium app
app = Potassium("SDXL-Plants")

# @app.init runs at startup, and loads models into the app's context
@app.init
def init():
    device = 0 if torch.cuda.is_available() else -1
    unet = UNet2DConditionModel.from_config(base, subfolder="unet").to("cuda", torch.float16)
    unet.load_state_dict(load_file(hf_hub_download(repo, ckpt), device=device))
    pipe = StableDiffusionXLPipeline.from_pretrained(base, unet=unet, torch_dtype=torch.float16, variant="fp16").to("cuda")

    # Ensure sampler uses "trailing" timesteps.
    pipe.scheduler = EulerDiscreteScheduler.from_config(pipe.scheduler.config, timestep_spacing="trailing")

    context = {
        "model": pipe,
    }

    return context

# @app.handler runs for every call
@app.handler()
def handler(context: dict, request: Request) -> Response:
    model = context.get("model")

    prompt = request.json.get("prompt")
    negative_prompt = "cartoon, painting, illustration, (worst quality, low quality, normal quality:2)"

    image = model(
        prompt=prompt,
        negative_prompt=negative_prompt,
        guidance_scale=0,
        num_inference_steps=request.json.get("steps", 4),
        generator=torch.Generator(device="cuda").manual_seed(request.json.get("seed")) if request.json.get("seed") else None,
        width=1024,
        height=1024,
    ).images[0]

    buffered = BytesIO()
    image.save(buffered, format="JPEG", quality=80)
    img_str = base64.b64encode(buffered.getvalue())

    # You could also consider writing this image to S3
    # and returning the S3 URL instead of the image data
    # for a slightly faster response time

    return Response(
        json = {"output": str(img_str, "utf-8")}, 
        status=200
    )

if __name__ == "__main__":
    app.serve()