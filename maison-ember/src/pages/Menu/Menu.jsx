import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

import Reveal from "../../components/Reveal/Reveal";

import "./Menu.css";

const categories = [
  { id: "coffee", label: "Coffee" },
  { id: "signature", label: "Signature Drinks" },
  { id: "pastries", label: "Pastries" },
  { id: "beans", label: "Roasted Beans" },
];

const menuItems = {
  coffee: [
    {
      name: "House Espresso",
      price: "RM 10",
      description: "Balanced espresso with cocoa depth, soft acidity, and a clean finish.",
      image: "/img/barista-pour.png",
    },
    {
      name: "Velvet Americano",
      price: "RM 11",
      description: "Long black with a rounded body, roasted almond notes, and gentle bitterness.",
      image: "/img/coffee-table-flatlay.png",
    },
    {
      name: "Maison Latte",
      price: "RM 14",
      description: "Silky milk, espresso, and a warm caramel-like finish.",
      image: "/img/signature-latte.png",
    },
  ],

  signature: [
    {
      name: "Ember Latte",
      price: "RM 16",
      description: "Signature espresso, steamed milk, burnt peach notes, and a soft caramel finish.",
      image: "/img/signature-latte.png",
    },
    {
      name: "Apricot Cold Cream",
      price: "RM 18",
      description: "Cold brew layered with apricot cream, vanilla, and a smooth espresso base.",
      image: "/img/matcha-drink.png",
    },
    {
      name: "Cocoa Dusk",
      price: "RM 17",
      description: "Dark cocoa, double espresso, and a delicate cream top for a deeper afternoon cup.",
      image: "/img/hero-drink.png",
    },
  ],

  pastries: [
    {
      name: "Butter Croissant",
      price: "RM 12",
      description: "Flaky, warm, and layered with a clean butter finish.",
      image: "/img/croissant-closeup.png",
    },
    {
      name: "Berry Danish",
      price: "RM 15",
      description: "Light pastry filled with seasonal berries and soft vanilla cream.",
      image: "/img/berry-danish.png",
    },
    {
      name: "Morning Tart",
      price: "RM 16",
      description: "A delicate tart with toasted edges, fruit notes, and soft cream.",
      image: "/img/hero-pastry.png",
    },
  ],

  beans: [
    {
      name: "Velvet Origin",
      price: "RM 48",
      description: "Brown sugar, soft citrus, and toasted almond. Suitable for filter and espresso.",
      image: "/img/bean-bag-product.png",
    },
    {
      name: "Ember House Blend",
      price: "RM 45",
      description: "Chocolate, roasted nuts, and a warm rounded body for everyday brewing.",
      image: "/img/beans-closeup.png",
    },
    {
      name: "Slow Morning Roast",
      price: "RM 52",
      description: "A lighter roast with floral warmth, stone fruit, and a clean finish.",
      image: "/img/roasting-process.png",
    },
  ],
};

function Menu() {
  const [activeCategory, setActiveCategory] = useState("coffee");

  return (
    <>
      <section className="menu-hero">
        <div className="menu-hero-bg" />
        <div className="menu-hero-overlay" />

        <div className="menu-hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Maison Ember Menu
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.85 }}
          >
            Drinks, pastries, and beans for slower rituals.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.8 }}
          >
            A curated selection of handcrafted coffee, signature drinks, fresh
            pastries, and roasted beans prepared with warmth and restraint.
          </motion.p>
        </div>
      </section>

      <section className="menu-board">
        <div className="section-shell">
          <Reveal className="menu-board-heading">
            <p className="section-label">Our selection</p>
            <h2>Choose your ritual.</h2>
          </Reveal>

          <div className="menu-tabs" role="tablist" aria-label="Menu categories">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={`menu-tab ${
                  activeCategory === category.id ? "is-active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="menu-grid"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {menuItems[activeCategory].map((item) => (
                <article className="menu-card" key={item.name}>
                  <div className="menu-card-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="menu-card-content">
                    <div className="menu-card-top">
                      <h3>{item.name}</h3>
                      <span>{item.price}</span>
                    </div>

                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="menu-feature">
        <div className="section-shell menu-feature-grid">
          <Reveal className="menu-feature-content">
            <p className="section-label">Seasonal pour</p>
            <h2>Ask for what is resting on the bar.</h2>
            <p>
              Our bar selection changes depending on the roast cycle, pastry
              counter, and seasonal ingredients. Some drinks are made quietly,
              only when the day feels right.
            </p>
          </Reveal>

          <Reveal className="menu-feature-image" delay={0.15}>
            <img src="/img/menu-banner.png" alt="Maison Ember seasonal menu" />
          </Reveal>
        </div>
      </section>

      <section className="menu-cta">
        <div className="section-shell menu-cta-inner">
          <Reveal>
            <p className="section-label">Visit the counter</p>
            <h2>Fresh pastries, slow coffee, and beans to bring home.</h2>
          </Reveal>

          <Reveal delay={0.15}>
            <Link to="/visit" className="btn btn-primary">
              Plan Your Visit
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Menu;