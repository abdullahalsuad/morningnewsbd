import React from "react";
import HighlightNewsBlock from "./HighlightNewsBlock";

const HomeSecondSection = () => {
  return (
    <section className="mx-auto w-8/12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 auto-rows-fr my-10 px-4 lg:px-0">
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
