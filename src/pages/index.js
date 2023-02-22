import { useState } from "react";
import Navbar from "./Navbar";
export default function Home() {
  useState(() => {}, []);
  return (
    <>
      <Navbar />
      <div className="mx-3 my-6 py-3 px-2 rounded-md border-1 border-gray-400 dark:border-gray-900 bg-gray-300/50 dark:bg-gray-800/50">
        <h1 className="text-2xl font-extrabold mr-auto text-gray-900 dark:text-gray-200">
          Meet{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            RXUI
          </span>
          , an opinionated UI library for RovelOS and our other websites.
        </h1>
      </div>
      <h3 className="mx-6 text-4xl font-medium mr-auto text-gray-900 dark:text-gray-200">
        Components
      </h3>
      <div className="mx-3 my-6 py-3 px-2 rounded-md border-1 border-gray-400 dark:border-gray-900 bg-gray-300/50 dark:bg-gray-800/50">
        <h1 className="text-6xl font-black mr-auto text-gray-900 dark:text-gray-200">
          Header 1
        </h1>
        <h2 className="text-5xl font-extrabold mr-auto text-gray-900 dark:text-gray-200">
          Header 2
        </h2>
        <h3 className="text-4xl font-bold mr-auto text-gray-900 dark:text-gray-200">
          Header 3
        </h3>
        <h4 className="text-3xl font-medium mr-auto text-gray-900 dark:text-gray-200">
          Header 4
        </h4>
        <h5 className="text-2xl font-medium mr-auto text-gray-900 dark:text-gray-200">
          Header 5
        </h5>
        <h6 className="text-xl font-medium mr-auto text-gray-900 dark:text-gray-200">
          Header 6
        </h6>
      </div>
      <div className="mx-3 my-6 py-3 px-2 rounded-md border-1 border-gray-400 dark:border-gray-900 bg-gray-300/50 dark:bg-gray-800/50">
        <p className="text-lg font-light mr-auto text-gray-900 dark:text-gray-200">
          Paragraph
        </p>
      </div>
      <div className="mx-3 my-6 py-3 px-2 rounded-md border-1 border-gray-400 dark:border-gray-900 bg-gray-300/50 dark:bg-gray-800/50">
        <button className="px-3 py-2 ml-auto border-1 bg-indigo-600 border-indigo-700 rounded-md">
          <p className="text-lg font-medium mr-auto text-gray-200">
            Primary Button
          </p>
        </button>
        <button className="px-3 py-2 ml-auto border-1 bg-indigo-600 border-indigo-700 rounded-full">
          <p className="text-lg font-medium mr-auto text-gray-200">
            Alternate Button
          </p>
        </button>
      </div>
      <p className="mx-3 my-6 py-3 px-2">More Coming Soon!</p>
    </>
  );
}
