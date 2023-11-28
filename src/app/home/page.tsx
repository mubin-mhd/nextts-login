"use client";
import React from "react";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-500">
      <div className="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-16 xl:py-28">
        <div className="flex flex-col items-center justify-between">
          <div className="">
            <div className="max-w-3xl">
              <h1 className="mb-6 text-center text-5xl font-light tracking-tight text-white sm:text-5xl lg:text-7xl">
                Easily Shop{" "}
                <span className="my-1 inline-block font-serif font-bold text-white">
                  {" "}
                  wait while sleeping{" "}
                </span>
              </h1>
              <p className="text-center text-base text-gray-100">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque it.
              </p>
            </div>
            <form
              method="POST"
              action="#"
              className="mx-auto mt-12 mb-2 max-w-xl sm:rounded-xl sm:border sm:border-gray-100 sm:bg-white sm:p-2 sm:shadow"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative text-gray-500 sm:w-7/12">
                  <label
                    htmlFor="email"
                    className="sr-only border-gray-300"
                  ></label>
                  <div className="pointer-events-none absolute mr-2 inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      fill="#6e6e81"
                      viewBox="0 0 256 256"
                    >
                      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="What do you want to buy?"
                    className="w-full cursor-text rounded-xl border-2 py-4 pr-4 pl-10 text-base outline-none transition-all duration-200 ease-in-out sm:border-0 focus:border-transparent focus:ring"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center rounded-xl bg-blue-700 px-6 py-4 text-white transition"
                >
                  <span className="group flex w-full items-center justify-center rounded text-center font-medium">
                    Shop Now
                  </span>
                  <svg
                    className="shrink-0 group-hover:ml-8 ml-4 h-4 w-4 transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>

            <div className="divide-gray-300/30 mt-12 flex flex-col items-center justify-center space-y-3 text-sm text-gray-700 sm:flex-row sm:items-start sm:space-y-0 sm:divide-x">
              <div className="flex max-w-xs space-x-2 px-4">
                <span className="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2.5 text-purple-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="#6e6e81"
                    viewBox="0 0 256 256"
                  >
                    <path d="M224,40V80a8,8,0,0,1-16,0V48H176a8,8,0,0,1,0-16h40A8,8,0,0,1,224,40ZM80,208H48V176a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H80a8,8,0,0,0,0-16Zm136-40a8,8,0,0,0-8,8v32H176a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V176A8,8,0,0,0,216,168ZM40,88a8,8,0,0,0,8-8V48H80a8,8,0,0,0,0-16H40a8,8,0,0,0-8,8V80A8,8,0,0,0,40,88Zm128,96H88a16,16,0,0,1-16-16V88A16,16,0,0,1,88,72h80a16,16,0,0,1,16,16v80A16,16,0,0,1,168,184ZM88,168h80V88H88Z"></path>
                  </svg>
                </span>
                <p className="text-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex max-w-xs space-x-2 px-4">
                <span className="shrink-0 flex h-14 w-14 items-center justify-center rounded-xl bg-white p-2.5 text-rose-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="#f5384b"
                    viewBox="0 0 256 256"
                  >
                    <path d="M164,80a28,28,0,1,0-28-28A28,28,0,0,0,164,80Zm0-40a12,12,0,1,1-12,12A12,12,0,0,1,164,40Zm36,96a40,40,0,1,0,40,40A40,40,0,0,0,200,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,200,200ZM56,136a40,40,0,1,0,40,40A40,40,0,0,0,56,136Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,56,200Zm136-80H152a8,8,0,0,1-5.66-2.34L120,91.31,99.31,112l34.35,34.34A8,8,0,0,1,136,152v48a8,8,0,0,1-16,0V155.31L82.34,117.66a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,0L155.31,104H192a8,8,0,0,1,0,16Z"></path>
                  </svg>
                </span>
                <p className="text-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-20 hidden lg:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              ></path>
            </svg>
            <div
              className="w-fit mx-auto flex overflow-hidden rounded-3xl bg-orange-400"
              role="image-container"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
