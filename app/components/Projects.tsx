"use client";
import {ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import "@/app/portofilo/portfolio.scss";
import { fadeUp, staggerContainer } from "@/lib/animationEffects";

const projects = [
  {
    id: "01",
    title: "Elahe Fadaee",
    type: "doctor personal site",
    url: "https://elahefadaee.ir",
    tech: "WordPress · Elementor",
  },
  {
    id: "02",
    title: "Orca Canoe",
    type: "kayaking shop",
    url: "https://orcacanoe.ir",
    tech: "WordPress · Elementor",
  },
  {
    id: "03",
    title: "Armin Cell",
    type: "mobile website",
    url: "https://armincell.ir",
    tech: "WordPress · Elementor",
  },
];
export default function Projects() {
    return (
<motion.section
  className="projects"
  id="projects"
  initial="hidden"
  whileInView="visible"
  viewport={{
    once: true,
    amount: 0.1,
  }}
  variants={staggerContainer}
>
  <motion.h2 variants={fadeUp}>
    <em>Selected Work</em>
  </motion.h2>

  <div className="project-grid">
    {projects.map((project, i) => (
      <motion.div
        key={project.id}
        className="project-card"
        custom={i}
        variants={fadeUp}
        whileHover={{
          y: -6,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="project-frame-link"
          aria-label={`Open ${project.title} in a new tab`}
        >
          <div className="project-frame">
            <iframe
              src={project.url}
              title={project.title}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin"
            />

            <div className="project-frame-overlay">
              <ArrowUpRight />
            </div>
          </div>
        </a>

        <div className="project-meta">
          <span className="project-id">{project.id}</span>

          <div>
            <h3 className="project-title">{project.title}</h3>

            <p className="project-type">{project.type}</p>
          </div>

          <span className="project-tech">{project.tech}</span>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>)}
