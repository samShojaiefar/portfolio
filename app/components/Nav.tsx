"use client";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "@/app/portofilo/portfolio.scss";
import { fadeUp, staggerContainer } from "@/lib/animationEffects";

interface NavProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Nav({ menuOpen, setMenuOpen }: NavProps) {
  return (
    <motion.header
      className="nav"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="navList"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {["Projects", "About", "Contact"].map((item) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            variants={fadeUp}
            whileHover={{ y: -2, opacity: 0.6 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>

      <motion.button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {menuOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <X size={21} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ opacity: 0, rotate: 90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={21} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.header>
  );
}