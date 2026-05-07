import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import MyProjects from "./components/MyProjects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";

function Divider() {
  return <div style={{ height: "1px", background: "rgba(201,168,76,0.15)" }} />;
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Divider />
        <AboutMe />
        <Divider />
        <Skills />
        <Divider />
        <MyProjects />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
