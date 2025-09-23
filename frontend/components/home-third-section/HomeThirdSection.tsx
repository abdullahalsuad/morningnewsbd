import React from "react";
import NewsCard from "./NewsCard";
import MiddleNewsCard from "./MiddleNewsCard";

const HomeThirdSection = () => {
  return (
    <div className="mx-auto lg:w-8/12  py-2 my-5 px-4 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6  my-6 sm:my-10">
        {/* Left News */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <NewsCard title="খেলাধুলা" />
        </div>

        {/* Middle News */}
        <div className="col-span-12 md:col-span-6 lg:col-span-6 ">
          <MiddleNewsCard />
        </div>

        {/* Right News */}
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <NewsCard title="জাতীয়" />
        </div>
      </div>
    </div>
  );
};

export default HomeThirdSection;
