import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import "../styles/fonts.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scrolling event to update navbar background
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 550;
      setHasScrolled(window.scrollY > scrollThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync active link state with the current path
  useEffect(() => {
    const path = location.pathname.slice(1);
    setActiveLink(path || "home");
  }, [location]);

  // Handle link clicks
  const handleLinkClick = (linkName) => {
    const isHomePage = location.pathname === "/";

    if (linkName === "home") {
      navigate("/");
      window.scrollTo(0, 0);
    } else if (["about", "contact"].includes(linkName)) {
      if (!isHomePage) {
        navigate("/", { state: { scrollTo: linkName } });
      } else {
        scroller.scrollTo(`${linkName}-section`, {
          duration: 500,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      }
    } else {
      navigate(`/${linkName}`);
    }
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
  };

  // Get class for navbar based on scroll, page, or mobile menu state
  const getNavbarClass = () => {
    if (location.pathname === "/products") {
      return "bg-blue-800 text-white";
    }
    if (isMobileMenuOpen) {
      return "bg-white text-black";
    }
    return hasScrolled ? "bg-white text-black" : "bg-transparent text-white";
  };

  // Get class for buttons (Home, About, Contact)
  const getButtonClass = (linkName) => {
    const isProductsPage = location.pathname === "/products";
    return `bg-transparent px-4 py-0.5 rounded-md transition text-base duration-200 flex items-center text-[1.21rem] font-futura 
      ${isProductsPage ? "text-white" : ""}
      hover:text-red-900 active:text-red-900 focus:outline-none`;
  };

  // Get class for the products button
  const getProductsButtonClass = () => {
    const isProductsPage = location.pathname === "/products";
    const isScrolled = hasScrolled && !isProductsPage;
    return `bg-transparent border pt-1 pb-2 px-5  rounded-md transition text-base duration-200 flex items-center text-[1.21rem] font-futura
      ${isProductsPage ? "border-white text-white" : 
        isScrolled || isMobileMenuOpen ? "border-black text-black" : "border-white text-white"}
      hover:bg-white hover:text-black`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full ${getNavbarClass()} backdrop-blur-sm z-50 transition-colors duration-300`}
    >
      <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-6 pt-2 pb-2">
        <div className="flex items-center justify-between h-12">
          <div className="flex items-center w-full">
            {/* Products Button with custom class */}
            <button
              className={getProductsButtonClass()}
              onClick={() => handleLinkClick("products")}
            >
              Products
            </button>
            {/* Navigation Links */}
            <div className="hidden font-futura text-[1.2rem] md:flex md:items-center md:justify-between md:flex-grow md:ml-[15rem] mr-4">
              <button
                className={getButtonClass("home")}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </button>
              <button
                className={getButtonClass("about")}
                onClick={() => handleLinkClick("about")}
              >
                About
              </button>
              <button
                className={getButtonClass("contact")}
                onClick={() => handleLinkClick("contact")}
              >
                Contact
              </button>
            </div>
          </div>
          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              type="button"
              className={`${isMobileMenuOpen ? "text-black" : "text-current"} hover:text-gray-300 focus:outline-none focus:text-gray-300`}
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-5 w-5"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div
            className={`h-[1px] mt-1 ${
              hasScrolled || isMobileMenuOpen ? "bg-black" : "bg-white"
            } transition-colors duration-300`}
          ></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            className={`block w-full text-left px-3 py-1.5 rounded-md font-futura text-[1.2rem] ${getButtonClass(
              "home"
            )}`}
            onClick={() => handleLinkClick("home")}
          >
            Home
          </button>
          <button
            className={`block w-full text-left px-3 py-1.5 rounded-md font-futura text-[1.2rem] ${getButtonClass(
              "about"
            )}`}
            onClick={() => handleLinkClick("about")}
          >
            About
          </button>
          <button
            className={`block w-full text-left px-3 py-1.5 rounded-md font-futura text-[1.2rem] ${getButtonClass(
              "contact"
            )}`}
            onClick={() => handleLinkClick("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;