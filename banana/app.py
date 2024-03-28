from io import BytesIO
from potassium import Potassium, Request, Response
from diffusers import DiffusionPipeline, DDPMScheduler
import torch
import base64

# create a new Potassium app
app = Potassium("SDXL-Plants")

# @app.init runs at startup, and loads models into the app's context
@app.init
def init():
    repo_id="ByteDance/SDXL-Lightning"

    ddpm = DDPMScheduler.from_pretrained(repo_id, subfolder="scheduler")
    
    model = DiffusionPipeline.from_pretrained(
        repo_id, 
        use_safetensors=True,
        torch_dtype=torch.float16,
        scheduler=ddpm
    ).to("cuda")

    context = {
        "model": model,
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
        guidance_scale=7,
        num_inference_steps=request.json.get("steps", 20),
        generator=torch.Generator(device="cuda").manual_seed(request.json.get("seed")) if request.json.get("seed") else None,
        width=768,
        height=512,
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