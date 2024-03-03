import Image from "next/image";
import styles from "./page.module.css";

import Hero from "@/src/components/hero/hero";
import About from "../components/about/about";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
