import { Link } from "react-router";
import Typewriter from "typewriter-effect";
import nn from "../../assets/nn.jpg";

function HomeHeader() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
          <div className="inline-block w-[400px]">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-5xl pb-12 whitespace-nowrap">
              Best models for{" "}
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
            <ul className="flex gap-4 justify-center w-full flex-wrap">
              <li className="inline-flex border-b-2 border-transparent hover-underline relative ease-in-out mx-2">
                <Link
                  to={"/models"}
                  className="mt-5 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                >
                  LaMDA
                </Link>
              </li>
              <li className="inline-flex border-b-2 border-transparent hover-underline relative ease-in-out mx-2">
                <Link
                  to={"/models"}
                  className="mt-5 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                >
                  T5
                </Link>
              </li>
              <li className="inline-flex border-b-2 border-transparent hover-underline relative ease-in-out mx-2">
                <Link
                  to={"/models"}
                  className="mt-5 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                >
                  ViTs
                </Link>
              </li>
              <li className="inline-flex border-b-2 border-transparent hover-underline relative ease-in-out mx-2">
                <Link
                  to={"/models"}
                  className="mt-5 text-lg font-medium leading-8 text-gray-700 sm:text-center"
                >
                  Scholes
                </Link>
              </li>
            </ul>
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
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden bg-white blur-lg sm:top-[calc(100%-40rem)]">
            <img src={nn} className="w-2xl h-2xl block ml-auto"></img>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeHeader;
