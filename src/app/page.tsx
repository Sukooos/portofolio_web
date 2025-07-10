import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ClientOnly from "@/components/client-only";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ClientOnly fallback={<div className="h-20 bg-white dark:bg-gray-900" />}>
        <Header />
      </ClientOnly>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
