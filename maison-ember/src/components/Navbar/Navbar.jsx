import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import "./Navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "Roastery", path: "/roastery" },
  { label: "Journal", path: "/journal" },
  { label: "Visit Us", path: "/visit" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleNavbar = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleNavbar();
    window.addEventListener("scroll", handleNavbar);

    return () => window.removeEventListener("scroll", handleNavbar);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-is-open");
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
        <NavLink to="/" className="navbar-logo">
          Maison Ember
        </NavLink>

        <nav className="navbar-links" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/visit" className="navbar-cta">
          Reserve
        </NavLink>

        <button
          className={`navbar-menu-btn ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mobile-menu-links" aria-label="Mobile navigation">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.06 * index,
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <NavLink to={item.path}>{item.label}</NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="mobile-menu-footer">
              <p>Open daily</p>
              <span>8:00 AM — 10:00 PM</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;