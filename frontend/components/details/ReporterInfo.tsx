import Image from "next/image";
import React from "react";

const ReporterInfo = () => {
  return (
    <div className="relative border border-gray-300 bg-white  mt-10">
      {/* Label with arrow */}
      <div className="absolute -top-3">
        <span className="bg-gray-900 text-white text-sm font-semibold px-3 py-3 relative">
          প্রতিবেদকের তথ্য
        </span>
      </div>

      {/* Content */}
      <div className="flex items-center justify-between mt-5 p-6">
        {/* Left side: image + name */}
        <div className="flex items-center gap-4">
          <Image
            src="https://morningnewsbd.com/assets/images/admin/17372991721726676905ra.jpg"
            alt="Reporter"
            width={100}
            height={100}
            className="rounded-full object-cover border"
          />
          <h4 className="text-lg font-bold text-gray-900">মোঃ রাকিবুল ইসলাম</h4>
        </div>

        {/* Right side: phone number */}
        <div className="border px-3 py-1 text-md text-gray-900">
          প্রতিবেদকের মোবাইলঃ <span className="font-medium">01998470369</span>
        </div>
      </div>
    </div>
  );
};

export default ReporterInfo;
