"use client";
import { motion } from "framer-motion";
import "@/app/portofilo/portfolio.scss";
import { fadeUp, staggerContainer } from "@/lib/animationEffects";
import {
  SiWordpress,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiSass,
  SiTailwindcss,
  SiGit,
  SiAntdesign,
  SiShadcnui,
} from "react-icons/si";
import { Cable } from "lucide-react";

const skills = [
  { name: "Wordpress", icon: SiWordpress },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "SCSS", icon: SiSass },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "REST API", icon: Cable },
  { name: "Git", icon: SiGit },
  { name: "Ant Design", icon: SiAntdesign },
  { name: "Shadcn", icon: SiShadcnui },
];

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
          <motion.span key={skill.name} className="skill-pill" custom={i} variants={fadeUp}>
            <Icon size={18} className="skill-pill-icon" />
            {skill.name}
          </motion.span>
        );
      })}
    </motion.section>
  );
}