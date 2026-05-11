import { Link } from "react-router-dom";
import { motion } from "motion/react";

import Reveal from "../../components/Reveal/Reveal";

import "./Journal.css";

const articles = [
  {
    category: "Coffee Rituals",
    title: "The quiet rhythm of a slower morning cup.",
    excerpt:
      "A short note on brewing slowly, choosing the right cup, and letting coffee become part of the morning instead of a task.",
    image: img("coffee-table-flatlay.png"),
    date: "12 Feb 2026",
  },
  {
    category: "Pastry Notes",
    title: "Why a good croissant should feel almost weightless.",
    excerpt:
      "Layers, butter, temperature, and the small details that make a pastry feel simple but memorable.",
    image: img("croissant-closeup.png"),
    date: "20 Feb 2026",
  },
  {
    category: "Roastery",
    title: "How we approach a softer roast profile.",
    excerpt:
      "Behind the way we roast for warmth, clarity, and a gentler kind of depth.",
    image: img("roasting-process.png"),
    date: "03 Mar 2026",
  },
  {
    category: "Seasonal Selection",
    title: "Berry mornings and bright pastry counters.",
    excerpt:
      "A look at the seasonal pastry notes currently shaping our counter selection.",
    image: img("berry-danish.png"),
    date: "18 Mar 2026",
  },
  {
    category: "Brewing Notes",
    title: "Dialling in espresso without overthinking it.",
    excerpt:
      "A simple way to understand balance, texture, and what makes espresso feel complete.",
    image: img("barista-pour.png"),
    date: "29 Mar 2026",
  },
  {
    category: "Beans",
    title: "Choosing beans for home brewing rituals.",
    excerpt:
      "How to choose between a house blend, a lighter roast, and a deeper espresso profile.",
    image: img("bean-bag-product.png"),
    date: "04 Apr 2026",
  },
];

const topics = [
  "Coffee rituals",
  "Brewing notes",
  "Pastry mornings",
  "Roast profiles",
  "Seasonal drinks",
  "Quiet cafés",
  "Home brewing",
];

function Journal() {
  return (
    <>
      <section className="journal-hero">
        <div className="journal-hero-bg" />
        <div className="journal-hero-overlay" />

        <div className="journal-hero-content">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Maison Notes
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.85 }}
          >
            Stories from the counter.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.8 }}
          >
            Brewing notes, pastry mornings, seasonal selections, and small
            rituals from Maison Ember.
          </motion.p>
        </div>
      </section>

      <section className="journal-featured">
        <div className="section-shell journal-featured-grid">
          <Reveal className="journal-featured-image">
            <img src="/maison-ember/img/journal-cover.png" alt="Maison Ember journal cover" />
          </Reveal>

          <Reveal className="journal-featured-content" delay={0.15}>
            <p className="section-label">Featured note</p>
            <h2>The small details that make a café feel warm.</h2>
            <p>
              A café is more than its menu. It is the pacing of the morning, the
              softness of the lighting, the sound behind the counter, and the
              quiet feeling that makes someone want to stay a little longer.
            </p>

            <div className="journal-meta-row">
              <span>Editorial</span>
              <span>6 min read</span>
              <span>Maison Ember</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="journal-topics">
        <div className="journal-topics-track">
          {[...topics, ...topics].map((topic, index) => (
            <span key={`${topic}-${index}`}>{topic}</span>
          ))}
        </div>
      </section>

      <section className="journal-list">
        <div className="section-shell">
          <Reveal className="journal-section-heading">
            <p className="section-label">Latest notes</p>
            <h2>Read slowly.</h2>
          </Reveal>

          <div className="article-grid">
            {articles.map((article, index) => (
              <Reveal key={article.title} delay={index * 0.08}>
                <article className="article-card">
                  <div className="article-card-image">
                    <img src={article.image} alt={article.title} />
                  </div>

                  <div className="article-card-content">
                    <div className="article-card-meta">
                      <span>{article.category}</span>
                      <span>{article.date}</span>
                    </div>

                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>

                    <button type="button" className="article-link">
                      Read note
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="journal-cta">
        <div className="section-shell journal-cta-inner">
          <Reveal>
            <p className="section-label">From the counter</p>
            <h2>Come experience the notes in person.</h2>
          </Reveal>

          <Reveal delay={0.15}>
            <Link to="/visit" className="btn btn-primary">
              Visit Maison Ember
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default Journal;