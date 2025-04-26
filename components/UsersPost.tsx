import { UserPostType } from "@/types/UserPost";
import React from "react";
import Avatar from "./Avatar";
import Image from "next/image";
import {
  FaComment,
  FaEllipsisVertical,
  FaShare,
  FaThumbsUp,
} from "react-icons/fa6";
import Popover from "./Popover";

const UsersPost = ({
  _id,
  username,
  profile,
  time,
  emotion,
  description,
  image,
}: UserPostType) => {
  return (
    <div className="bg-gray-800 rounded p-4" key={_id}>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Avatar src={profile} alt={username} />
            <div className="flex flex-col">
              <p>
                <span className="">{username}</span>{" "}
                {emotion && (
                  <span className="text-xs opacity-90">
                    is feeling {emotion}
                  </span>
                )}
              </p>
              <p className="text-xs opacity-60">{time}</p>
            </div>
          </div>
          <div>
            <Popover
              popoverChildClassName="top-6 -left-12"
              parentContent={<FaEllipsisVertical />}
              childrenContent={
                <div className="rounded-md flex flex-col text-sm overflow-hidden bg-[#020227] shadow-sm shadow-white">
                  <button key="123" className="hover:bg-gray-900 px-3 py-2">
                    Share
                  </button>
                </div>
              }
            />
          </div>
        </div>
        <div className="px-2 py-3">
          <p>{description}</p>
          <div className="w-full aspect-video">
            <Image
              src={image}
              alt="Username"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center text-gray-400 px-4">
        <button className="flex gap-2 items-center text-gray-400 hover:text-blue-400">
          <FaThumbsUp /> Like
        </button>
        <button className="flex gap-2 items-center text-gray-400 hover:text-blue-400">
          <FaComment /> Comments
        </button>
        <button className="flex gap-2 items-center text-gray-400 hover:text-blue-400">
          <FaShare /> Share
        </button>
      </div>
    </div>
  );
};

export default UsersPost;
