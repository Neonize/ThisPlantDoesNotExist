export default function CTA() {
  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto py-12 px-8 space-y-6 flex flex-col items-center justify-center lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <h2 className="font-extrabold text-gray-800 dark:text-gray-200 text-center text-3xl space-y-2 md:text-4xl xl:text-5xl lg:text-left">
          <span>Want to get notified over funny projects in the future?</span>
          <span className="block text-green-600">Join my newsletter</span>
        </h2>
        <div className="flex flex-wrap justify-center lg:mt-0 lg:flex-shrink-0 sm:justify-start gap-x-4 sm:gap-y-0 gap-y-4">
          <a
            href="#"
            className="select-none inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-800"
          >
            Join here
          </a>
        </div>
      </div>
    </section>
  );
}
