import { Link, useLocation } from "react-router-dom";
import { Droplets, Menu, X } from "lucide-react";
import { useState } from "react";
import { LinkButton } from "./LinkButton";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-2.5 rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-teal-600 bg-clip-text text-transparent">
              WhipWash
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? "bg-teal-50 text-teal-700"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <LinkButton to="/contact">Schedule Pickup</LinkButton>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm px-2 py-2 transition-colors ${
                    isActive(item.path)
                      ? "text-teal-700 font-medium bg-teal-50 rounded"
                      : "text-gray-600"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <LinkButton
                to="/contact"
                className="mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule Pickup
              </LinkButton>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}