import Link from "next/link";

export default function Features() {
  return (
    <section className="relative w-full">
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-10">
        <h1 className="text-center font-bold capitalize text-gray-800 dark:text-gray-200 text-3xl md:text-4xl xl:text-5xl">
          A website that helps you create your own imaginary plants.
        </h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 md:gap-4 xl:gap-8">
          <div className="flex p-4 rounded-lg">
            <span className="inline-flex justify-center w-16 h-16 mr-4 p-5 text-green-600 bg-green-100 rounded-xl">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </span>
            <div className="flex flex-col justify-between items-start space-y-3">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Full random or custom tailored
              </h1>
              <div className="space-y-4">
                <p className="text-gray-500 text-sm md:text-base">
                  You can either generate a complete new plant pure random or
                  tweak the settings to get your personal imaginary plant
                </p>
                <Link
                  href="/generate#custom"
                  className="inline-flex items-center text-white transition-colors duration-800 transform hover:bg-green-800 bg-green-700 px-2 py-1 rounded-md"
                >
                  <span className="font-medium text-sm md:text-base">
                    Lets customise
                  </span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex p-4 rounded-lg">
            <span className="inline-flex justify-center w-16 h-16 mr-4 p-5 text-green-600 bg-green-100 rounded-xl">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                ></path>
              </svg>
            </span>
            <div className="flex flex-col justify-between items-start space-y-3">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Full history saved
              </h1>
              <div className="space-y-4">
                <p className="text-gray-500 text-sm md:text-base">
                  Every plant you generate will stay online and can be accessed
                  with a personal deeplink. You forgot your link? Why not
                  register to see every plant in your profile and even change
                  them afterwards and more!
                </p>
                <Link
                  href="/account"
                  className="inline-flex items-center text-white transition-colors duration-800 transform hover:bg-green-800 bg-green-700 px-2 py-1 rounded-md"
                >
                  <span className="font-medium text-sm md:text-base">
                    Find out more
                  </span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex p-4 rounded-lg">
            <span className="inline-flex justify-center w-16 h-16 mr-4 p-5 text-green-600 bg-green-100 rounded-xl">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </span>
            <div className="flex flex-col justify-between items-start space-y-3">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Fully free to use
              </h1>
              <div className="space-y-4">
                <p className="text-gray-500 text-sm md:text-base">
                  There is no usage cap. Get a free new plant generated whenever
                  you want, wherever you want. Or use our Rest API.
                </p>
                <Link
                  href="/docs"
                  className="inline-flex items-center text-white transition-colors duration-800 transform hover:bg-green-800 bg-green-700 px-2 py-1 rounded-md"
                >
                  <span className="font-medium text-sm md:text-base">
                    Read the docs
                  </span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
