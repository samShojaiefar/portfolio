"use client";
import { useMenu } from "@/lib/useMenu";
import "./portfolio.scss";
import Nav from "../components/Nav";
import MobileMenu from "../components/MobileMenu";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Portfolio() {
  const { menuOpen, setMenuOpen, closeMenu } = useMenu();

  return (
    <div className="portfolio">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} closeMenu={closeMenu} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}