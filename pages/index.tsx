import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] snap-y snap-mandatory text-white h-screen overflow-y-scroll  overflow-x-hidden z-0  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-tan">
      {/* snap-y snap-mandatory */}
      <Head>
        <title>Angus </title>
      </Head>

      {/* Menu/Header */}
      <section id="hero" className="snap-center">
        <Header />
      </section>

      {/* Hero */}
      <Hero />
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="projects" className="snap-start">
        <Project />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
