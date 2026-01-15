import type { Route } from "./+types/home";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact, Footer } from "../components/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Zulfikharali Muzakir | Software Developer" },
    { name: "description", content: "Portfolio of Zulfikharali Muzakir - A passionate Software Developer crafting digital experiences." },
  ];
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
