import NewPost from "@/components/NewPost";
import PostScroller from "@/components/PostScroller";
import posts from "@/data/posts";
import React from "react";

const Profile = () => {
  const name = "Christal Dallon";
  const filteredPost = posts.filter((post) => post?.username === name);
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="min-w-80 h-max md:sticky md:top-18">
          <div className="bg-[#000319] p-4 rounded">
            <p className="font-bold">Basic Info</p>
            <div className="flex flex-col mt-2 gap-3">
              <button className="w-full p-1 cursor-pointer border-2 rounded-2xl">
                Add Bio
              </button>
              <button className="w-full p-1 cursor-pointer border-2 rounded-2xl">
                Edit details
              </button>
              <button className="w-full p-1 cursor-pointer border-2 rounded-2xl">
                Add hobbies
              </button>
            </div>
          </div>
          <div className="photos bg-[#000319] p-4 rounded mt-2">
            <p className="font-bold">Photos</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-full aspect-square bg-gray-500 rounded-md"
                  ></div>
                ))}
            </div>
          </div>
        </div>
        <div className="w-full">
          <NewPost />
          <PostScroller posts={filteredPost} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
