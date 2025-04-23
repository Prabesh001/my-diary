import { sidebarfav, sidebartop } from "@/data/sidebardata";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-4rem)] transition-all w-0 p-0 sm:p-2 overflow-y-auto sm:w-[230px] bg-[#000319]">
      {sidebartop.map(({ Icon, label, redirect }) => (
        <Link
          href={redirect}
          key={label}
          className="flex p-1 items-center group gap-2 px-2"
        >
          <Icon size={14} />{" "}
          <span className="group-hover:translate-x-2 duration-300">
            {label}
          </span>
        </Link>
      ))}
      <hr className="border-gray-600 my-3" />
      <p className="text-lg font-bold">Favourites</p>
      {sidebarfav.map(({ Icon, label, redirect }) => (
        <Link
          href={redirect}
          key={label}
          className="flex p-1 items-center group gap-2 px-2"
        >
          <Icon size={14} />{" "}
          <span className="group-hover:translate-x-2 duration-300">
            {label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
