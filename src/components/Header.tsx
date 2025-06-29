import { useState } from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "home", label: "Home" },
  {
    id: "research",
    label: "Research & Commentary",
    children: [
      { id: "projects", label: "Our Projects" },
    ],
  },
  { id: "about", label: "About" },
  { id: "involved", label: "Get Involved" },
];

export const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-motion-dark/95 backdrop-blur-sm border-b border-motion-gray">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onTabChange("home")}
            className="flex items-center space-x-1 font-garamond text-xl font-bold transition-colors"
          >
            <span className="text-motion-red">MOTION TO</span>
            <span className="text-white"> INDICT </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {tabs.map((tab) =>
              tab.children ? (
                <div key={tab.id} className="relative group">
                  {/* Label and caret */}
                  <button
                    onClick={() => onTabChange(tab.id)}
                    className={cn(
                      "font-garamond font-medium transition-colors hover:text-motion-red flex items-center gap-1",
                      activeTab.startsWith(tab.id)
                        ? "text-motion-red border-b-2 border-motion-red pb-1"
                        : "text-white"
                    )}
                  >
                    {tab.label}
                    <svg
                      className="w-3 h-3 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.174l3.71-3.942a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  {tab.children && tab.children.length > 0 && (
                    <div className="absolute left-0 mt-2 w-48 bg-motion-dark border border-motion-gray shadow-lg rounded hidden group-hover:block z-50">
                      {tab.children.map((child) => (
                        <button
                          key={child.id}
                          onClick={() => onTabChange(child.id)}
                          className={cn(
                            "font-garamond block w-full text-left px-4 py-2 text-base hover:bg-motion-gray/30 transition-colors",
                            activeTab === child.id
                              ? "text-motion-red"
                              : "text-white"
                          )}
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={cn(
                    "font-garamond text-base font-medium transition-colors hover:text-motion-red",
                    activeTab === tab.id
                      ? "text-motion-red border-b-2 border-motion-red pb-1"
                      : "text-white"
                  )}
                >
                  {tab.label}
                </button>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-motion-red transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-motion-gray">
            {tabs.map((tab) =>
              tab.children ? (
                <div key={tab.id}>
                  {/* Parent */}
                  <button
                    onClick={() => {
                      onTabChange(tab.id);
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "font-garamond block w-full text-left py-2 px-4 text-base font-medium transition-colors hover:text-motion-red",
                      activeTab.startsWith(tab.id)
                        ? "text-motion-red"
                        : "text-white"
                    )}
                  >
                    {tab.label}
                  </button>
                  {/* Children */}
                  {tab.children.length > 0 &&
                    tab.children.map((child) => (
                      <button
                        key={child.id}
                        onClick={() => {
                          onTabChange(child.id);
                          setMobileMenuOpen(false);
                        }}
                        className={cn(
                          "font-garamond block w-full text-left py-2 pl-8 pr-4 text-base font-medium transition-colors hover:text-motion-red",
                          activeTab === child.id
                            ? "text-motion-red"
                            : "text-white"
                        )}
                      >
                        {child.label}
                      </button>
                    ))}
                </div>
              ) : (
                <button
                  key={tab.id}
                  onClick={() => {
                    onTabChange(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={cn(
                    "font-garamond block w-full text-left py-2 px-4 text-base font-medium transition-colors hover:text-motion-red",
                    activeTab === tab.id
                      ? "text-motion-red"
                      : "text-white"
                  )}
                >
                  {tab.label}
                </button>
              )
            )}
          </nav>
        )}
      </div>
    </header>
  );
};
