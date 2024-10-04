import Image from "next/image";

export default function DocsPage() {
  return (
    <div className="w-full py-12 space-y-6 md:py-24">
      <div className="container space-y-4 px-4 md:px-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Using the Image Generator</h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Learn how to create stunning plant images.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">1. Input Text</h2>
            <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
              Start by entering your plant description in the input field.
            </p>
            <Image
              alt="Input Text"
              className="mx-auto rounded-lg overflow-hidden object-cover object-center aspect-video sm:w-full md:order-last"
              height="304"
              src="images/undraw_text_field_htlv.svg"
              width="540"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">2. Generate Image</h2>
            <p className="text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
              Once you're satisfied with your settings, click the "Generate Image" button to create your image.
            </p>
            <Image
              alt="Generate Image"
              className="mx-auto rounded-lg overflow-hidden object-cover object-center aspect-video sm:w-full"
              height="304"
              src="images/undraw_flowers_vx06.svg"
              width="540"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
