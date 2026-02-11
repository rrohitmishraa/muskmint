import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100">
      <div className="max-w-7xl 2xl:max-w-[1400px] mx-auto px-4 py-8">
        {/* Top */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <h2 className="font-semibold text-primary">Musk Mint</h2>
            <p className="text-sm text-muted mt-1">Eat Clean. Drink Fresh.</p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-gray-600">
            <Link to="/about" className="hover:text-primary">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Contact
            </Link>
            <Link to="/privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-primary">
              Terms
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Musk Mint. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
