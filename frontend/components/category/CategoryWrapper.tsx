import React from "react";
import LeftNews from "./LeftNews";
import RightSidebar from "./RightSidebar";

const CategoryWrapper = () => {
  return (
    <section className="mx-auto max-w-full xl:max-w-[1320px] 2xl:max-w-[1400px]  mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 px-4">
        {/* Main News Section */}
        <div className="lg:col-span-8">
          <LeftNews />
        </div>

        {/* Sidebar Section */}
        <div className="lg:col-span-4">
          <RightSidebar />
        </div>
      </div>
    </section>
  );
};

export default CategoryWrapper;
