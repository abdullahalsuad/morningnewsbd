import { LucideHome } from "lucide-react";
import { useState } from "react";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import { LuNewspaper } from "react-icons/lu";

export type NavChild = { label: string };
export type NavItem = { label: string; children?: NavChild[] };

const MobileDrawer = ({
  open,
  onClose,
  items,
}: {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
}) => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setExpanded((s) => ({ ...s, [key]: !s[key] }));

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden
        className={`fixed inset-0 z-50 bg-black/40 transition-opacity lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 left-0 z-[60] h-screen w-[280px] max-w-[85vw] lg:hidden
        bg-[#071E2B] text-white shadow-xl transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 h-12 border-b border-white/10">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1 text-white/90"
          >
            <FiX className="mr-1" />
            <span className="tracking-wide">CLOSE</span>
          </button>
        </div>

        {/* List */}
        <nav className="overflow-y-auto h-[calc(100vh-48px)] pb-6">
          <ul className="divide-y divide-white/5">
            {items.map((item) => {
              const hasChildren = (item.children?.length ?? 0) > 0;

              // simple row
              if (!hasChildren) {
                const icon =
                  item.label === "প্রচ্ছদ" ? (
                    <LucideHome size={16} />
                  ) : item.label === "ই-পেপার" ? (
                    <LuNewspaper size={16} />
                  ) : null;

                return (
                  <li key={item.label}>
                    <button
                      className="w-full text-left px-4 py-3 flex items-center gap-2 hover:bg-white/5"
                      onClick={onClose}
                    >
                      {icon}
                      <span className="text-[15px]">{item.label}</span>
                    </button>
                  </li>
                );
              }

              // expandable row
              const isOpen = !!expanded[item.label];
              return (
                <li key={item.label}>
                  <button
                    className="w-full text-left px-4 py-3 flex items-center justify-between hover:bg-white/5"
                    onClick={() => toggle(item.label)}
                  >
                    <span className="text-[15px]">{item.label}</span>
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </button>

                  {/* children */}
                  <div
                    className={`overflow-hidden transition-[max-height] duration-300 ${
                      isOpen ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul className="bg-[#0B2A3A]">
                      {item.children!.map((c) => (
                        <li key={c.label}>
                          <button
                            className="w-full text-left pl-7 pr-4 py-3 text-[14px] hover:bg-white/5"
                            onClick={onClose}
                          >
                            {c.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default MobileDrawer;
