"use client";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "@/app/portofilo/portfolio.scss";

interface MobileMenuProps {
  menuOpen: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({ menuOpen, closeMenu }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -15, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -15, scale: 0.98 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {["Projects", "About", "Contact","Hero"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, duration: 0.25 }}
              onClick={closeMenu}
            >
              <span>{item}</span>
              <ArrowUpRight size={16} />
            </motion.a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}