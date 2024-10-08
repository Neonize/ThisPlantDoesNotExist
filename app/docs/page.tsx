import Image from "next/image";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="max-w-5xl py-6 space-y-6 md:py-24 mx-auto">
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
              Once you&apos;re satisfied with your settings, click the &quot;Generate Image&quot; button to create your image.
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
        <Link
          href="/generate"
          className="sm:w-auto select-none inline-flex items-center justify-center px-5 py-3 border border-transparent font-medium rounded-md text-white bg-green-500 hover:bg-green-700 md:py-4 md:text-lg"
        >
          Get started
        </Link>
      </div>
    </div>
  )
}
