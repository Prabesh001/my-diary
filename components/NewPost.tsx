import React from "react";
import Avatar from "./Avatar";
import { FaFaceGrin, FaImage, FaLocationPin } from "react-icons/fa6";
import Link from "next/link";

const NewPost = () => {
  return (
    <div className="bg-[#000319] w-full rounded p-4 text-gray-700 flex flex-col gap-3">
      <div className="flex gap-4">
        <Link href={"/profile"}>
          <Avatar src={""} alt="Profile" size={40} />
        </Link>
        <Link
          href={"/create-new-post"}
          className="w-full text-white rounded-3xl"
        >
          <input
            type="text"
            className="w-full h-full text-white border-gray-800 border px-6 rounded-3xl"
            placeholder="What's on your mind?"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 text-white">
          <FaImage />
          <FaLocationPin />
          <FaFaceGrin />
        </div>
        <div>
          <button className="cursor-pointer text-white text-sm border-2 py-1 px-4 bg-[#0a0a0a9d] rounded-2xl">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
