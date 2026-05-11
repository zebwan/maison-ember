import { NavLink } from "react-router-dom";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <h2>Maison Ember</h2>
          <p>
            A quiet café and micro-roastery shaped around slow rituals,
            handcrafted drinks, and warm mornings.
          </p>
        </div>

        <div className="footer-links">
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/roastery">Roastery</NavLink>
          <NavLink to="/journal">Journal</NavLink>
          <NavLink to="/visit">Visit Us</NavLink>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Maison Ember</span>
        <span>Crafted for slow coffee moments.</span>
      </div>
    </footer>
  );
}

export default Footer;