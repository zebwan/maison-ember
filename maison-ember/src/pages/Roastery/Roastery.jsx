import { Link } from "react-router-dom";
import { motion } from "motion/react";

import Reveal from "../../components/Reveal/Reveal";

import "./Roastery.css";

const philosophyItems = [
  {
    title: "Roasted with restraint",
    description:
      "We avoid pushing the beans too far. Each roast is developed to keep warmth, clarity, and the character of its origin.",
  },
  {
    title: "Small batches only",
    description:
      "Every batch is handled in smaller volumes, giving us better control over sweetness, body, and finish.",
  },
  {
    title: "Built for daily rituals",
    description:
      "Our beans are selected to feel refined but approachable, whether brewed at the bar or at home.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Selection",
    description:
      "We choose beans with gentle complexity, clean sweetness, and a profile that fits the Maison Ember experience.",
  },
  {
    number: "02",
    title: "Roasting",
    description:
      "Each batch is roasted slowly, with attention to heat, timing, and the way flavour develops across the curve.",
  },
  {
    number: "03",
    title: "Resting",
    description:
      "After roasting, the beans are given time to settle before being served or packed for home brewing.",
  },
  {
    number: "04",
    title: "Brewing",
    description:
      "At the bar, we dial in each roast carefully so every cup feels balanced, warm, and quietly expressive.",
  },
];

const beanCards = [
  {
    name: "Velvet Origin",
    notes: "Brown sugar · Soft citrus · Toasted almond",
    image: "/img/bean-bag-product.png",
  },
  {
    name: "Ember House Blend",
    notes: "Chocolate · Roasted nuts · Rounded body",
    image: "/img/beans-closeup.png",
  },
  {
    name: "Slow Morning Roast",
    notes: "Stone fruit · Floral warmth · Clean finish",
    image: "/img/roasting-process.png",
  },
];

function Roastery() {
  return (
    <>
      <section className="roastery-hero">
        <div className="roastery-hero-bg" />
        <div className="roastery-hero-overlay" />

        <div className="roastery-hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Maison Ember Micro-roastery
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.85 }}
          >
            Roasted slowly, served softly.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.8 }}
          >
            Our roasting approach is quiet and intentional. We work in small
            batches to bring out sweetness, depth, and the natural warmth of
            each bean.
          </motion.p>
        </div>
      </section>

      <section className="roastery-story">
        <div className="section-shell roastery-story-grid">
          <Reveal className="roastery-story-content">
            <p className="section-label">Our story</p>
            <h2>Every cup begins before the counter.</h2>
            <p>
              Maison Ember was built around the belief that coffee should feel
              considered, not complicated. Behind every drink is a slower
              process of sourcing, roasting, resting, and brewing with care.
            </p>
            <p>
              Our micro-roastery allows us to stay close to the beans. We adjust
              each roast with patience, looking for balance rather than excess.
            </p>
          </Reveal>

          <Reveal className="roastery-story-image" delay={0.15}>
            <img src="/img/about-roastery.png" alt="Maison Ember roastery" />
          </Reveal>
        </div>
      </section>

      <section className="roastery-philosophy">
        <div className="section-shell">
          <Reveal className="roastery-section-heading">
            <p className="section-label">Roasting philosophy</p>
            <h2>Warmth, clarity, and a softer kind of depth.</h2>
          </Reveal>

          <div className="philosophy-grid">
            {philosophyItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.12}>
                <article className="philosophy-card">
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="origin-section">
        <div className="section-shell origin-grid">
          <Reveal className="origin-image">
            <img src="/img/coffee-table-flatlay.png" alt="Maison Ember coffee table" />
          </Reveal>

          <Reveal className="origin-content" delay={0.15}>
            <p className="section-label">Sourcing & origins</p>
            <h2>Selected for character, not noise.</h2>
            <p>
              We source beans that carry a clear sense of place without feeling
              overwhelming. Some are bright and delicate, some are deeper and
              rounder, but all are chosen to feel natural within the Maison
              Ember menu.
            </p>

            <div className="origin-note">
              <strong>Current profile</strong>
              <span>Brown sugar · Stone fruit · Toasted almond · Soft cocoa</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="process-section">
        <div className="section-shell">
          <Reveal className="roastery-section-heading">
            <p className="section-label">The process</p>
            <h2>From green bean to quiet cup.</h2>
          </Reveal>

          <div className="process-list">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.08}>
                <article className="process-item">
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-beans">
        <div className="section-shell">
          <Reveal className="roastery-section-heading">
            <p className="section-label">Featured beans</p>
            <h2>Roasts to bring home.</h2>
          </Reveal>

          <div className="bean-grid">
            {beanCards.map((bean, index) => (
              <Reveal key={bean.name} delay={index * 0.12}>
                <article className="bean-card">
                  <div className="bean-card-image">
                    <img src={bean.image} alt={bean.name} />
                  </div>

                  <div className="bean-card-content">
                    <h3>{bean.name}</h3>
                    <p>{bean.notes}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="roastery-cta">
        <div className="section-shell roastery-cta-inner">
          <Reveal>
            <p className="section-label">Take the roast home</p>
            <h2>Find the bean that fits your morning.</h2>
          </Reveal>

          <Reveal delay={0.15}>
            <Link to="/menu" className="btn btn-primary">
              View Roasted Beans
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Roastery;