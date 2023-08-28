export default function LoginPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 body-font container px-5 py-24 mx-auto gap-4">
      <div className="lg:w-4/6 md:w-1/2 bg-gray-100 p-8 justify-center rounded-lg flex flex-col mt-10 md:mt-0">
        <h1 className="text-center sm:text-3xl text-2xl font-medium title-font mb-12">
          Login
        </h1>
        <div className="flex lg:w-2/3 w-full flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              data-twofas-input-listener="true"
            />
          </div>
          <div className="relative flex-grow w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-transparent focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              data-twofas-input-listener="true"
            />
          </div>
          <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Login
          </button>
          <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
            Social Login
          </button>
        </div>
      </div>
      <div className="lg:w-4/6 md:w-1/2 bg-gray-100 p-8 justify-center rounded-lg flex flex-col w-full mt-10 md:mt-0">
        Sign up instead
      </div>
    </div>
  );
}
