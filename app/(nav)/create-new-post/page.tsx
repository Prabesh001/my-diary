import React from "react";

const CreateNewPost = () => {
  return (
    <div>
      <form action="">
        <div className="flex flex-col gap-3">
          <textarea
            placeholder="Write your post here..."
            className="bg-[#000319] p-2 rounded-md border-2 border-gray-700 focus:outline-none focus:border-blue-400 h-[200px] resize-none"
          ></textarea>
          <input
            type="file"
            className="bg-[#000319] p-2 rounded-md border-2 border-gray-700 focus:outline-none focus:border-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewPost;
