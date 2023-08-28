export default function RegisterPage() {
  return (
    <div className="p-12 flex justify-center items-center">
      <div className="lg:w-4/6 md:w-1/2 bg-gray-100 p-8 justify-center rounded-lg flex flex-col w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Sign Up
        </h2>
        <div className="relative mb-4">
          <label
            htmlFor="full-name"
            className="leading-7 text-sm text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            name="full-name"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            data-twofas-input-listener="true"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            data-twofas-input-listener="true"
          />
        </div>
        <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
          Register
        </button>
      </div>
    </div>
  );
}
