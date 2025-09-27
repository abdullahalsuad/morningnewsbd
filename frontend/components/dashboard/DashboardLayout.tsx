"use client";

import React, { useEffect, useState, useCallback } from "react";
import Sidebar from "./Sidebar";
import { FiMenu, FiX } from "react-icons/fi";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  // lock body scroll when drawer is open
  useEffect(() => {
    if (open)
      document.body.classList.add("overflow-hidden", "lg:overflow-auto");
    else document.body.classList.remove("overflow-hidden", "lg:overflow-auto");
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  // close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-800">
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-shrink-0 lg:h-screen lg:sticky lg:top-0 lg:left-0 lg:z-30">
        <Sidebar />
      </aside>

      {/* Main column */}
      <div className="flex min-h-screen w-0 flex-1 flex-col">
        {/* Mobile/tablet top bar - shows below 1024px */}
        <header className="lg:hidden sticky top-0 z-40 bg-white border-b">
          <div className="h-12 px-4 flex items-center justify-between">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-gray-100 hover:bg-gray-200"
              aria-label="Open menu"
            >
              <FiMenu size={20} />
              <span className="sr-only">Open menu</span>
            </button>
            <div className="font-semibold text-lg">Dashboard</div>
            <div className="w-10" />
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 lg:p-6">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>

      {/* Mobile/tablet drawer - shows below 1024px */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          open ? "" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={close}
        />

        {/* Drawer */}
        <div
          className={`absolute left-0 top-0 h-screen w-72 max-w-[85vw] transform bg-[#0A4466] transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          } shadow-xl`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between h-12 px-4 border-b border-white/20 text-white">
            <span className="font-semibold">Menu</span>
            <button
              onClick={close}
              className="p-2 rounded hover:bg-white/10"
              aria-label="Close menu"
            >
              <FiX size={22} />
            </button>
          </div>
          <div className="h-[calc(100vh-3rem)] overflow-y-auto">
            <Sidebar onNavigate={close} />
          </div>
        </div>
      </div>
    </div>
  );
}
