import { Link } from "react-router-dom";
import { motion } from "motion/react";

import Reveal from "../../components/Reveal/Reveal";

import "./Visit.css";

const openingHours = [
  {
    day: "Monday — Friday",
    time: "8:00 AM — 10:00 PM",
  },
  {
    day: "Saturday",
    time: "8:30 AM — 11:00 PM",
  },
  {
    day: "Sunday",
    time: "9:00 AM — 9:00 PM",
  },
];

const contactDetails = [
  {
    label: "Address",
    value: "18, Jalan Ember, Damansara Heights, Kuala Lumpur",
  },
  {
    label: "Phone",
    value: "+60 12 408 2218",
  },
  {
    label: "Email",
    value: "hello@maisonember.co",
  },
];

function Visit() {
  return (
    <>
      <section className="visit-hero">
        <div className="visit-hero-bg" />
        <div className="visit-hero-overlay" />

        <div className="visit-hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Visit Maison Ember
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.85 }}
          >
            A warm table, a quiet cup.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.8 }}
          >
            Step into Maison Ember for slow mornings, soft conversations,
            handcrafted coffee, and pastries made to be enjoyed without rush.
          </motion.p>
        </div>
      </section>

      <section className="visit-ambience">
        <div className="section-shell visit-ambience-grid">
          <Reveal className="visit-ambience-content">
            <p className="section-label">The space</p>
            <h2>Designed for soft light, quiet corners, and slower rituals.</h2>
            <p>
              Maison Ember is shaped to feel calm from the moment you arrive.
              Warm textures, intimate seating, gentle lighting, and the smell of
              fresh coffee create a space that feels polished without feeling
              distant.
            </p>

            <p>
              Come alone with a book, meet someone for a slow afternoon, or stop
              by for beans to bring home.
            </p>
          </Reveal>

          <Reveal className="visit-ambience-image" delay={0.15}>
            <img src="/img/interior-corner.png" alt="Maison Ember interior corner" />
          </Reveal>
        </div>
      </section>

      <section className="visit-info">
        <div className="section-shell visit-info-grid">
          <Reveal className="hours-card">
            <p className="section-label">Opening hours</p>
            <h2>Open daily for coffee, pastries, and roasted beans.</h2>

            <div className="hours-list">
              {openingHours.map((item) => (
                <div className="hours-row" key={item.day}>
                  <span>{item.day}</span>
                  <strong>{item.time}</strong>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="contact-card" delay={0.15}>
            <p className="section-label">Find us</p>
            <h2>Drop by the counter.</h2>

            <div className="contact-list">
              {contactDetails.map((item) => (
                <div className="contact-row" key={item.label}>
                  <span>{item.label}</span>
                  <p>{item.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="map-section">
        <div className="section-shell">
          <Reveal className="map-card">
            <div className="map-card-content">
              <p className="section-label">Map placeholder</p>
              <h2>Maison Ember, Damansara Heights</h2>
              <p>
                Replace this area later with an embedded Google Map once the
                real café address is confirmed.
              </p>
            </div>

            <div className="map-marker">
              <span>Maison Ember</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="visit-cta">
        <div className="section-shell visit-cta-inner">
          <Reveal>
            <p className="section-label">Reserve a quiet table</p>
            <h2>Plan your next slow coffee moment.</h2>
          </Reveal>

          <Reveal delay={0.15}>
            <Link to="/menu" className="btn btn-primary">
              Explore the Menu
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Visit;