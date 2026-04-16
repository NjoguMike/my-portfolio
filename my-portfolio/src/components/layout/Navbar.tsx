import { useEffect, useRef, useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navbarRef = useRef(null);
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 920) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
      const target = event.target;

      const clickedInsideNavbar =
        navbarRef.current && navbarRef.current.contains(target);

      const clickedToggle =
        toggleBtnRef.current && toggleBtnRef.current.contains(target);

      if (!clickedInsideNavbar && !clickedToggle) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const handleToggleMenu = (event) => {
    event.stopPropagation();
    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      ref={navbarRef}
      className={`navbar ${scrolled ? "navbar-scrolled" : "navbar-top"}`}
    >
      <div className="container navbar-inner">
        <div className="brand-mark">Michael Njogu</div>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="btn btn-primary desktop-cta">
          Get in Touch
        </a>

        <button
          ref={toggleBtnRef}
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={handleToggleMenu}
        >
          {menuOpen ? <LuX size={18} /> : <LuMenu size={18} />}
        </button>
      </div>

      <div className={`mobile-dropdown ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav">
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            href="#contact"
            className="mobile-nav-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}