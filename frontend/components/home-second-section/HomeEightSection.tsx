import React from "react";
import HighlightNewsBlock from "./HighlightNewsBlock";

export const HomeEightSection = () => {
  return (
    <section className="mx-auto max-w-full xl:max-w-[1320px] 2xl:max-w-[1400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 auto-rows-fr my-10 px-4">
        <div className="h-full">
          <HighlightNewsBlock title="সারাদেশ" />
        </div>
        <div className="h-full">
          <HighlightNewsBlock title="ক্যাম্পাস" />
        </div>
        <div className="h-full">
          <HighlightNewsBlock title="বিনোদন" />
        </div>
      </div>
    </section>
  );
};
