import React, { useRef, useState, useEffect } from "react";

function InfoRow({ icon, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-gold flex-shrink-0">{icon}</span>
      <span className="text-ash text-sm">{children}</span>
    </div>
  );
}

const EmailIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const formRef = useRef(null);
  const sectionRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleFocus = (e) => (e.target.style.borderColor = "#c9a84c");
  const handleBlur = (e) =>
    (e.target.style.borderColor = "rgba(201,168,76,0.18)");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 3500);
    }, 1200);
  };

  const inputClass =
    "w-full bg-ink-2 text-parchment text-sm px-4 py-3.5 rounded-sm outline-none transition-all duration-200 placeholder-ash/40 border border-[rgba(201,168,76,0.18)] focus:border-gold";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-28 px-8 md:px-16 grid md:grid-cols-2 gap-20 items-start transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
      }`}
    >
      {/* Left */}
      <div>
        <p className="flex items-center gap-3 text-gold uppercase tracking-widest text-xs mb-3">
          <span className="block w-8 h-px bg-gold" />
          Say Hello
        </p>

        <h2 className="font-display text-parchment leading-none mb-4 text-[clamp(2rem,4.5vw,4.5rem)]">
          Ready to Start <br /> Your Project?
        </h2>

        <p className="font-serif italic text-gold text-lg mb-5">
          Let's build something great together.
        </p>

        <p className="text-ash text-sm leading-loose mb-10 max-w-sm">
          Have a project in mind, an idea to explore, or simply want to connect?
        </p>

        <div className="flex flex-col gap-4">
          <InfoRow icon={<EmailIcon />}>
            <a
              href="mailto:damilarefestus12@gmail.com"
              className="hover:text-gold"
            >
              damilarefestus12@gmail.com
            </a>
          </InfoRow>

          <InfoRow icon={<GithubIcon />}>
            <a
              href="https://github.com/DamiiDev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              github.com/DamiiDev
            </a>
          </InfoRow>

          <InfoRow icon={<LinkedInIcon />}>
            <a
              href="https://www.linkedin.com/in/damilare-festus-915386202/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold"
            >
              linkedin.com/in/damilare-festus
            </a>
          </InfoRow>
        </div>
      </div>

      {/* Right */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-5"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className={inputClass}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <input
          type="email"
          name="user_email"
          placeholder="your@email.com"
          required
          className={inputClass}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <textarea
          name="message"
          rows={6}
          placeholder="Tell me about your project..."
          required
          className={`${inputClass} resize-none`}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-gold text-ink text-xs uppercase tracking-widest px-10 py-4 rounded-sm hover:bg-[#d4b65a] transition-all disabled:opacity-60"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-gold text-sm">✓ Message sent successfully</p>
        )}
      </form>
    </section>
  );
}
