export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-6 py-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl tracking-tight font-extrabold max-w-xl leading-tight sm:text-4xl md:text-5xl">
            ... is an AI accelerated website that generates your images of
            imaginary plants
          </h1>
          <p className="text-gray-500 max-w-lg text-base md:text-xl">
            It's easy to set up and can generate hundreds of high-quality images
            in a day (maybe)
          </p>
        </div>
        <div className="flex flex-wrap sm:justify-between justify-center items-center gap-x-4 sm:gap-y-0 gap-y-4 mt-4">
          <button
            type="button"
            className="sm:w-auto select-none inline-flex items-center justify-center px-5 py-3 border border-transparent font-medium rounded-md text-white bg-lime-600 hover:bg-lime-800 md:py-4 md:text-lg"
          >
            Get started
          </button>
          <button
            type="button"
            className="sm:w-auto select-none inline-flex items-center justify-center px-5 py-3 border border-transparent font-medium rounded-md text-lime-800 bg-lime-100 hover:bg-lime-200 md:py-4 md:text-lg"
          >
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
