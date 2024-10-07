import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl tracking-tight font-extrabold max-w-xl leading-tight sm:text-4xl md:text-5xl">
            ... is an AI accelerated website that generates you images
            of imaginary plants
          </h1>
          <p className="text-gray-500 max-w-lg text-base md:text-xl">
            Its easy to set up and can generate hundreds of high-quality images
            in a day (maybe)
          </p>
        </div>
        <div className="flex flex-wrap sm:justify-between justify-center items-center gap-x-4 sm:gap-y-0 gap-y-4 mt-4">
          <Link
            href="/generate"
            className="sm:w-auto select-none inline-flex items-center justify-center px-5 py-3 border border-transparent font-medium rounded-md text-white bg-green-500 hover:bg-green-700 md:py-4 md:text-lg"
          >
            Get started
          </Link>
          <Link
            href="/explanation"
            className="sm:w-auto select-none inline-flex items-center justify-center px-5 py-3 border border-transparent font-medium rounded-md text-green-800 bg-green-100 hover:bg-green-200 md:py-4 md:text-lg"
          >
            Learn more
          </Link>
        </div>
      </div>
    </section>
  );
}
