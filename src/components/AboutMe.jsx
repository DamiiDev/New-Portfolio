import React, { useEffect, useRef } from 'react'

function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('opacity-100', '!translate-y-0') },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function RevealBlock({ children, delay = 0 }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-7 transition-all duration-700"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-28 px-8 md:px-16"
      style={{ background: '#0e1219' }}
    >
      {/* Section header */}
      <RevealBlock>
        <p className="flex items-center gap-3 text-gold uppercase tracking-widest text-xs mb-3">
          <span className="block w-8 h-px bg-gold flex-shrink-0" />
          Who I Am
        </p>
        <h2
          className="font-display text-parchment leading-none mb-16"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', letterSpacing: '0.02em' }}
        >
          About Me
        </h2>
      </RevealBlock>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Myself */}
        <RevealBlock delay={100}>
          <h3 className="font-display text-gold text-2xl tracking-wider mb-4">Myself</h3>
          <p className="text-ash leading-loose text-sm md:text-base mb-8">
            I'm Damilare Festus, a Frontend Developer passionate about building
            clean, fast, and user-friendly web experiences. I specialise in
            React.js and Tailwind CSS, crafting scalable components and
            responsive layouts that look great on any device. Currently
            expanding into full-stack development to deliver complete,
            end-to-end solutions. Let's build something great together.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gold text-ink text-xs font-medium tracking-widest uppercase px-8 py-4 rounded-sm hover:bg-gold-light transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </RevealBlock>

        {/* Education */}
        <RevealBlock delay={200}>
          <h3 className="font-display text-gold text-2xl tracking-wider mb-4">Education</h3>
          <p className="text-ash leading-loose text-sm md:text-base mb-6">
            I hold a B.Eng in Computer Engineering from Ekiti State University,
            graduating with a Second Class Upper (2:1). My academic foundation
            in programming, data structures, algorithms, and software
            engineering shapes how I approach every project with clarity,
            structure, and efficiency.
          </p>
          <p className="text-ash leading-loose text-sm md:text-base mb-8">
            I also completed the NYSC program, where I sharpened my
            adaptability and problem-solving skills in real-world environments.
          </p>

          {/* Degree card */}
          <div
            className="p-5 rounded-sm"
            style={{
              border: '1px solid rgba(201,168,76,0.18)',
              borderLeft: '3px solid #c9a84c',
              background: 'rgba(201,168,76,0.04)',
            }}
          >
            <p className="text-gold text-xs tracking-widest uppercase mb-1">
              Ekiti State University
            </p>
            <p className="text-parchment text-sm">
              B.Eng Computer Engineering — Second Class Upper (2:1)
            </p>
          </div>
        </RevealBlock>
      </div>
    </section>
  )
}
