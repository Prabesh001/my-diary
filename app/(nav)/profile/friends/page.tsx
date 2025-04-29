"use client";
import { useState } from "react";

const Friends = () => {
  const [selectedIndex, setSelectedIndex] = useState<0 | 1 | 2>(0);

  const handleSelectIndex = (index: 0 | 1 | 2) => {
    setSelectedIndex(index);
  };
  const options: string[] = ["All Friends", "Recently Added", "Following"];
  return (
    <div className="px-4">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Friends</h1>
        <div className="flex gap-3">
          <input
            type="search"
            className="outline-gray-500 outline-1 px-5 py-1 rounded-2xl"
            placeholder="Search"
          />
          <button className="text-blue-500">Friend Requests</button>
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        {options.map((option, index) => (
          <button
            key={index}
            className={`${
              selectedIndex === index
                ? "bg-blue-600 text-white"
                : "bg-gray-600 text-gray-200"
            } px-4 py-2 rounded-lg cursor-pointer`}
            onClick={() => handleSelectIndex(index as 0 | 1 | 2)}
          >
            {option}
          </button>
        ))}
      </div>
      <hr className="mt-3 border-gray-600" />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {selectedIndex === 0
          ? Array(20)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-700 min-w-30 aspect-square p-4 rounded-lg"
                >
                  <h2 className="text-center">Friend {index + 1}</h2>
                </div>
              ))
          : selectedIndex === 1
          ? Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-500 min-w-30 aspect-square p-4 rounded-lg"
                >
                  <h2 className="text-center">Friend {index + 1}</h2>
                </div>
              ))
          : Array(5)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-600 min-w-30 aspect-square p-4 rounded-lg"
                >
                  <h2 className="text-center">Friend {index + 1}</h2>
                </div>
              ))}
      </div>
    </div>
  );
};

export default Friends;
