import React from "react";
import LeftNews from "./LeftNews";
import RightSidebar from "./RightSidebar";

const CategoryWrapper = () => {
  return (
    <section className="mx-auto w-8/12 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
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
