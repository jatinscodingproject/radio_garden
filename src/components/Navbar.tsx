import { useState } from "react";
import { Globe2, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-3 left-3 right-3 z-50">
      <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl">

        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-blue-600 p-2 sm:p-3">
              <Globe2 className="h-5 w-5 text-white sm:h-6 sm:w-6" />
            </div>

            <h1 className="text-lg font-bold text-white sm:text-xl lg:text-2xl">
              RadioFyy
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base text-gray-300">
            <button className="transition hover:text-white">
              Home
            </button>

            <button className="transition hover:text-white">
              Terms & Conditions
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 md:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-white/10 md:hidden">
            <button
              className="block w-full px-6 py-4 text-left text-white hover:bg-white/10"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </button>

            <button
              className="block w-full px-6 py-4 text-left text-white hover:bg-white/10"
              onClick={() => setMenuOpen(false)}
            >
              Terms & Conditions
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}