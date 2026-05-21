import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundEffects from "./components/BackgroundEffects";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import Loader from "./components/Loader";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">
    <Loader />
    <BackgroundEffects />
    <CursorGlow />
    <ScrollProgress />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <GithubStats />

      <Contact />

      <Footer />

    </main>
  );
}
