import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";

import Reveal from "../../components/Reveal/Reveal";

import "./Home.css";

const img = (fileName) => `${import.meta.env.BASE_URL}img/${fileName}`;

const featuredDrinks = [
  {
    name: "Ember Latte",
    description:
      "A smooth espresso blend with steamed milk, burnt peach notes, and a soft caramel finish.",
    image: img("signature-latte.png"),
  },
  {
    name: "Apricot Cold Cream",
    description:
      "Cold brew layered with apricot cream, vanilla, and a slow-roasted espresso base.",
    image: img("matcha-drink.png"),
  },
  {
    name: "Cocoa Dusk",
    description:
      "Dark cocoa, double espresso, and a delicate cream top for a deeper afternoon cup.",
    image: img("hero-drink.png"),
  },
];

const testimonials = [
  {
    quote:
      "Quiet, warm, and beautifully considered. The kind of café you stay longer in without realising.",
    name: "Ariana M.",
  },
  {
    quote:
      "Their pastries feel simple at first, then you notice every detail. The coffee is excellent too.",
    name: "Daniel R.",
  },
  {
    quote:
      "Maison Ember has that calm premium feeling without trying too hard. Really tasteful.",
    name: "Lea K.",
  },
];
const ritualCards = [
  {
    label: "01",
    title: "Choose the roast",
    text: "Start with the bean profile that fits the mood of your morning.",
    image: img("bean-bag-product.png"),
  },
  {
    label: "02",
    title: "Let it bloom",
    text: "Give the coffee time to open, soften, and release its warmth.",
    image: img("barista-pour.png"),
  },
  {
    label: "03",
    title: "Sit with it",
    text: "The Maison Ember ritual is less about rushing and more about noticing.",
    image: img("coffee-table-flatlay.png"),
  },
];

function Home() {
  const ritualRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ritualRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const cardOneY = useTransform(scrollYProgress, [0, 1], ["20%", "-14%"]);
  const cardTwoY = useTransform(scrollYProgress, [0, 1], ["34%", "-24%"]);
  const cardThreeY = useTransform(scrollYProgress, [0, 1], ["48%", "-34%"]);

  const ritualCardMotion = [cardOneY, cardTwoY, cardThreeY];

  return (
    <>
      <section className="home-hero">
        <div className="home-hero-bg" />
        <div className="home-hero-gradient" />

        <div className="home-hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Café · Pastries · Micro-roastery
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.9 }}
          >
            Slow coffee,
            <span> softly crafted.</span>
          </motion.h1>

          <motion.p
            className="home-hero-text"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.85 }}
          >
            Maison Ember is a refined café and micro-roastery shaped around
            handcrafted drinks, artisan pastries, and beans roasted with
            patience.
          </motion.p>

          <motion.div
            className="home-hero-actions"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
          >
            <Link to="/menu" className="btn btn-primary">
              Explore Menu
            </Link>
            <Link to="/roastery" className="btn btn-secondary">
              Our Roastery
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="home-hero-card"
          initial={{ opacity: 0, y: 42, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>Today’s roast</span>
          <strong>Velvet Origin</strong>
          <p>Brown sugar, soft citrus, toasted almond.</p>
        </motion.div>
      </section>

      <section className="home-intro">
        <div className="section-shell home-intro-grid">
          <Reveal>
            <p className="section-label">Maison Ember</p>
            <h2>
              A café built around warm rituals, quiet details, and beautifully
              roasted beans.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p>
              We serve coffee with restraint, pastries with care, and roasted
              beans selected for clarity and warmth. Every part of Maison Ember
              is designed to feel calm, intimate, and softly refined.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="featured-drinks">
        <div className="section-shell">
          <Reveal className="section-heading">
            <p className="section-label">Signature drinks</p>
            <h2>Crafted for slow mornings and softer afternoons.</h2>
          </Reveal>

          <div className="drink-grid">
            {featuredDrinks.map((drink, index) => (
              <Reveal key={drink.name} delay={index * 0.12}>
                <article className="drink-card">
                  <div className="drink-card-image">
                    <img src={drink.image} alt={drink.name} />
                  </div>

                  <div className="drink-card-content">
                    <span>0{index + 1}</span>
                    <h3>{drink.name}</h3>
                    <p>{drink.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pastry-section">
        <div className="section-shell pastry-grid">
          <Reveal className="pastry-image-wrap">
<img src="/maison-ember/img/pastry-display.png" alt="Maison Ember artisan pastry" />          </Reveal>

          <Reveal className="pastry-content" delay={0.15}>
            <p className="section-label">Fresh from the counter</p>
            <h2>Pastries that feel familiar, finished with precision.</h2>
            <p>
              Our pastry selection changes with the season, but the feeling
              stays the same: warm, layered, and made to sit beautifully beside
              a quiet cup of coffee.
            </p>

            <Link to="/menu" className="text-link">
              View pastry menu
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="roastery-preview">
        <div className="roastery-preview-bg" />

        <div className="section-shell roastery-preview-content">
          <Reveal>
            <p className="section-label">Micro-roastery</p>
            <h2>Small-batch roasting with a softer kind of depth.</h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p>
              Our roasting approach is measured and intentional. We look for
              beans that carry warmth, clarity, and a distinct sense of place,
              then roast them gently to preserve their character.
            </p>

            <Link to="/roastery" className="btn btn-primary">
              Discover the Roastery
            </Link>
          </Reveal>
        </div>
      </section>
            <section className="ritual-scroll" ref={ritualRef}>
        <div className="section-shell ritual-scroll-grid">
          <div className="ritual-sticky">
            <Reveal className="ritual-copy">
              <p className="section-label">The Ember ritual</p>
              <h2>A slow sequence, shaped by warmth.</h2>
              <p>
                This section is our standout scroll interaction. As you move
                through the page, the ritual cards drift gently while the image
                holds the scene together.
              </p>
            </Reveal>

            <motion.div className="ritual-image" style={{ y: imageY }}>
              <img src="/maison-ember/img/hero-cafe.png" alt="Maison Ember café ritual" />
            </motion.div>
          </div>

          <div className="ritual-card-stack">
            {ritualCards.map((card, index) => (
              <motion.article
                className="ritual-card"
                key={card.title}
                style={{ y: ritualCardMotion[index] }}
              >
                <div className="ritual-card-image">
                  <img src={card.image} alt={card.title} />
                </div>

                <div className="ritual-card-content">
                  <span>{card.label}</span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="section-shell">
          <Reveal className="section-heading">
            <p className="section-label">Guest notes</p>
            <h2>Small moments, quietly remembered.</h2>
          </Reveal>

          <div className="testimonial-grid">
            {testimonials.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.12}>
                <article className="testimonial-card">
                  <p>“{item.quote}”</p>
                  <span>{item.name}</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="section-shell home-cta-inner">
          <Reveal>
            <p className="section-label">Visit Maison Ember</p>
            <h2>Come for the coffee. Stay for the quiet.</h2>
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

export default Home;