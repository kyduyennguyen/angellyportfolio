"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetPath = (path) => `${basePath}${path}`;

const skills = [
  {
    name: "HTML",
    image: assetPath("/assets/images/html.png"),
    alt: "HTML 5 logo",
    width: 512,
    height: 512,
  },
  {
    name: "CSS",
    image: assetPath("/assets/images/css-3.png"),
    alt: "CSS 3 logo",
    width: 512,
    height: 512,
  },
  {
    name: "JavaScript",
    image: assetPath("/assets/images/js.png"),
    alt: "JavaScript logo",
    width: 512,
    height: 512,
  },
  {
    name: "React",
    image: assetPath("/assets/images/react.png"),
    alt: "React logo",
    width: 512,
    height: 512,
  },
  {
    name: "Tailwind CSS",
    image: assetPath("/assets/images/tailwind-css.png"),
    alt: "Tailwind CSS logo",
    width: 640,
    height: 640,
  },
  {
    name: "Python",
    image:
      "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/files/python-logo-only.svg",
    alt: "Python language logo",
    width: 512,
    height: 512,
  },
  {
    name: "Figma",
    image: assetPath("/assets/images/figma.png"),
    alt: "Figma logo",
    width: 512,
    height: 512,
  },
  {
    name: "Git/GitLab",
    image: assetPath("/assets/images/git.png"),
    alt: "Git and GitLab logo",
    width: 512,
    height: 512,
  },
  {
    name: "CI/CD",
    image: assetPath("/assets/images/cicd.png"),
    alt: "CI/CD logo",
    width: 512,
    height: 512,
  },
  {
    name: "ST/UT/FT",
    image: assetPath("/assets/images/testing.png"),
    alt: "Software testing logo",
    width: 512,
    height: 512,
  },
  {
    name: "C++",
    image: assetPath("/assets/images/c-.png"),
    alt: "C++ logo",
    width: 512,
    height: 512,
  },
];

const projects = [
  {
    name: "Advice Generator App",
    image: assetPath("/assets/images/advice-generator-app.png"),
    alt: "Advice Generator App preview",
    width: 2872,
    height: 1554,
    imageHref:
      "https://kyduyennguyen.github.io/frontendmentor/advice-generator-app-main/index.html",
    titleHref:
      "https://github.com/kyduyennguyen/frontendmentor/tree/main/advice-generator-app-main",
    description:
      "A modern advice generator app that delivers random motivational quotes with a simple, elegant user experience and responsive interface.",
    skills: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    name: "Grid Landing Page",
    image: assetPath("/assets/images/grid-landing-page.png"),
    alt: "Grid Landing Page preview",
    width: 2872,
    height: 1554,
    imageHref:
      "https://github.com/kyduyennguyen/frontendmentor/tree/main/grid-landing-page-main",
    titleHref:
      "https://kyduyennguyen.github.io/frontendmentor/grid-landing-page-main/index.html",
    description:
      "Modern nonprofit landing page with a strong editorial layout, bold typography, and informative stat cards to highlight impact and mission.",
    skills: ["HTML", "CSS"],
  },
  {
    name: "Age Calculator App",
    image: assetPath("/assets/images/age-calculator-app.png"),
    alt: "Age Calculator App preview",
    width: 2482,
    height: 1458,
    imageHref:
      "https://www.frontendmentor.io/solutions/age-calculator-app-XQuWG87j3J",
    titleHref:
      "https://kyduyennguyen.github.io/frontendmentor/age-calculator-app-main/index.html",
    description:
      "Interactive age calculator with a clean form layout and instant results in years, months, and days.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "3-Column Preview Card",
    image: assetPath("/assets/images/3-column-preview.png"),
    alt: "Three Column Preview Card page",
    width: 2530,
    height: 1444,
    imageHref:
      "https://github.com/kyduyennguyen/frontendmentor/tree/main/3-column-preview-card-component-main",
    titleHref:
      "https://kyduyennguyen.github.io/frontendmentor/3-column-preview-card-component-main/index.html",
    description:
      "A clean three-column car showcase landing page designed to present vehicle categories with strong visual hierarchy and conversion-focused call-to-action buttons.",
    skills: ["HTML", "CSS"],
  },
  {
    name: "Interactive Rating Page",
    image: assetPath("/assets/images/interactive-rating.png"),
    alt: "Interactive Rating page preview",
    width: 2418,
    height: 1458,
    imageHref:
      "https://github.com/kyduyennguyen/frontendmentor/tree/main/interactive-rating-component-main",
    titleHref:
      "https://kyduyennguyen.github.io/frontendmentor/interactive-rating-component-main/index.html",
    description:
      "Interactive rating card with a responsive design and user feedback flow, built to collect ratings in a simple and engaging way.",
    skills: ["HTML", "CSS", "JavaScript"],
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    image: assetPath("/assets/images/linkedin.png"),
    href: "https://www.linkedin.com/in/duyen-dk-nguyen/",
  },
  {
    name: "GitHub",
    image: assetPath("/assets/images/github.png"),
    href: "https://github.com/kyduyennguyen",
  },
  {
    name: "YouTube",
    image: assetPath("/assets/images/youtube.png"),
    href: "https://www.youtube.com/channel/UCYmO6rZYrL7GKY2WAYrFTAg",
  },
  {
    name: "Instagram",
    image: assetPath("/assets/images/instagram.png"),
    href: "https://www.instagram.com/_chubbyyy.bearrr.96_/",
  },
];

const menuLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

function SectionHeading({ image, alt, children }) {
  return (
    <div className="flex items-center gap-5 p-2 sm:gap-8">
      <img
        className="h-14 w-14 rounded-2xl bg-mist p-2 sm:h-16 sm:w-16"
        src={image}
        alt={alt}
      />
      <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
        {children}
      </h2>
    </div>
  );
}

function AutoScrollRow({ items, speed, label, className, renderItem }) {
  const rowRef = useRef(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, scrollLeft: 0 });
  const resumeTimerRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const row = rowRef.current;
    if (!row || reducedMotion) return undefined;

    let frameId;
    const tick = () => {
      const loopWidth = row.scrollWidth / 2;
      if (!pausedRef.current && !draggingRef.current && loopWidth > 0) {
        row.scrollLeft += speed;
        if (row.scrollLeft >= loopWidth - 1) row.scrollLeft = 0;
      }
      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(resumeTimerRef.current);
    };
  }, [reducedMotion, speed]);

  const pauseBriefly = (delay = 350) => {
    pausedRef.current = true;
    window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => {
      if (!draggingRef.current) pausedRef.current = false;
    }, delay);
  };

  const startDrag = (event) => {
    if (event.button !== 0) return;
    draggingRef.current = true;
    pausedRef.current = true;
    dragStartRef.current = {
      x: event.clientX,
      scrollLeft: rowRef.current.scrollLeft,
    };
    rowRef.current.setPointerCapture(event.pointerId);
  };

  const moveDrag = (event) => {
    if (!draggingRef.current) return;
    rowRef.current.scrollLeft =
      dragStartRef.current.scrollLeft -
      (event.clientX - dragStartRef.current.x);
  };

  const endDrag = () => {
    draggingRef.current = false;
    pausedRef.current = false;
  };

  return (
    <div
      ref={rowRef}
      aria-label={label}
      className={`horizontal-scroll flex w-full flex-nowrap items-stretch gap-4 overflow-x-auto px-1 pb-3 ${className}`}
      onPointerEnter={() => pauseBriefly(400)}
      onPointerLeave={endDrag}
      onPointerDown={startDrag}
      onPointerMove={moveDrag}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onWheel={() => pauseBriefly()}
      onFocus={() => {
        pausedRef.current = true;
      }}
      onBlur={() => {
        pausedRef.current = false;
      }}
      tabIndex={0}
    >
      {[...items, ...items].map((item, index) => (
        <div
          key={`${item.name}-${index}`}
          aria-hidden={index >= items.length || undefined}
          inert={index >= items.length}
          className="shrink-0"
        >
          {renderItem(item)}
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  const reveal = {
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.55, ease: "easeOut" },
  };

  return (
    <main id="home" className="overflow-hidden">
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
        <a
          href="#home"
          className="text-2xl font-black uppercase tracking-widest text-primary sm:text-3xl"
        >
          Angelly
        </a>
        <div className="relative">
          <button
            type="button"
            className="rounded-xl p-2 transition hover:bg-mist focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <img
              className="h-10 w-10"
              src={assetPath(
                `/assets/logo/${menuOpen ? "close-menu" : "hamburger-menu"}.svg`,
              )}
              alt=""
            />
          </button>
          <motion.nav
            id="site-menu"
            aria-label="Main navigation"
            initial={false}
            animate={
              menuOpen
                ? { opacity: 1, y: 0, scale: 1, pointerEvents: "auto" }
                : { opacity: 0, y: -8, scale: 0.98, pointerEvents: "none" }
            }
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full mt-2 w-48 origin-top-right overflow-hidden rounded-xl border border-primary bg-canvas shadow-xl"
          >
            {menuLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                tabIndex={menuOpen ? 0 : -1}
                className="block px-5 py-3 text-lg text-neutral-800 transition hover:bg-mist hover:font-bold hover:text-ink"
              >
                {label}
              </a>
            ))}
          </motion.nav>
        </div>
      </header>

      <motion.section
        id="home-hero"
        {...reveal}
        className="bg-mist px-5 py-12 text-center sm:px-8 sm:py-16"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 md:flex-row md:gap-16 md:text-left">
          <div className="flex max-w-xl flex-col items-center md:items-start">
            <p className="mb-2 text-lg">Hi, I&apos;m</p>
            <h1 className="font-display text-4xl font-bold tracking-wide text-ink sm:text-5xl">
              Angelly Nguyen
            </h1>
            <h2 className="mb-3 mt-2 text-xl font-semibold sm:text-2xl">
              Software Developer
            </h2>
            <p className="max-w-lg leading-7">
              Software Developer building modern web experiences with a strong
              focus on clean UI/UX.
            </p>
          </div>
          <motion.img
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.25 }}
            className="h-52 w-52 rounded-full object-cover shadow-[0_0_1.75rem_rgba(51,104,160,0.4)] sm:h-64 sm:w-64"
            src={assetPath("/assets/images/angelly-portrait.jpeg")}
            alt="Angelly's portrait"
          />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            className="rounded-lg border border-ink bg-canvas px-6 py-3 text-lg w-60 font-bold transition hover:border-canvas hover:bg-primary hover:text-canvas"
            href="#projects"
          >
            View My Work
          </a>
          <a
            className="rounded-lg border border-ink bg-canvas px-6 py-3 text-lg w-60 font-bold transition hover:border-canvas hover:bg-primary hover:text-canvas"
            href="#contact"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-8 flex justify-center gap-6">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              whileHover={{ y: -3, scale: 1.08 }}
              className="rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
            >
              <img className="h-10 w-10" src={social.image} alt="" />
            </motion.a>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="about"
        {...reveal}
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 border-b border-primary px-5 py-10 sm:px-8 md:grid-cols-[auto_1fr]"
      >
        <SectionHeading
          image={assetPath("/assets/logo/about-me.svg")}
          alt="About me icon"
        >
          About Me
        </SectionHeading>
        <p className="px-2 py-3 leading-7 tracking-wide md:px-8 text-lg">
          I&apos;m a Software Developer with over 6 years of experience,
          passionate about web design and development, creating beautiful and
          user-friendly web experiences.
        </p>
        <div className="col-span-full flex flex-wrap justify-center gap-4 pt-3 sm:gap-8">
          {[
            {
              name: "Clean Code",
              image: "clean-code.svg",
              className: "bg-[#c4e1e6]",
            },
            {
              name: "Responsive",
              image: "responsive.svg",
              className: "bg-[#c7eabb] text-[#1b5e20]",
            },
            {
              name: "Problem Solver",
              image: "problem-solver.svg",
              className: "bg-[#f9e6a8] text-[#cc6f00]",
            },
          ].map((item) => (
            <motion.div
              key={item.name}
              whileHover={{ y: -4 }}
              className={`flex h-24 w-48 flex-col items-center justify-center gap-2 rounded-2xl sm:w-56 ${item.className}`}
            >
              <img
                className="h-10 w-10"
                src={assetPath(`/assets/logo/${item.image}`)}
                alt=""
              />
              <p>{item.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="skills"
        {...reveal}
        className="mx-auto flex max-w-7xl flex-col gap-5 border-b border-primary px-5 py-10 sm:px-8"
      >
        <SectionHeading
          image={assetPath("/assets/logo/skills.svg")}
          alt="Skills icon"
        >
          My Skills
        </SectionHeading>
        <AutoScrollRow
          items={skills}
          speed={1.2}
          label="Skills, horizontally scrollable"
          className="cursor-grab active:cursor-grabbing"
          renderItem={(skill) => (
            <motion.div
              whileHover={{ y: -4 }}
              className="flex min-h-36 w-28 flex-col items-center justify-center rounded-2xl border border-mist bg-[#e7efe9] p-4 sm:w-36"
            >
              <img
                className="mb-3 h-12 w-12 rounded-xl object-contain sm:h-16 sm:w-16"
                src={skill.image}
                alt={skill.alt}
                width={skill.width}
                height={skill.height}
                loading="lazy"
              />
              <p className="w-full truncate text-center font-semibold">
                {skill.name}
              </p>
            </motion.div>
          )}
        />
      </motion.section>

      <motion.section
        id="projects"
        {...reveal}
        className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-10 sm:px-8"
      >
        <div className="flex items-center justify-between gap-4">
          <SectionHeading
            image={assetPath("/assets/logo/projects.svg")}
            alt="Projects icon"
          >
            Feature Projects
          </SectionHeading>
          <a
            href="https://github.com/kyduyennguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-2 py-3 font-bold transition hover:text-primary sm:px-4"
          >
            View All &rarr;
          </a>
        </div>
        <AutoScrollRow
          items={projects}
          speed={1.6}
          label="Featured projects, horizontally scrollable"
          className="cursor-grab active:cursor-grabbing"
          renderItem={(project) => (
            <motion.article
              whileHover={{ y: -4 }}
              className="flex h-[20rem] w-[min(84vw,23.5rem)] flex-col items-center gap-3 rounded-2xl border border-mist bg-[#e5eee4] p-4 sm:h-[26rem] xs:h-[26rem]"
            >
              <a
                href={project.imageHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} preview`}
              >
                <img
                  className="h-44 w-full rounded-lg object-cover"
                  src={project.image}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  loading="lazy"
                />
              </a>
              <div className="flex flex-1 flex-col items-center gap-2 text-center">
                <a
                  href={project.titleHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-ink transition hover:text-primary"
                >
                  {project.name}
                </a>
                <p className="text-sm leading-6 tracking-wide">
                  {project.description}
                </p>
              </div>
              <div className="mt-auto flex flex-wrap justify-center gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded bg-mist px-2 py-1 text-xs text-ink"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          )}
        />
      </motion.section>

      <motion.section
        id="contact"
        {...reveal}
        className="bg-mist px-5 py-10 text-center sm:px-8 md:px-[max(2rem,calc((100vw-80rem)/2))]"
      >
        <div className="flex flex-col items-center justify-center gap-5 sm:flex-row sm:justify-between mx-16">
          <img
            className="h-14 w-14 rounded-2xl sm:h-16 sm:w-16"
            src={assetPath("/assets/logo/contact-me.svg")}
            alt="Contact me logo"
          />
          <div className="flex flex-col gap-2 tracking-wide">
            <h2 className="font-display text-4xl font-bold">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg">
              Have a project in mind?
              <br />
              I&apos;d love to hear from you.
            </p>
          </div>
          <a
            id="contact-btn"
            className="rounded-lg bg-ink px-10 py-4 text-lg font-bold text-canvas transition hover:bg-primary hover:shadow-lg"
            href="https://www.linkedin.com/in/duyen-dk-nguyen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get In Touch
          </a>
        </div>
      </motion.section>

      <footer className="py-5 text-center text-sm sm:text-xs xs:text-xs tracking-widest">
        <p>
          &copy; 2026 Angelly Nguyen | Software Developer — Crafting thoughtful
          digital experiences, one project at a time.
        </p>
      </footer>
    </main>
  );
}
