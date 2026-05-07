import React, { useEffect, useRef } from "react";
import authentication from "../assets/authe.jpg";
import devtrybe from "../assets/trybe.jpg";
import jobtracker from "../assets/jobtrack.jpg";
import quiz from "../assets/quizzz.jpg";
import atharrys from "../assets/atharrys.jpg";
import portfolio from "../assets/damiport.jpg";
import dstore from "../assets/dstore.jpg";

const projects = [
  {
    num: "01",
    name: "Atharrys Home",
    image: atharrys,
    desc: "Built a modern and responsive real estate website designed to simplify property discovery and showcase premium listings. The platform features dynamic property displays, advanced search and filtering, interactive UI components, and a clean user experience optimized for both desktop and mobile devices. Developed with a focus on performance, responsiveness, and modern web design principles to deliver a seamless browsing experience for buyers and investors.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://atharryshome.vercel.app",
    github: "https://github.com/DamiiDev/Atharry-Home.git",
  },
  {
    num: "02",
    name: "DevTrybe",
    image: devtrybe,
    desc: "A full-stack platform connecting developers and showcasing their profiles. Features secure authentication, dynamic profile management, and GitHub/LinkedIn/Twitter integration fostering a collaborative developer community.",
    stack: ["React", "JavaScript", "CSS"],
    live: "https://devtrybe.vercel.app",
    github:
      "https://github.com/DamiiDev/Dynamic-User-Profile-Dashboard-React-.git",
  },
  {
    num: "03",
    name: "JobTracker",
    image: jobtracker,
    desc: "A productivity app for managing and monitoring job searches in one place. Track applications across Applied, Interview, and Offer stages with detailed records and a clean, intuitive interface.",
    stack: ["HTML", "JavaScript", "CSS"],
    live: "https://jobtracker-zeta-beige.vercel.app",
    github: "https://github.com/DamiiDev/Job-Tracker-App.git",
  },
  {
    num: "04",
    name: "Ecommerce Store",
    image: dstore,
    desc: "Designed and developed a modern eCommerce landing page focused on delivering a seamless shopping experience and high conversion rates. The website features a responsive layout, visually engaging product showcases, promotional sections, smooth animations, and clear call-to-action elements optimized for both desktop and mobile devices. Built with performance, usability, and modern UI/UX principles in mind to create an attractive and user-friendly online shopping experience.",
    stack: ["HTML", "JavaScript", "CSS"],
    live: "https://ecommerce-demo-five-alpha.vercel.app",
    github: "https://github.com/DamiiDev/Ecommerce-Demo.git",
  },
  {
    num: "05",
    name: "Quiz App",
    image: quiz,
    desc: "An interactive quiz app built for engagement and performance. Dynamic questions, instant feedback, and real-time score tracking — designed for a smooth, distraction-free experience.",
    stack: ["HTML", "JavaScript", "CSS"],
    live: "https://quiz-game-sable-theta.vercel.app",
    github: "https://github.com/DamiiDev/Quiz-Game.git",
  },
  {
    num: "06",
    name: "Portfolio",
    image: portfolio,
    desc: "A responsive personal portfolio showcasing projects, skills, and experience. Strong focus on UX, intuitive navigation, and cross-device performance. The site you are looking at right now.",
    stack: ["React", "JavaScript", "CSS"],
    live: "https://damilarefestusmichael.vercel.app",
    github: "https://github.com/DamiiDev/DamiDev.git",
  },
  {
    num: "07",
    name: "Authentication",
    image: authentication,
    desc: "A clean, responsive authentication interface covering login and registration flows. Form validation, user-friendly input handling, and modern UI principles — ready to integrate into any application.",
    stack: ["HTML", "JavaScript", "CSS"],
    live: "https://loginpage-nine-eosin.vercel.app",
    github: "https://github.com/DamiiDev/Loginpage.git",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M1 11L11 1M11 1H4M11 1v7" />
    </svg>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          el.classList.add("opacity-100", "!translate-y-0");
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="project-card group opacity-0 translate-y-7 transition-all duration-700 relative flex flex-col gap-4 p-8 cursor-default"
      style={{
        background: "#080b10",
        border: "1px solid rgba(201,168,76,0.15)",
        transitionDelay: `${(index % 3) * 80}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#0e1219";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#080b10";
      }}
    >
      {/* Project image */}
      {project.image && (
        <div className="w-full h-auto overflow-hidden rounded-sm mb-2">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      {/* Gold top bar reveal on hover */}
      <div
        className="project-bar absolute top-0 left-0 right-0 h-0.5"
        style={{ background: "#c9a84c" }}
      />

      {/* Number watermark */}
      <span
        className="absolute top-48 right-5 font-display leading-none pointer-events-none select-none"
        style={{ fontSize: "3.5rem", color: "rgba(201,168,76,0.07)" }}
      >
        {project.num}
      </span>

      <h3 className="font-serif italic text-parchment text-xl mt-2">
        {project.name}
      </h3>

      <p className="text-ash text-sm leading-relaxed flex-1">{project.desc}</p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <span
            key={tag}
            className="text-ash text-xs tracking-widest uppercase px-2 py-1 rounded-sm"
            style={{ border: "1px solid rgba(201,168,76,0.18)" }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-5 pt-1">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-gold text-xs tracking-widest uppercase hover:gap-2.5 transition-all duration-200"
        >
          Live <ArrowIcon />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-ash text-xs tracking-widest uppercase hover:text-gold hover:gap-2.5 transition-all duration-200"
        >
          GitHub <ArrowIcon />
        </a>
      </div>
    </div>
  );
}

export default function MyProjects() {
  const headerRef = useRef(null);
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          el.classList.add("opacity-100", "!translate-y-0");
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="projects"
      className="py-28 px-8 md:px-16"
      style={{ background: "#0e1219" }}
    >
      {/* Header */}
      <div
        ref={headerRef}
        className="opacity-0 translate-y-7 transition-all duration-700 mb-6"
      >
        <p className="flex items-center gap-3 text-gold uppercase tracking-widest text-xs mb-3">
          <span className="block w-8 h-px bg-gold flex-shrink-0" />
          What I've Built
        </p>
        <h2
          className="font-display text-parchment leading-none mb-4"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 5rem)",
            letterSpacing: "0.02em",
          }}
        >
          Projects
        </h2>
        <p className="text-ash text-sm leading-relaxed max-w-xl">
          A curated collection of projects built with clean design, performance,
          and responsiveness at the core — from productivity tools to developer
          platforms.
        </p>
      </div>

      {/* Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px mt-12"
        style={{ border: "1px solid rgba(201,168,76,0.15)" }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}

        {/* GitHub CTA card */}
        <div
          className="flex flex-col justify-center gap-4 p-8"
          style={{
            background: "rgba(201,168,76,0.04)",
            border: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <p className="text-gold text-xs tracking-widest uppercase">
            More on GitHub
          </p>
          <h3 className="font-serif italic text-parchment text-xl">
            See all my work
          </h3>
          <p className="text-ash text-sm leading-relaxed">
            Explore more projects, experiments, and open source contributions.
          </p>
          <a
            href="https://github.com/DamiiDev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-ink text-xs font-medium tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5 text-center mt-2"
          >
            Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
