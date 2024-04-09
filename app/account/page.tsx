import Link from "next/link";

export default function AccountPage() {
  return (
    <div className="body-font container px-5 py-24 mx-auto">
      <div className="flex flex-wrap mb-20 flex-col items-center text-center">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">
          Why you should consider to register
        </h1>
        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
          We know that most websites just want your data. We normally dont, but
          the following features are only possible with an account.
        </p>
      </div>
      <div className="w-full grid xl:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-3">
        <div className="col-span-2 border border-gray-200 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg Linkfont-medium title-font font-bold underline">
              Priority
            </h2>
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
          </div>
          <p className="leading-relaxed text-base">
            Your requests to generate images get priority
          </p>
        </div>
        <div className="col-span-2 border border-gray-200 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg Linkfont-medium title-font font-bold underline">
              Change the data afterwards
            </h2>
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <circle cx="6" cy="6" r="3"></circle>
                <circle cx="6" cy="18" r="3"></circle>
                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
              </svg>
            </div>
          </div>
          <p className="leading-relaxed text-base">
            Tweak your plants however you like. Change the description, title or
            other fields after generation
          </p>
        </div>
        <div className="col-span-2 border border-gray-200 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg Linkfont-medium title-font font-bold underline">
              All in one place
            </h2>
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
          <p className="leading-relaxed text-base">
            Get an easy to use overview over all your generated images in your
            account space
          </p>
        </div>
        <div className="xl:col-span-3 col-span-2 border border-gray-200 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg Linkfont-medium title-font font-bold underline">
              Request Features
            </h2>
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
              </svg>
            </div>
          </div>
          <p className="leading-relaxed text-base">
            You want more features or have a nice idea? With an account you can
            create support requests
          </p>
        </div>
        <div className="xl:col-span-3 md:col-span-4 col-span-2 border border-gray-200 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg Linkfont-medium title-font font-bold underline">
              Hide your creations
            </h2>
            <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
          </div>
          <p className="leading-relaxed text-base">
            With an account you can hide every plant you created from the public
          </p>
        </div>
      </div>
      <div className="flex flex-col text-center w-full mt-16">
        <Link
          href="/user/register"
          className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
        >
          Register now
        </Link>
      </div>
    </div>
  );
}
