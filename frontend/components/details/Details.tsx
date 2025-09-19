import React from "react";
import LeftSidebar from "./LeftSidebar";
import MainContent from "./MainContent";
import RightSidebar from "./RightSidebar";

const Details = () => {
  return (
    <>
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar */}
          <div className="w-full lg:w-64 xl:w-72 order-2 lg:order-1">
            <LeftSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0 order-1 lg:order-2">
            <MainContent />
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-80 xl:w-96 order-3 lg:order-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
