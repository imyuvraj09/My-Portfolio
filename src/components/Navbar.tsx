import { useState, useEffect } from "react";
import HoverLinks from "./HoverLinks";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Prevent background body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="header" aria-label="Main navigation">
      <a
        href="#home"
        aria-label="Yuvraj Singh, Home"
        className="navbar-logo"
        onClick={handleLinkClick}
      >
        <span>YS</span>
      </a>

      <div className="header-right">
        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Desktop menu">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>
                  <HoverLinks text={link.label} />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ThemeToggle />

        {/* Accessible Mobile Menu Toggle */}
        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className={`hamburger-bar ${isOpen ? "is-open" : ""}`} />
          <span className={`hamburger-bar ${isOpen ? "is-open" : ""}`} />
          <span className={`hamburger-bar ${isOpen ? "is-open" : ""}`} />
        </button>
      </div>

      {/* Mobile Navigation Backdrop & Drawer */}
      {isOpen && (
        <div
          className="mobile-nav-backdrop"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      <nav
        id="mobile-navigation"
        className={`mobile-nav-drawer ${isOpen ? "is-open" : ""}`}
        aria-label="Mobile menu"
        aria-hidden={!isOpen}
      >
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
