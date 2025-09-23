"use client";

import { Home } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const CategoryBreadcrumb = () => {
  const params = useParams<{ category: string; slug?: string[] }>();

  return (
    <div className="bg-[#F8FEFE] shadow-md border-b-3 border-[#8D0A0A] px-4 py-2 mb-4   flex items-center gap-2 text-[18px] ">
      <Home className="w-4 h-4 text-[#8D0A0A]" />
      <span className="text-gray-600">
        <IoIosArrowForward size={20} className="text-black" />
      </span>
      <Link href={`/${params.category}`}>{params.category}</Link>

      {params.slug && params.slug.length > 0 && (
        <>
          <IoIosArrowForward size={20} className="text-black" />
          <span>{decodeURIComponent(params.slug[0])}</span>
        </>
      )}
    </div>
  );
};

export default CategoryBreadcrumb;
