import React, { useState, useEffect } from "react";
import logo from "../assets/festlogo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 py-5 transition-all duration-300 border-b gold-border ${
          scrolled ? "bg-ink/90 backdrop-blur-xl" : "bg-transparent"
        }`}
        style={{ borderColor: "rgba(201,168,76,0.18)" }}
      >
        {/* Logo */}
        <a href="#home">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-ash hover:text-gold transition-colors duration-200 text-xs tracking-widest uppercase font-normal"
            >
              {label}
            </a>
          ))}
          <a
            href="/Festus_Damilare_M_Resume.pdf"
            download
            className="text-gold border border-gold text-xs tracking-widest uppercase px-5 py-2 hover:bg-gold hover:text-ink transition-all duration-200 rounded-sm"
          >
            Resume
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer bg-transparent border-none p-0"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? (
            <span className="text-parchment text-xl leading-none">✕</span>
          ) : (
            <>
              <span className="block w-6 h-px bg-parchment transition-all" />
              <span className="block w-6 h-px bg-parchment transition-all" />
              <span className="block w-4 h-px bg-parchment transition-all" />
            </>
          )}
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 right-0 h-auto z-[200] flex flex-col px-10 pt-8 pb-8 gap-6 transition-all duration-300 w-72 ${
          open
            ? "translate-x-0 opacity-100 pointer-events-auto"
            : "translate-x-full opacity-0 pointer-events-none"
        }`}
        style={{
          background: "#0b0f17",
          borderLeft: "1px solid rgba(201,168,76,0.18)",
          borderBottom: "1px solid rgba(201,168,76,0.18)",
        }}
      >
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            className="font-display text-sm tracking-widest uppercase text-parchment hover:text-gold transition-colors duration-200"
          >
            {label}
          </a>
        ))}
        <a
          href="/Festus_Damilare_M_Resume.pdf"
          download
          onClick={() => setOpen(false)}
          className="font-display text-center border border-gold text-xs tracking-widest px-5 py-3 text-gold hover:bg-gold hover:text-ink transition-all duration-200 rounded-sm"
        >
          Resume
        </a>
      </div>
    </>
  );
}
