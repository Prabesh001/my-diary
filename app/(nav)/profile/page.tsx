import Avatar from "@/components/Avatar";
import NewPost from "@/components/NewPost";
import PostScroller from "@/components/PostScroller";
import posts from "@/data/posts";
import Image from "next/image";
import React from "react";

const Profile = () => {
  const name = "Christal Dallon";
  const filteredPost = posts.filter((post) => post?.username === name);
  return (
    <div className="relative">
      <div>
        <Image
          src={"/avatar.jpg"}
          alt=""
          className="w-full aspect-[16/5] object-cover"
          width={100}
          height={100}
        />
      </div>

      <div className="-translate-y-8 px-4">
        <div className="flex items-end justify-between">
          <div className="flex items-end gap-3">
            <div className="rounded-full border-2 border-gray-900">
              <Avatar src={""} alt="Profile" size={100} />
            </div>
            <div>
              <h1 className="text-xl text-nowrap font-bold">{name}</h1>
              <p className="text-sm text-gray-400">201 Friends</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <button className="profile-btn">Follow</button>
            <button className="profile-btn">Message</button>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button className="profile-btn">Posts</button>
          <button className="profile-btn">About</button>
          <button className="profile-btn">Photos</button>
          <button className="profile-btn">Videos</button>
          <button className="profile-btn">Friends</button>
        </div>
      </div>

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
