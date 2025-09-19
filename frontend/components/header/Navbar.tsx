"use client";

import { useState } from "react";
import { LucideHome } from "lucide-react";
import { FiMenu, FiSearch, FiChevronDown } from "react-icons/fi";
import { LuNewspaper } from "react-icons/lu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import MobileDrawer from "./MobileDrawer";

type NavChild = { label: string };
type NavItem = { label: string; children?: NavChild[] };

const NAV_LINKS: NavItem[] = [
  { label: "প্রচ্ছদ" },
  {
    label: "জাতীয়",
    children: [{ label: "অর্থনীতি" }, { label: "দুর্নীতি" }],
  },
  {
    label: "রাজনীতি",
    children: [
      { label: "বিএনপি" },
      { label: "আওয়ামীলীগ" },
      { label: "অনন্য" },
      { label: "বিশেষ প্রতিবেদন" },
    ],
  },
  {
    label: "আন্তর্জাতিক",
    children: [
      { label: "জাতিসংঘ" },
      { label: "বিশ্ব রাজনীতি" },
      { label: "সারাবিশ্ব" },
    ],
  },
  { label: "তথ্য প্রযুক্তি" },
  {
    label: "সারাদেশ",
    children: [
      { label: "ঢাকা" },
      { label: "চট্টগ্রাম" },
      { label: "রাজশাহী" },
      { label: "খুলনা" },
      { label: "বরিশাল" },
      { label: "সিলেট" },
      { label: "রংপুর" },
      { label: "ময়মনসিংহ" },
    ],
  },
  { label: "ক্যাম্পাস" },
  { label: "বিনোদন" },
  { label: "খেলাধুলা" },
  { label: "মিডিয়া" },
  { label: "ই-পেপার" },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="w-full bg-[#0A4466] text-white sticky top-0 z-40 shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        {/*  BAR  */}
        <div className="flex items-center justify-between h-12">
          {/* Desktop nav */}
          <nav className="hidden lg:flex items-stretch gap-0">
            {NAV_LINKS.map((item) => {
              const hasChildren = (item.children?.length ?? 0) > 0;

              //  NO CHILDREN
              if (!hasChildren) {
                const icon =
                  item.label === "প্রচ্ছদ" ? (
                    <LucideHome size={16} />
                  ) : item.label === "ই-পেপার" ? (
                    <LuNewspaper size={16} />
                  ) : null;

                return (
                  <div
                    key={item.label}
                    className="px-3 flex items-center rounded-md hover:bg-[#093955]/80  select-none cursor-pointer"
                  >
                    <span className="inline-flex items-center gap-1 cursor-pointer">
                      {icon}
                      {item.label}
                    </span>
                  </div>
                );
              }

              //  HAS CHILDREN  DROPDOWN
              return (
                <HoverDropdown key={item.label} label={item.label}>
                  {item.children!.map((c) => (
                    <DropdownMenuItem
                      key={c.label}
                      className="cursor-pointer hover:bg-gray-100 hover:text-white"
                    >
                      {c.label}
                    </DropdownMenuItem>
                  ))}
                </HoverDropdown>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -ml-2 hover:bg-[#093955] rounded-md"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu size={20} />
          </button>

          {/* Right: Search and post */}
          <button className="p-2 rounded-md bg-[#89f5f5] text-black">
            <Link href="/post">পোস্ট করুন</Link>
          </button>

          <button
            onClick={() => setShowSearch((s) => !s)}
            className="p-2 rounded-md hover:bg-[#093955]"
            aria-label="Toggle search"
          >
            <FiSearch size={18} />
          </button>
        </div>

        {/* Collapsible search */}
        {showSearch && (
          <div className="pb-3">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="খুঁজুন…"
                className="w-full rounded-md border border-transparent bg-white/95 text-gray-800 placeholder-gray-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button
                type="button"
                variant="secondary"
                className="bg-white text-[#0A4466] hover:bg-gray-100"
              >
                Search
              </Button>
            </div>
          </div>
        )}
      </div>

      {/*  Mobile Drawer (added)  */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={NAV_LINKS}
      />
    </div>
  );
}

/*  Reusable Hover Dropdown  */
function HoverDropdown({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="px-3 h-12 text-white hover:bg-[#093955]/80 inline-flex items-center gap-1 cursor-pointer"
          >
            {label}
            <FiChevronDown
              size={14}
              className={`transition-transform cursor-pointer ${
                open ? "rotate-180" : "rotate-0"
              }`}
            />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-56 bg-white text-gray-900 cursor-pointer"
        >
          {children}
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  );
}
