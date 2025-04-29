import Avatar from "@/components/Avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const name = "Christal Dallon";
  return (
    <div className="relative">
      <div>
        <Image
          src={"/avatar.jpg"}
          alt="Cover Photo"
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
          <Link href={"/profile"}>
            <button className="profile-btn">Posts</button>
          </Link>
          <button className="profile-btn">About</button>
          <button className="profile-btn">Photos</button>
          <button className="profile-btn">Videos</button>
          <Link href={"/profile/friends"}>
            <button className="profile-btn">Friends</button>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ProfileLayout;
