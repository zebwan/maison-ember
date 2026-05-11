import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import "./IntroScreen.css";

function IntroScreen() {
  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem("maison-ember-intro-seen") !== "true";
  });

  useEffect(() => {
    if (!showIntro) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem("maison-ember-intro-seen", "true");
      setShowIntro(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, [showIntro]);

  return (
    <AnimatePresence>
      {showIntro && (
        <motion.div
          className="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            className="intro-panel intro-panel-left"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              delay: 1.45,
              duration: 1.15,
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          <motion.div
            className="intro-panel intro-panel-right"
            initial={{ x: "0%" }}
            animate={{ x: "100%" }}
            transition={{
              delay: 1.45,
              duration: 1.15,
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          <motion.div
            className="intro-brand"
            initial={{ opacity: 0, y: 12, letterSpacing: "0.16em" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.28em" }}
            exit={{ opacity: 0, y: -10 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Maison Ember
          </motion.div>

          <div className="intro-grain" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IntroScreen;