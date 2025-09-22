import React from "react";
import HighlightNewsBlock from "./HighlightNewsBlock";

export const HomeEightSection = () => {
  return (
    <section className="mx-auto w-8/12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 auto-rows-fr my-10 px-4 lg:px-0">
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
