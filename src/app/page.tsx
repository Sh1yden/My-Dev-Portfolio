import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { TechStack } from "@/components/portfolio/tech-stack";
import { Projects } from "@/components/portfolio/projects";
import { Contact } from "@/components/portfolio/contact";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </>
  );
}