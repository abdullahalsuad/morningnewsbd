"use client";

import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

type Props = { city?: string };

export default function HeaderTop({ city = "ঢাকা" }: Props) {
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("bn-BD", {
        dateStyle: "full",
        timeStyle: "short",
      }).format(new Date());
    setNow(fmt());
    const id = setInterval(() => setNow(fmt()), 60_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between text-sm">
        {/* Left: City + Time */}
        <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
          <FaMapMarkerAlt />
          <span className="font-black text-[15px]">{city}</span>
          <span className="hidden sm:inline">
            <SlCalender />
          </span>
          <span className="hidden sm:inline font-black text-[15px]">{now}</span>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            aria-label="YouTube"
            className="p-2 rounded-full bg-red-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FaYoutube size={20} className="text-red-600" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="p-2 rounded-full bg-blue-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FaLinkedinIn size={20} className="text-[#0A66C2]" />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="p-2 rounded-full bg-blue-100 dark:bg-gray-800 hover:bg-gray-2 00 dark:hover:bg-gray-700 transition"
          >
            <FaTwitter size={20} className="text-sky-500" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="p-2 rounded-full bg-blue-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            <FaFacebookF size={20} className="text-[#1877F2]" />
          </a>
        </div>
      </div>
    </div>
  );
}
