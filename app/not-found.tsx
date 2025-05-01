import Link from "next/link";
import React from "react";

const ErrorPage = ({ error }: { error: string }) => {
  return (
    <div className="px-4 h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-[#000319c0] text-gray-800 dark:text-gray-300 p-8 rounded-lg shadow-lg max-w-md w-full">
        {error ? (
          <>
            <h1 className="text-4xl font-bold mb-8">Error Occured</h1>
            <p className="text-gray-600 mb-6">
              {error || "An unexpected error occurred."}
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-8">404 - Page Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The page you are looking for is unavailable.
            </p>
          </>
        )}
        <Link
          href="/"
          className="inline-block py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
        >
          Go back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
