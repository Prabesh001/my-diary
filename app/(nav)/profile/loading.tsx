"use client"
import Spinner from "@/components/Spinner";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen fixed bg-[#0003198c] inset-0 overflow-hidden flex gap-2 justify-center items-center">
      <Spinner /> <div>Loading...</div>
    </div>
  );
};

export default Loading;
