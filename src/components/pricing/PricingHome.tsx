function PricingHome() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48  pt-24 pb-12">
          <div>
            <div className="h-full">
              <div className="max-w-5xl mx-auto" x-data="{ annual: true }">
                <h2 className="text-3xl text-black font-bold text-center mb-12">
                  <span className="hover:text-orange-500 transition duration-300 ease-in-out">
                    Plans
                  </span>
                </h2>
                <div className="grid grid-cols-12 gap-6 space-x-3">
                  <div className="relative col-span-full md:col-span-4 bg-white shadow-md rounded-sm border border-gray-200">
                    <div className="px-5 pt-5 pb-6 border-b border-gray-200">
                      <header className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-green-500 to-green-300 mr-3">
                          <svg
                            className="w-6 h-6 fill-current text-white"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                          </svg>
                        </div>
                        <h3 className="text-lg text-gray-800 font-semibold">
                          Basic
                        </h3>
                      </header>
                      <div className="text-sm mb-2">
                        Ideal for individuals that need a custom solution with
                        custom tools.
                      </div>
                      <div className="text-gray-800 font-bold mb-4">
                        <span className="text-2xl">$</span>
                        <span
                          className="text-3xl"
                          x-text="annual ? '14' : '19'"
                        >
                          14
                        </span>
                        <span className="text-gray-500 font-medium text-sm">
                          /mo
                        </span>
                      </div>
                      <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-gray-200 rounded leading-5 shadow-sm transition duration-150 ease-in-out focus:outline-none focus-visible:ring-2 hover:border-gray-300 text-gray-600 w-full">
                        Downgrade
                      </button>
                    </div>
                    <div className="px-5 pt-4 pb-5">
                      <div className="text-xs text-gray-800 font-semibold uppercase mb-4">
                        What's included
                      </div>
                      <ul>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Lorem ipsum dolor sit amet
                          </div>
                        </li>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Quis nostrud exercitation
                          </div>
                        </li>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Lorem ipsum dolor sit amet
                          </div>
                        </li>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Quis nostrud exercitation
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative col-span-full md:col-span-4 bg-white shadow-md rounded-sm border border-gray-200">
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 bg-blue-500"
                      aria-hidden="true"
                    ></div>
                    <div className="px-5 pt-5 pb-6 border-b border-gray-200">
                      <header className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-blue-500 to-blue-300 mr-3">
                          <svg
                            className="w-6 h-6 fill-current text-white"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                          </svg>
                        </div>
                        <h3 className="text-lg text-gray-800 font-semibold">
                          Standard
                        </h3>
                      </header>
                      <div className="text-sm mb-2">
                        Ideal for individuals that need a custom solution with
                        custom tools.
                      </div>
                      <div className="text-gray-800 font-bold mb-4">
                        <span className="text-2xl">$</span>
                        <span
                          className="text-3xl"
                          x-text="annual ? '34' : '39'"
                        >
                          34
                        </span>
                        <span className="text-gray-500 font-medium text-sm">
                          /mo
                        </span>
                      </div>
                      <button
                        className="font-medium text-sm justify-center px-3 py-2 border rounded leading-5 shadow-sm transition duration-150 ease-in-out border-gray-200 focus:outline-none focus-visible:ring-2 bg-gray-100 text-gray-400 w-full cursor-not-allowed flex items-center"
                        disabled
                      >
                        <svg
                          className="w-3 h-3 flex-shrink-0 fill-current mr-2"
                          viewBox="0 0 12 12"
                        >
                          <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                        </svg>
                        <span>Current Plan</span>
                      </button>
                    </div>
                    <div className="px-5 pt-4 pb-5">
                      <div className="text-xs text-gray-800 font-semibold uppercase mb-4">
                        What's included
                      </div>
                      <ul>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Lorem ipsum dolor sit amet
                          </div>
                        </li>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Quis nostrud exercitation
                          </div>
                        </li>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Lorem ipsum dolor sit amet
                          </div>
                        </li>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Quis nostrud exercitation
                          </div>
                        </li>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Lorem ipsum dolor sit amet
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative col-span-full md:col-span-4 bg-white shadow-md rounded-sm border border-gray-200">
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5 bg-indigo-500"
                      aria-hidden="true"
                    ></div>
                    <div className="px-5 pt-5 pb-6 border-b border-gray-200">
                      <header className="flex items-center mb-2">
                        <div className="w-6 h-6 rounded-full flex-shrink-0 bg-gradient-to-tr from-indigo-500 to-indigo-300 mr-3">
                          <svg
                            className="w-6 h-6 fill-current text-white"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17a.833.833 0 01-.833-.833 3.333 3.333 0 00-3.334-3.334.833.833 0 110-1.666 3.333 3.333 0 003.334-3.334.833.833 0 111.666 0 3.333 3.333 0 003.334 3.334.833.833 0 110 1.666 3.333 3.333 0 00-3.334 3.334c0 .46-.373.833-.833.833z" />
                          </svg>
                        </div>
                        <h3 className="text-lg text-gray-800 font-semibold">
                          Plus
                        </h3>
                      </header>
                      <div className="text-sm mb-2">
                        Ideal for individuals that need a custom solution with
                        custom tools.
                      </div>
                      <div className="text-gray-800 font-bold mb-4">
                        <span className="text-2xl">$</span>
                        <span
                          className="text-3xl"
                          x-text="annual ? '74' : '79'"
                        >
                          74
                        </span>
                        <span className="text-gray-500 font-medium text-sm">
                          /mo
                        </span>
                      </div>
                      <button className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white w-full">
                        Upgrade
                      </button>
                    </div>
                    <div className="px-5 pt-4 pb-5">
                      <div className="text-xs text-gray-800 font-semibold uppercase mb-4">
                        What's included
                      </div>
                      <ul>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Lorem ipsum dolor sit amet
                          </div>
                        </li>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Quis nostrud exercitation
                          </div>
                        </li>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Lorem ipsum dolor sit amet
                          </div>
                        </li>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Quis nostrud exercitation
                          </div>
                        </li>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Lorem ipsum dolor sit amet
                          </div>
                        </li>
                        <li className="flex items-center py-1">
                          <svg
                            className="w-3 h-3 flex-shrink-0 fill-current text-green-500 mr-2"
                            viewBox="0 0 12 12"
                          >
                            <path d="M10.28 1.28L3.989 7.575 1.695 5.28A1 1 0 00.28 6.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 1.28z" />
                          </svg>
                          <div className="text-sm">
                            Quis nostrud exercitation
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="mt-8 flex gap-x-4 sm:justify-center"></div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
              <svg
                className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                viewBox="0 0 1155 678"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                  fillOpacity=".3"
                  d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                />
                <defs>
                  <linearGradient
                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                    x1="1155.49"
                    x2="-78.208"
                    y1=".177"
                    y2="474.645"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#9089FC" />
                    <stop offset={1} stopColor="#FF80B5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PricingHome;
