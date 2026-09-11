"use client";
import { motion } from "framer-motion";
import "@/app/portofilo/portfolio.scss";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      © {new Date().getFullYear()} Sam Shojaiefar
    </motion.footer>
  );
}