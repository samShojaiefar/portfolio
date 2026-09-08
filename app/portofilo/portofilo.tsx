"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  ArrowUpRight,
  Download,
  MapPin,
  Menu,
  X,
  GitBranch,
  ArrowDown01,
  ArrowDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiWordpress,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiSass,
  SiTailwindcss,
  SiFramer,
  SiGit,
} from "react-icons/si";
import { Cable } from "lucide-react";
import "./portfolio.scss";
import { GrGithub } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";

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

const skills = [
  { name: "Wordpress", icon: SiWordpress },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "JavaScript", icon: SiJavascript },
  { name: "SCSS", icon: SiSass },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "REST API", icon: Cable },
  { name: "Git", icon: SiGit },
];

// Reusable animation variants
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: (i = 0) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio">
      {/* =========================================
          NAV
      ========================================= */}

      <motion.header
        className="nav"
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* LOGO */}

        {/* DESKTOP NAVIGATION */}

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
              whileHover={{
                y: -2,
                opacity: 0.6,
              }}
              whileTap={{
                scale: 0.95,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>

        {/* OPEN TO WORK */}
        {/* 
        <motion.div
          className="openToWork"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 0.5,
          }}
        >
          <span className="greenDot"></span>
          <span>Open To Work</span>
        </motion.div> */}

        {/* MOBILE MENU BUTTON */}

        <motion.button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          whileTap={{
            scale: 0.9,
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{
                  opacity: 0,
                  rotate: -90,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  rotate: 90,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <X size={21} />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{
                  opacity: 0,
                  rotate: 90,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  rotate: -90,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Menu size={21} />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.header>

      {/* =========================================
          MOBILE MENU
      ========================================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -15,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {["Projects", "About", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: i * 0.05,
                  duration: 0.25,
                }}
                onClick={closeMenu}
              >
                <span>{item}</span>
                <ArrowUpRight size={16} />
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================
          HERO
      ========================================= */}

      <section className="hero">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.b
            variants={fadeUp}
            custom={0}
            style={{
              display: "block",
            }}
          >
            I'm{" "}
            <em className="name">
              <motion.b
                style={{
                  display: "inline-flex",
                }}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              // whileHover="hover"
              >
                {"SAM".split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    style={{
                      display: "inline-block",
                    }}
                    custom={i}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 40,
                        rotate: -8,
                      },

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

                        transition: {
                          delay: i * 0.05,
                          duration: 0.3,
                          ease: "easeOut",
                        },
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

        {/* HERO DESCRIPTION */}

        <motion.p
          className="small"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          I develop accessible, responsive, interactive, and animated websites
          with a strong focus on performance.
        </motion.p>

        {/* HERO BUTTONS */}

        <motion.div
          className="flex gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="mailto:hello@samshojaiefar.dev"
            className="hero-btn"
            variants={fadeUp}
            custom={3}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Mail />
            Email Me
          </motion.a>
          <motion.a
            href="https://github.com/samShojaiefar"
            className="hero-btn"
            variants={fadeUp}
            custom={3}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <BsGithub />
            Github
          </motion.a>
          <motion.a
            href="https://t.me/s"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
            variants={fadeUp}
            custom={4}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Send />
            Dm Telegram
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download
            className="hero-btn hero-btn--ghost"
            variants={fadeUp}
            custom={5}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <Download />
            Resume
          </motion.a>
        </motion.div>
        <motion.div
          className="flex gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            className="scroolDown"
            variants={fadeUp}
            custom={2}
          >
            <em className="scroolDowntext">scrool down </em><ArrowDown/>
          </motion.a>
        </motion.div>
      </section>

      {/* =========================================
          ABOUT
      ========================================= */}

      <motion.section
        className="about"
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
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
      
      {/* =========================================
          SKILLS
      ========================================= */}

<motion.section
        className="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
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
      {/* =========================================
          PROJECTS
      ========================================= */}

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
      </motion.section>


      {/* =========================================
          CONTACT
      ========================================= */}

      <motion.section
        className="contact"
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.3,
        }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeUp}>
          {" "}
          <em>Let's work together</em>
        </motion.h2>

        <motion.p variants={fadeUp} custom={1}>
          Have a project in mind, or just want to talk shop? I'm all hear.{" "}
        </motion.p>

        <motion.a
          href="mailto:hello@samshojaiefar.dev"
          className="hero-btn"
          variants={fadeUp}
          custom={2}
          whileHover={{
            scale: 1.05,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
        >
          <Mail />
          Say hello
        </motion.a>
      </motion.section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <motion.footer
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
      >
        © {new Date().getFullYear()} Sam Shojaiefar
      </motion.footer>
    </div>
  );
}