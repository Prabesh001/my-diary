import React from "react";
import Avatar from "./Avatar";

const EventCard = () => {
  return (
    <div className="text-black rounded-sm p-2 flex items-center gap-2 bg-white w-full">
      <div className="shadow-sm rounded-full border-2 border-[#0003198c]">
        <Avatar src={""} alt="Event" size={40} />
      </div>
      <div className="flex flex-col">
        <span>Event 1</span>
        <span className="text-xs text-gray-600">
          20<sup>th</sup> April, 2020
        </span>
      </div>
    </div>
  );
};

export default EventCard;
