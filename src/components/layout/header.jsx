import { menuItems, subMenuItems } from "../../data/header";
import { ChevronDown, Menu, ShoppingCart, User, X } from "lucide-react";
import { useEffect, useState } from "react";
import SearchBar from "../core/search-bar";
import { Link } from "react-router";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    document.body.style.height = isMobileMenuOpen ? "100vh" : "auto";
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <header>
      <div className="header-top bg-primary">
        <div className="container">
          <div className="flex items-center justify-between text-white py-3 md:p-0">
            {/* mobile menu button */}
            <button
              className="md:hidden p-2 hover:bg-gray-800 rounded-full"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <div className="flex items-center md:gap-6">
              <Link to="/" className="text-2xl font-bold">
                IPSUM
              </Link>
              <nav
                className={` md:static bg-black w-full transition ease-in-out duration-300 z-50	 top-16 left-0 overflow-y-auto h-screen md:h-auto fixed  ${
                  isMobileMenuOpen
                    ? "translate-x-0 md:translate-x-0"
                    : "-translate-x-full md:translate-x-0"
                }`}
              >
                <ul className="md:flex items-center">
                  {menuItems.map((link, index) => (
                    <li
                      key={link.label}
                      className={`py-5 px-3 flex items-center gap-1 cursor-pointer font-semibold text-xs border-r border-white20 ${
                        index === 0 ? "bg-gray" : ""
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={18} />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="flex items-center">
              <div className="hidden md:inline-block mr-16">
                <SearchBar />
              </div>
              <button
                className="hover:bg-gray-800 rounded-full mr-6"
                aria-label="User Profile"
              >
                <User className="h-5 w-5" />
              </button>
              <button
                className="hover:bg-gray-800 rounded-full"
                aria-label="Shopping Cart"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block py-2 px-5 bg-gray">
        <SearchBar />
      </div>
      <div className="sub-menu bg-gray text-white text-xs">
        <div className="container">
          <ul className="hidden md:flex items-center gap-8">
            {subMenuItems.map((link) => (
              <li key={link.label} className="py-4">
                <Link to={link.href} className="hover:text-gray-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
