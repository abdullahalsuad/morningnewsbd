import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Home } from "lucide-react";

const Breadcrumb = () => {
  const paths = [
    { name: "প্রচ্ছদ", href: "/" },
    { name: "জাতীয়", href: "/national" },
  ];

  return (
    <nav className="bg-white  mb-4 py-4 px-2 shadow-sm">
      <ol className="flex items-center space-x-2 text-sm text-gray-700">
        {/* Home Icon */}
        <li>
          <a href="/" className="flex items-center hover:text-red-500">
            <Home size={14} className="mr-1" />
            <span>প্রচ্ছদ</span>
          </a>
        </li>

        {/* Other Paths */}
        {paths.slice(1).map((path, idx) => (
          <li key={idx} className="flex items-center">
            <span className="mx-1">
              <MdKeyboardDoubleArrowRight />
            </span>
            <a
              href={path.href}
              className="hover:text-red-500 transition-colors"
            >
              {path.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
