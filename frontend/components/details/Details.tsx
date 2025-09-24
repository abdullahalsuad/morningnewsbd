import React from "react";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

const Details = () => {
  return (
    <div className="bg-[#F1F1F2]">
      <div className="mx-auto max-w-full xl:max-w-[1320px] 2xl:max-w-[1400px]   pt-10 pb-20 ">
        <div className="flex flex-col lg:flex-row lg:gap-3 px-4">
          {/* Left Sidebar */}
          <div className="w-full lg:w-40 xl:w-60 order-2 lg:order-1">
            <LeftSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0 order-1 lg:order-2">
            <MainContent />
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-52 xl:w-80  order-3 lg:order-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
