"use client";
import { motion } from "framer-motion";
import "@/app/portofilo/portfolio.scss";
import { fadeUp, staggerContainer } from "@/lib/animationEffects";
import { skills } from "@/lib/data/skills";

export default function Skills() {
  return (
    <motion.section
      className="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {skills.map((skill, i) => {
        const Icon = skill.icon;
        return (
          <motion.span
            key={skill.name}
            className="skill-pill"
            custom={i}
            variants={fadeUp}
          >
            <Icon size={18} className="skill-pill-icon" />
            {skill.name}
          </motion.span>
        );
      })}
    </motion.section>
  );
}
