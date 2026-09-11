"use client";
import { motion } from "framer-motion";
import "@/app/portofilo/portfolio.scss";
import { fadeUp, staggerContainer } from "@/lib/animationEffects";
import { MapPin } from "lucide-react";

export default function About() {
  return (
    <motion.section
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeUp}>
        <em>About</em>
      </motion.h2>

      <motion.p variants={fadeUp} custom={1} className="about-lead">
        I'm a frontend developer who turns product ideas into fast, animated,
        accessible interfaces. I care about the details that most people never
        consciously notice — load times, focus states, the feel of a
        transition — because that's what separates a site people trust from
        one they don't.
      </motion.p>

      <motion.p variants={fadeUp} custom={2} className="about-lead">
        I mainly work with React and Next.js, styling with SCSS and Tailwind,
        and bring motion in with Framer Motion when it serves the content
        rather than decorates it. Currently based in Iran, open to remote
        roles and freelance projects worldwide.
      </motion.p>

      <motion.div variants={fadeUp} custom={3} className="about-location">
        <MapPin size={16} />
        Available for remote work · Bandar-e-Anzali, Iran
      </motion.div>
    </motion.section>
  );
}