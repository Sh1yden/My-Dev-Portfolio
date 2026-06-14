import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

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
  )
}
