import React from "react";
import HighlightNewsBlock from "./HighlightNewsBlock";

export const HomeEightSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 auto-rows-fr my-10">
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
  );
};
