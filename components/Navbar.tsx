import React from "react";
import Avatar from "./Avatar";
import {
  FaBell,
  FaComments,
  FaEllipsisVertical,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import Popover from "./Popover";
import { ellipsisData } from "@/data/navbarData";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex z-10 sticky top-0 justify-between items-center p-4 noscroll bg-[#000319]">
      <Link href={"/"}>
        <div className="logo text-blue-400 text-2xl font-bold select-none cursor-pointer">
          MyDiary
        </div>
      </Link>
      <SearchBar />
      <div className="profile flex text-2xl gap-3 lg:gap-5 items-center">
        <div className="nav-button box-sd">
          <FaComments />
        </div>
        <div className="nav-button box-sd">
          <FaBell />
        </div>
        <div className="sm:hidden">
          <Popover
            popoverChildClassName="top-6 -left-22"
            parentContent={<FaEllipsisVertical />}
            childrenContent={
              <div className="rounded-md flex flex-col text-sm overflow-hidden bg-[#020227de] shadow-sm shadow-white">
                {ellipsisData.map((ele) => (
                  <button
                    key={ele.label}
                    className="hover:bg-gray-900 px-3 py-2"
                  >
                    {ele.label}
                  </button>
                ))}
              </div>
            }
          />
        </div>
        <div>
          <Avatar src={""} alt="Profile" size={40} />
        </div>
      </div>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className="search sm:flex gap-2 items-center  border-1 px-3 py-2 hidden transition-all duration-150 border-gray-400 focus:border-blue-400 focus:outline-0 dark:border-gray-700 rounded-md bg-gray-400 dark:bg-gray-900">
      <label htmlFor="search">
        <FaMagnifyingGlass color="#ffffff8c" size={14} />
      </label>
      <input
        id="search"
        placeholder="Tap to Search"
        type="search"
        className="focus:outline-0 pl-1 min-w-[100px] w-[45vw]"
      />
    </div>
  );
};
export default Navbar;
