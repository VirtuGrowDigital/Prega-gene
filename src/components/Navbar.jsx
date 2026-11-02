
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import pregaLogo from "../assets/icons/prega-logo.jpeg";

const navLinks = [
  {
    label: "The Test",
    href: "/#the-test",
    section: "the-test",
  },
  {
    label: "About",
    href: "/about",
    section: "about",
  },
  {
    label: "How to Use",
    href: "/how-to-use",
    section: "how-to-use",
  },
  {
    label: "Understand Results",
    href: "/understand-results",
    section: "understand-results",
  },
  {
    label: "Learn",
    href: "/learn",
    section: "learn",
  },
  {
    label: "FAQ",
    href: "/faq",
    section: "faq",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (section) => {
    const { pathname, hash } = location;

    switch (section) {
      case "the-test":
        return pathname === "/" && hash === "#the-test";

      case "about":
        return pathname === "/about";

      case "how-to-use":
        return pathname === "/how-to-use";

      case "understand-results":
        return pathname === "/understand-results";

      case "learn":
        return pathname === "/learn" || pathname.startsWith("/learn/");

      case "faq":
        return pathname === "/faq";

      default:
        return false;
    }
  };

  const getLinkClass = (section) => {
    return `border-b border-gray-100 py-3 text-sm transition-colors hover:text-[#bd2d79] md:border-0 md:py-0 md:text-xs ${
      isActive(section)
        ? "font-semibold text-[#bd2d79]"
        : "text-[#464454]"
    }`;
  };

  return (
    <header className="relative z-50 border-b border-[#f1edf6] bg-white">
      <nav className="mx-auto flex min-h-[76px] w-[calc(100%-32px)] max-w-[1200px] items-center justify-between gap-4 sm:w-[calc(100%-48px)] sm:gap-6">

        {/* Brand */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2 text-[#092c60]"
          aria-label="Prega Gene home"
        >
          <img
            src={pregaLogo}
            alt="Prega Gene logo"
            className="h-8 w-8 object-contain"
          />

          <span className="text-base font-bold tracking-tight">
            Prega Gene
          </span>
        </Link>

        {/* Navigation Links */}
        <div
          id="primary-navigation"
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col border-b border-[#eee7f2] bg-white px-6 py-4 shadow-md md:static md:flex md:flex-1 md:flex-row md:items-center md:justify-center md:gap-5 md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={closeMenu}
              aria-current={
                isActive(link.section) ? "page" : undefined
              }
              className={getLinkClass(link.section)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">

          {/* Contact */}
          <Link
            to="/contact"
            onClick={closeMenu}
            aria-current={
              location.pathname === "/contact" ? "page" : undefined
            }
            className={`hidden text-xs transition hover:text-[#bd2d79] lg:block ${
              location.pathname === "/contact"
                ? "font-semibold text-[#bd2d79]"
                : "text-[#464454]"
            }`}
          >
            Contact
          </Link>

          {/* Where to Buy */}
          <Link
            to="/where-to-buy"
            onClick={closeMenu}
            aria-current={
              location.pathname === "/where-to-buy"
                ? "page"
                : undefined
            }
            className="inline-flex min-h-[40px] items-center justify-center whitespace-nowrap rounded-full bg-[#bd2d79] px-4 text-[11px] font-semibold text-white shadow-sm transition hover:bg-[#a92168] sm:px-5 sm:text-xs"
          >
            Where to Buy
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-controls="primary-navigation"
            aria-expanded={menuOpen}
            className="rounded-lg border border-gray-200 p-2 text-[#092c60] transition hover:bg-[#f8f6fc] md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </nav>
    </header>
  );
}
