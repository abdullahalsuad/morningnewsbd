import React from "react";
import HighlightNewsBlock from "./HighlightNewsBlock";

const HomeSecondSection = () => {
  return (
    <section className="mx-auto max-w-full xl:max-w-[1320px] 2xl:max-w-[1400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 auto-rows-fr my-10 px-4">
        <div className="h-full">
          <HighlightNewsBlock title="রাজনীতি" />
        </div>
        <div className="h-full">
          <HighlightNewsBlock title="আন্তজাতিক" />
        </div>
        <div className="h-full">
          <HighlightNewsBlock title="তথ্য প্রযুক্তি" />
        </div>
      </div>
    </section>
  );
};

export default HomeSecondSection;
