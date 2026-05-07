import React, { useEffect, useRef, useState } from "react";
import profileImage from "../assets/imageprof.jpeg";

const TITLES = ["Frontend Developer", "React Specialist", "UI Engineer"];

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeout = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const full = TITLES[titleIdx];
    if (!deleting && displayed.length < full.length) {
      timeout.current = setTimeout(
        () => setDisplayed(full.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === full.length) {
      timeout.current = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout.current = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        45,
      );
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIdx((i) => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout.current);
  }, [displayed, deleting, titleIdx]);

  return (
    <section
      id="home"
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8 md:px-16 pt-24 pb-16 overflow-hidden"
    >
      {/* Background watermark */}
      <span
        className="absolute bottom-0 right-0 font-display leading-none pointer-events-none select-none"
        style={{
          fontSize: "clamp(8rem, 20vw, 22rem)",
          color: "rgba(201,168,76,0.04)",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        DF
      </span>

      {/* Left — content */}
      <div className="relative z-10 flex flex-col order-last md:order-first">
        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 mb-6 text-gold uppercase tracking-widest text-xs font-normal"
          style={{ opacity: 0, animation: "fadeUp 0.7s 0.15s forwards" }}
        >
          <span className="block w-10 h-px bg-gold flex-shrink-0" />
          Available for Work
        </div>

        {/* Name */}
        <h1
          className="font-display text-parchment leading-none mb-2"
          style={{
            fontSize: "clamp(4rem, 9vw, 8.5rem)",
            letterSpacing: "0.02em",
            opacity: 0,
            animation: "fadeUp 0.7s 0.3s forwards",
          }}
        >
          Damilare
          <br />
          Festus
        </h1>

        {/* Typewriter title */}
        <p
          className="font-serif italic text-gold mb-8"
          style={{
            fontSize: "clamp(1.3rem, 3vw, 2.2rem)",
            opacity: 0,
            animation: "fadeUp 0.7s 0.45s forwards",
            minHeight: "2.5rem",
          }}
        >
          {displayed}
          <span className="cursor text-gold">|</span>
        </p>

        {/* Description */}
        <p
          className="text-ash leading-relaxed mb-10 max-w-md text-sm md:text-base"
          style={{ opacity: 0, animation: "fadeUp 0.7s 0.6s forwards" }}
        >
          I build modern, clean, scalable, and user-friendly responsive web
          applications with a strong focus on performance and usability.
          Specialising in React.js and Tailwind CSS — currently expanding into
          full-stack development.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-wrap gap-4 mb-12"
          style={{ opacity: 0, animation: "fadeUp 0.7s 0.75s forwards" }}
        >
          <a
            href="#projects"
            className="bg-gold text-ink text-xs font-medium tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="text-parchment text-xs tracking-widest uppercase px-8 py-4 rounded-sm hover:border-gold hover:text-gold transition-all duration-200 hover:-translate-y-0.5"
            style={{ border: "1px solid rgba(201,168,76,0.25)" }}
          >
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex gap-10 pt-8"
          style={{
            borderTop: "1px solid rgba(201,168,76,0.15)",
            opacity: 0,
            animation: "fadeUp 0.7s 0.9s forwards",
          }}
        >
          {[
            { num: "5+", label: "Projects Built" },
            { num: "2+", label: "Years Experience" },
            { num: "2:1", label: "B.Eng Degree" },
          ].map(({ num, label }) => (
            <div key={label} className="flex flex-col gap-1">
              <span className="font-display text-gold text-4xl leading-none">
                {num}
              </span>
              <span className="text-ash text-xs tracking-widest uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right — profile image placeholder */}
      <div
        className="flex justify-center md:justify-end items-center relative z-10 order-first md:order-last"
        style={{ opacity: 0, animation: "fadeIn 1s 0.4s forwards" }}
      >
        <div className="relative w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[480px]">
          {/* Decorative frame */}
          <div
            className="absolute inset-0 -m-3 rounded-sm"
            style={{ border: "1px solid rgba(201,168,76,0.18)" }}
          />
          {/* Accent block */}
          <div
            className="absolute bottom-0 right-0 -mb-6 -mr-6 w-1/2 h-1/2 -z-10"
            style={{ background: "rgba(201,168,76,0.1)" }}
          />
          {/* Image or placeholder */}
          <div className="w-full h-full rounded-sm overflow-hidden relative z-10">
            <img
              src={profileImage}
              alt="Damilare Festus"
              className="w-full h-full object-cover object-top rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
