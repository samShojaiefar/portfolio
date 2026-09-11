"use client";
import { Mail, ArrowDown } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";
import "@/app/portofilo/portfolio.scss";
import { fadeUp, staggerContainer } from "@/lib/animationEffects";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <motion.h1 initial="hidden" animate="visible" variants={staggerContainer}>
        <motion.b variants={fadeUp} custom={0} style={{ display: "block" }}>
          I'm{" "}
          <em className="name">
            <motion.b
              style={{ display: "inline-flex" }}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {"SAM".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  style={{ display: "inline-block" }}
                  custom={i}
                  variants={{
                    hidden: { opacity: 0, y: 40, rotate: -8 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      rotate: 0,
                      transition: {
                        delay: 0.3 + i * 0.08,
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                    hover: {
                      y: -10,
                      transition: { delay: i * 0.05, duration: 0.3, ease: "easeOut" },
                    },
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.b>
          </em>
          <br />
          Creative Frontend Developer.
        </motion.b>
      </motion.h1>

      <motion.p
        className="small"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        I develop accessible, responsive, interactive, and animated websites with a
        strong focus on performance.
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
          href="https://www.linkedin.com/in/sam-shojaiefar-8a752229b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
          variants={fadeUp}
          custom={4}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <BsLinkedin />
          Linkedin
        </motion.a>
      </motion.div>

      <motion.div
        className="flex gap-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.a className="scroolDown" href="#about" variants={fadeUp} custom={2}>
          <em className="scroolDowntext">scrool down </em>
          <ArrowDown />
        </motion.a>
      </motion.div>
    </section>
  );
}