import Image from "next/image";
import styles from "./page.module.css";

import Hero from "@/src/components/hero/hero";
import About from "../components/about/about";
import Projects from "../components/projects/projects";
import Social from "../components/social/social";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Social />
    </main>
  );
}
