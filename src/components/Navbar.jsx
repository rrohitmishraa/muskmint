import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/images/brand/logo.webp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white border-b border-gray-100 shadow-sm"
            : "bg-transparent"
        }`}
    >
      <nav className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <img
            src={Logo}
            alt="MuskMint Logo"
            className="w-11 h-11 md:w-14 md:h-14 object-contain"
          />

          {/* Brand always primary */}
          <span className="text-lg md:text-2xl font-semibold text-primary leading-none">
            MuskMint
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-base font-medium text-gray-700">
          <Link
            to="/menu"
            className="hover:text-primary transition-colors duration-200"
          >
            Menu
          </Link>
          <Link
            to="/order"
            className="hover:text-primary transition-colors duration-200"
          >
            Order
          </Link>
          <Link
            to="/about"
            className="hover:text-primary transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary transition-colors duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 flex flex-col gap-4 text-sm font-medium text-gray-700">
            <Link to="/menu" onClick={() => setOpen(false)}>
              Menu
            </Link>
            <Link to="/order" onClick={() => setOpen(false)}>
              Order
            </Link>
            <Link to="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
