import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Navbar />
      <div className="flex sm:translate-x-0 duration-200">
        <div className="sticky top-18 h-[calc(100vh-2.5rem)] shrink-0">
          <Sidebar />
        </div>

        <div className="flex-1 min-w-0">
          <div className="w-full p-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default layout;
