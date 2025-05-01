"use client";
import Link from "next/link";
import React from "react";

const error = ({ error }: { error: string }) => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 px-2 text-center">
        <div className="h-screen flex flex-col justify-center text-gray-800 dar:text-gray-300 items-center">
          <h1 className="text-8xl font-extrabold text-red-500">500</h1>
          <p className="text-4xl font-medium text-gray-800 dark:text-gray-300">
            Internal Server Error
          </p>
          <p className="text-xl mt-4 text-gray-800 dark:text-gray-300">
            We apologize for the inconvenience. Please try again later.
            {JSON.stringify(error)}
          </p>
          <Link
            href={"/"}
            className="text-black dark:text-white border-2 p-2 mt-3 rounded"
          >
            Go Back To Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default error;
