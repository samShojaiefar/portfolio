"use client";
import { Mail, Send } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";
import "@/app/portofilo/portfolio.scss";
import { fadeUp, staggerContainer } from "@/lib/animationEffects";

export default function Contact() {
  return (
    <motion.section
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.h2 variants={fadeUp}>
        <em>Let's work together</em>
      </motion.h2>

      <motion.p variants={fadeUp} custom={1}>
        Have a project in mind, or just want to talk shop? I'm all ears.
      </motion.p>

      <motion.div
        className="flex gap-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="mailto:sam.shojaiefar@gmail.com"
          className="hero-btn"
          variants={fadeUp}
          custom={3}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Mail />
          Email Me
        </motion.a>
        <motion.a
          href="https://github.com/samShojaiefar"
          className="hero-btn"
          variants={fadeUp}
          custom={3}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <SiGithub />
          Github
        </motion.a>
        <motion.a
          href="https://t.me/s"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
          variants={fadeUp}
          custom={4}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Send />
          Dm Telegram
        </motion.a>
      </motion.div>
    </motion.section>
  );
}