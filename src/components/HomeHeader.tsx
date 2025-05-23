import { Link } from "react-router";
import Typewriter from "typewriter-effect";

function HomeHeader() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-30 sm:pb-40">
          <div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-center sm:text-5xl">
                The best models for <span> </span>
                <div
                  className="inline-flex"
                  style={{ color: "#ff561e", fontWeight: "bold" }}
                >
                  <Typewriter
                    options={{
                      strings: ["predict", "compete", "trade"],
                      autoStart: true,
                      loop: true,
                    }}
                  ></Typewriter>
                </div>
              </h1>
              <ul className="flex gap-8 py-12 items-centeri justify-center">
                <li className="inline-flex border-b-2 border-transparent hover-underline relative ease-in-out mx-4">
                  <Link
                    to={"/models"}
                    className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    LaMDA
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover-underline relative ease-in-out mx-4">
                  <Link
                    to={"/models"}
                    className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    T5
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover-underline relative ease-in-out mx-4">
                  <Link
                    to={"/models"}
                    className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    ViTs
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover-underline relative ease-in-out mx-4">
                  <Link
                    to={"/models"}
                    className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Scholes
                  </Link>
                </li>
                <li className="inline-flex border-b-2 border-transparent hover-underline relative ease-in-out mx-4">
                  <Link
                    to={"/models"}
                    className="mt-6 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                  >
                    Monte Carlo
                  </Link>
                </li>
              </ul>
              <p></p>
              <div className="mt-8 flex gap-x-4 sm:justify-center">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                >
                  Get started
                  <span className="text-indigo-200" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >
                  Live demo
                  <span className="text-gray-400" aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </div>
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

export default HomeHeader;
