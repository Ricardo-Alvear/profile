import { motion } from "framer-motion";
import {
  ChevronRight,
  Code2,
  Download,
  FileText,
  Figma,
  Github,
  Heart,
  Linkedin,
  Mail,
  Phone,
  Settings,
  Smile,
} from "lucide-react";
import React from "react";

// ============================================================================
// DATA STRUCTURES & CONSTANTS
// ============================================================================

const salesAttributes = [
  {
    title: "Performance First",
    desc: "Implementing image optimization, code-splitting, and debouncing to ensure sub-second interaction times.",
  },
  {
    title: "Collaborative Design",
    desc: "Bridging the gap between design and engineering by maintaining a shared component library source of truth.",
  },
  {
    title: "SEO & Semantic HTML",
    desc: "Utilizing proper header hierarchies and metadata to ensure funding platforms are discoverable and accessible.",
  },
  {
    title: "Type-Safe Development",
    desc: "Solid understanding of TypeScript for typing props and API responses to ensure predictable, scalable code.",
  },
  {
    title: "Design-to-Code Mastery",
    desc: "Expert at inspecting Figma files to extract exact hex codes, border radii, and layout constraints for pixel-perfect UI.",
  },
  {
    title: "System Awareness",
    desc: "Fundamental understanding of microservices, system design, and performance optimization techniques like the Abort Controller API.",
  },
];

const devAttributes = [
  {
    title: "Systems Thinking",
    desc: "Fundamental understanding of microservices, system design, and performance optimization like the Abort Controller API.",
  },
  {
    title: "UI/UX Precision",
    desc: "Strong attention-to-detail for spacing and alignment; transforming Figma specs into Flexbox and Grid layouts.",
  },
  {
    title: "Type-Safe Development",
    desc: "Solid understanding of TypeScript for typing props and API responses to ensure predictable, scalable code.",
  },
  {
    title: "Quality Assurance",
    desc: "Authored 100+ unit and integration tests using Jest and React Testing Library to achieve 90% code coverage.",
  },
];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

/**
 * @component PortfolioPage
 * @description Highly accessible main layout component for the professional portfolio website.
 */
const PortfolioPage: React.FC = () => {
  /**
   * Helper function to handle smooth scrolling interaction to specified sections.
   * Also handles shifting focus to the element for screen reader accessibility.
   */
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      element.focus({ preventScroll: true });
    }
  };

  /**
   * Accessible Email click handler that attempts desktop redirection
   * with fallback to Outlook Web.
   */
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const email = "ricardo.alvear@gmail.com";
    const mailtoUrl = `mailto:${email}`;
    const outlookWebUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(email)}`;

    let windowLostFocus = false;
    const handleBlur = () => {
      windowLostFocus = true;
    };
    window.addEventListener("blur", handleBlur);

    window.location.href = mailtoUrl;

    setTimeout(() => {
      window.removeEventListener("blur", handleBlur);
      if (!windowLostFocus) {
        window.open(outlookWebUrl, "_blank", "noopener,noreferrer");
      }
    }, 500);
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-[#FDFDFD] text-slate-900 font-sans scroll-smooth">
      {/* 1. KEYBOARD NAVIGATION: Skip to content link */}
      <a
        href="#expertise"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:bg-blue-600 focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:font-bold focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Skip to content
      </a>

      {/* ----------------------------------------------------------------------
          NAVIGATION BAR
          ---------------------------------------------------------------------- */}
      <nav
        aria-label="Main Navigation"
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex justify-between items-center"
      >
        <span
          className="font-serif font-black text-xl tracking-tighter"
          aria-hidden="true"
        >
          RA.
        </span>
        <div className="flex gap-8">
          {[
            { name: "Profile", id: "profile" },
            { name: "Expertise", id: "expertise" },
            { name: "Experience", id: "experience" },
            { name: "Focus", id: "focus" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded"
              aria-label={`Scroll to ${link.name} section`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </nav>

      {/* ----------------------------------------------------------------------
          HERO HEADER SECTION
          ---------------------------------------------------------------------- */}
      <header
        id="profile"
        tabIndex={-1} /* Makes section focusable after navigation jump */
        className="w-full pt-32 pb-12 px-8 text-center bg-white border-b border-slate-100 focus:outline-none"
      >
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-serif font-black tracking-tighter text-slate-900 mb-6"
        >
          Ricardo Alvear
        </motion.h1>
        <p className="flex items-center justify-center gap-4 text-slate-500 uppercase tracking-[0.4em] text-xs font-medium">
          <span>Full-Stack Developer</span>
          <span
            className="w-2 h-2 rounded-full bg-blue-600"
            aria-hidden="true"
          />
          <span>UI/UX Enthusiast</span>
        </p>
      </header>

      {/* ----------------------------------------------------------------------
          MAIN CONTENT AREA
          ---------------------------------------------------------------------- */}
      <main className="w-full p-4 md:p-8 lg:p-12">
        {/* ROW 1: CORE ATTRIBUTES & CONTACT */}
        <div
          id="expertise"
          tabIndex={-1}
          className="flex flex-col lg:flex-row items-stretch gap-8 w-full mb-12 scroll-mt-24 focus:outline-none"
        >
          {/* Left Column: Objective & Engineering Standards */}
          <div className="flex-1 lg:w-1/2 flex flex-col gap-8">
            <section
              aria-labelledby="objective-heading"
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex flex-col items-center text-center"
            >
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-slate-50 bg-slate-100 mb-6 shadow-inner">
                <img
                  src="/IMG_1531.jpg"
                  alt="Headshot of Ricardo Alvear"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                id="objective-heading"
                className="text-2xl font-serif font-bold mb-4"
              >
                Targeted Objective
              </h2>
              <p className="text-slate-500 leading-relaxed max-w-2xl text-sm">
                Seeking to leverage full-stack expertise in building polished,
                reusable components and secure, scalable infrastructures to
                optimize processing pipelines for data-intensive North American
                businesses.
              </p>
            </section>

            <section
              aria-labelledby="standards-heading"
              className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm grow"
            >
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                <Settings
                  className="text-blue-600"
                  size={28}
                  aria-hidden="true"
                />
                <h2
                  id="standards-heading"
                  className="text-2xl font-serif font-bold uppercase tracking-tight"
                >
                  Core Engineering Standards
                </h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {salesAttributes.map((attr, i) => (
                  <li key={i}>
                    <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tighter">
                      <span className="sr-only">Standard </span>0{i + 1}{" "}
                      {attr.title}
                    </h3>
                    <p className="text-slate-500 mt-1 text-sm">{attr.desc}</p>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column: Contact & Action Hub */}
          <div className="flex-1 lg:w-1/2 flex flex-col gap-8">
            <section
              aria-labelledby="connect-heading"
              className="bg-slate-900 text-white rounded-3xl p-10 shadow-xl flex flex-col justify-between"
            >
              <div>
                <h2
                  id="connect-heading"
                  className="text-2xl font-serif font-bold mb-8 uppercase tracking-tight"
                >
                  Connect
                </h2>

                {/* Semantic Address tag for contact details */}
                <address className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-8 not-italic">
                  <a
                    href="mailto:ricardo.alvear@gmail.com"
                    onClick={handleEmailClick}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-all group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="Email Ricardo Alvear at ricardo.alvear@gmail.com"
                  >
                    <Mail size={20} aria-hidden="true" />{" "}
                    <span className="text-sm truncate">
                      ricardo.alvear@gmail.com
                    </span>
                  </a>
                  <a
                    href="tel:4163948535"
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl hover:bg-blue-600 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="Call Ricardo Alvear at 416-394-8535"
                  >
                    <Phone size={20} aria-hidden="true" />{" "}
                    <span className="text-sm">(416) 394-8535</span>
                  </a>
                </address>

                {/* Secure Download Vault */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-8">
                  {/* Card 1 */}
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group">
                    <a
                      href="/Resume - Ricardo M. Alvear.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 grow focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                    >
                      <FileText
                        size={20}
                        className="text-cyan-400"
                        aria-hidden="true"
                      />{" "}
                      <span className="text-sm font-bold uppercase tracking-wider">
                        Resume{" "}
                        <span className="sr-only">(Opens in new tab)</span>
                      </span>
                    </a>
                    <a
                      href="/Resume - Ricardo M. Alvear.pdf"
                      download="Resume - Ricardo M. Alvear.pdf"
                      className="p-2 hover:bg-cyan-500 rounded-lg transition-colors group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label="Download Resume PDF"
                    >
                      <Download
                        size={18}
                        className="text-white/70 group-hover/btn:text-white"
                        aria-hidden="true"
                      />
                    </a>
                  </div>

                  {/* Card 2 */}
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl hover:bg-white/10 transition-all group">
                    <a
                      href="/Cover Letter - Ricardo M. Alvear.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 grow focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                    >
                      <FileText
                        size={20}
                        className="text-cyan-400"
                        aria-hidden="true"
                      />{" "}
                      <span className="text-sm font-bold uppercase tracking-wider">
                        Cover Letter{" "}
                        <span className="sr-only">(Opens in new tab)</span>
                      </span>
                    </a>
                    <a
                      href="/Cover Letter - Ricardo M. Alvear.pdf"
                      download="Cover Letter - Ricardo M. Alvear.pdf"
                      className="p-2 hover:bg-cyan-500 rounded-lg transition-colors group/btn focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      aria-label="Download Cover Letter PDF"
                    >
                      <Download
                        size={18}
                        className="text-white/70 group-hover/btn:text-white"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* External Professional Profiles */}
              <div className="flex items-center justify-around pt-6 border-t border-white/10">
                <motion.a
                  whileHover={{ y: -8 }}
                  href="https://github.com/Ricardo-Alvear"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white p-2 rounded-lg"
                  aria-label="Visit Ricardo's GitHub profile"
                >
                  <div
                    className="p-6 bg-white text-slate-900 rounded-3xl"
                    aria-hidden="true"
                  >
                    <Github size={32} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest opacity-50">
                    GitHub <span className="sr-only">(Opens in new tab)</span>
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ y: -8 }}
                  href="https://www.linkedin.com/in/ricardo-alvear-ab0446357/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white p-2 rounded-lg"
                  aria-label="Visit Ricardo's LinkedIn profile"
                >
                  <div
                    className="p-6 bg-[#0077B5] text-white rounded-3xl"
                    aria-hidden="true"
                  >
                    <Linkedin size={32} />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest opacity-50">
                    LinkedIn <span className="sr-only">(Opens in new tab)</span>
                  </span>
                </motion.a>
              </div>
            </section>

            {/* Technical Core Checklist */}
            <section
              aria-labelledby="tech-core-heading"
              className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm grow"
            >
              <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
                <Code2 className="text-cyan-500" size={28} aria-hidden="true" />
                <h2
                  id="tech-core-heading"
                  className="text-2xl font-serif font-bold uppercase tracking-tight"
                >
                  Technical Core
                </h2>
              </div>
              <ul className="space-y-6">
                {devAttributes.map((attr, i) => (
                  <li key={i} className="flex gap-4">
                    <ChevronRight
                      size={18}
                      className="text-cyan-500 mt-1"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 uppercase tracking-tighter">
                        {attr.title}
                      </h3>
                      <p className="text-slate-500 text-sm mt-1">{attr.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* ROW 2: EDUCATION, EXPERIENCE & TOOLKIT */}
        <div
          id="experience"
          tabIndex={-1}
          className="flex flex-col lg:flex-row items-stretch gap-8 w-full scroll-mt-24 mb-12 focus:outline-none"
        >
          {/* Work History Section */}
          <div className="flex-1 lg:w-1/2">
            <section
              aria-labelledby="experience-heading"
              className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm h-full"
            >
              <h2
                id="experience-heading"
                className="text-3xl font-serif font-bold mb-10 border-b border-slate-100 pb-6 uppercase tracking-tight"
              >
                Education & Experience
              </h2>

              <div className="space-y-12">
                {/* Item 1 */}
                <div className="relative pl-8 border-l-2 border-slate-100">
                  <div
                    className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-black uppercase tracking-widest text-blue-600 mb-2 block">
                    Education
                  </span>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-xl">
                        George Brown Polytechnic
                      </h3>
                      <p className="text-sm text-slate-600">
                        Computer Programming & Analyst (Advanced Certificate)
                      </p>
                    </div>
                    <time className="text-sm text-slate-400 font-medium italic">
                      Sept 2024 - June 2027
                    </time>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Focused on professional collaboration, Scrum methodologies,
                    and modern web architectures. Based in Toronto, ON.
                  </p>
                </div>

                {/* Item 2 */}
                <div className="relative pl-8 border-l-2 border-slate-100">
                  <div
                    className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white shadow-sm"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-black uppercase tracking-widest text-cyan-500 mb-2 block">
                    Professional Experience
                  </span>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-xl">Sales Associate</h3>
                      <p className="text-sm text-slate-600">
                        JD Sports (Vaughan)
                      </p>
                    </div>
                    <time className="text-sm text-slate-400 font-medium italic">
                      Sept 2025 - Mar 2026
                    </time>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    Developed strong customer service skills by assisting
                    clients with product selection. Maintained a high-energy,
                    detail-oriented environment, ensuring visual merchandising
                    met branch polish requirements.
                  </p>
                </div>

                {/* Item 3 */}
                <div className="relative pl-8 border-l-2 border-slate-100">
                  <div
                    className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white shadow-sm"
                    aria-hidden="true"
                  />
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-xl">Millwork Associate</h3>
                      <p className="text-sm text-slate-600">Lowe's (Vaughan)</p>
                    </div>
                    <time className="text-sm text-slate-400 font-medium italic">
                      July 2023 - Sept 2023
                    </time>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    Managed high-volume customer inquiries, utilizing proactive
                    communication to resolve blockers in the ordering process.
                    Developed skills directly transferable to interpreting
                    software design requirements and client feedback.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Detailed Performance Toolkit Section */}
          <div className="flex-1 lg:w-1/2">
            <section
              aria-labelledby="toolkit-heading"
              className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm h-full"
            >
              <h2
                id="toolkit-heading"
                className="text-3xl font-serif font-bold mb-10 border-b border-slate-100 pb-6 uppercase tracking-tight"
              >
                UI/UX & Performance Toolkit
              </h2>

              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-slate-100">
                  <div
                    className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-purple-600 border-4 border-white shadow-sm"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-black uppercase tracking-widest text-purple-600 mb-2 block">
                    Visual Translation
                  </span>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">
                      Design-to-Code Mastery
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Expert at analyzing shared Figma files to extract exact hex
                    codes, border radii, and specific layout constraints. I
                    build pixel-perfect interfaces utilizing rigid Flexbox and
                    CSS Grid frameworks.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-slate-100">
                  <div
                    className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-pink-500 border-4 border-white shadow-sm"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-black uppercase tracking-widest text-pink-500 mb-2 block">
                    Interaction
                  </span>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">
                      Animation & Motion Design
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Proficient in executing intentional hover states, loading
                    skeleton states, and dynamic layout transitions that elevate
                    the end-user experience without dragging down load metrics.
                  </p>
                </div>

                <div className="relative pl-8 border-l-2 border-slate-100">
                  <div
                    className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm"
                    aria-hidden="true"
                  />
                  <span className="text-xs font-black uppercase tracking-widest text-emerald-500 mb-2 block">
                    Optimization
                  </span>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">
                      Core Web Vitals Auditing
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Experienced with performance auditing, identifying
                    bottlenecks in Largest Contentful Paint (LCP) and Cumulative
                    Layout Shift (CLS) to maintain sub-second interaction click
                    speeds.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ROW 3: PROJECTS, VOLUNTEER & STACK */}
        <div
          id="focus"
          tabIndex={-1}
          className="flex flex-col gap-8 w-full scroll-mt-24 focus:outline-none"
        >
          {/* Project Highlights */}
          <section
            aria-labelledby="projects-heading"
            className="bg-white border border-slate-200 rounded-3xl p-10 shadow-sm w-full"
          >
            <div className="flex items-center gap-4 mb-8 border-b border-slate-100 pb-6">
              <Figma className="text-pink-500" size={28} aria-hidden="true" />
              <h2
                id="projects-heading"
                className="text-2xl font-serif font-bold uppercase tracking-tight"
              >
                Project Highlights
              </h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <li>
                <h3 className="font-bold text-slate-800 mb-1">
                  Figma-to-Code Workflows
                </h3>
                <p className="text-slate-500 text-sm">
                  Extracted precise spacing, typography, and color tokens to
                  build a pixel-perfect, responsive interface.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-slate-800 mb-1">
                  Secure REST API Interactions
                </h3>
                <p className="text-slate-500 text-sm">
                  Defined strict TypeScript interfaces for funding responses to
                  ensure type-safety and prevent runtime data crashes.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-slate-800 mb-1">
                  Test-Driven Logic
                </h3>
                <p className="text-slate-500 text-sm">
                  Created 100+ unit and integration tests using Jest and React
                  Testing Library to verify form validation logic.
                </p>
              </li>
              <li>
                <h3 className="font-bold text-slate-800 mb-1">
                  MERN Stack Deployment
                </h3>
                <p className="text-slate-500 text-sm">
                  Developed and successfully deployed a full-stack application
                  with a heavy focus on high-performance React and Node.js.
                </p>
              </li>
            </ul>
          </section>

          {/* Social Community Engagement & Technical Array */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            <section
              aria-labelledby="community-heading"
              className="bg-slate-50 border border-slate-200 rounded-3xl p-10 shadow-sm flex flex-col justify-between lg:col-span-1"
            >
              <div>
                <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
                  <Heart
                    className="text-red-500"
                    size={24}
                    aria-hidden="true"
                  />
                  <h2
                    id="community-heading"
                    className="text-xl font-serif font-bold uppercase tracking-tight"
                  >
                    Community
                  </h2>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Regularly contribute to UI-focused repositories, fixing CSS
                  alignment issues and improving documentation for junior
                  developers.
                </p>
                <p className="text-sm text-slate-600">
                  Practice Agile/Scrum methodologies by participating in weekly
                  sprints and community code reviews.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-3 mb-4">
                  <Smile
                    className="text-amber-500"
                    size={20}
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                    Interests
                  </h3>
                </div>
                <ul className="text-xs text-slate-500 space-y-2 list-disc list-inside">
                  <li>
                    Participating in developer Discord communities for code
                    reviews.
                  </li>
                  <li>
                    Creating custom icon sets and micro-interactions in Figma.
                  </li>
                </ul>
              </div>
            </section>

            <section
              aria-labelledby="stack-heading"
              className="bg-linear-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-10 shadow-sm text-center lg:col-span-2 flex flex-col justify-center items-center"
            >
              <h2
                id="stack-heading"
                className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-6"
              >
                Technical Stack
              </h2>
              <ul
                className="flex flex-wrap justify-center gap-2 max-w-2xl"
                aria-label="Technologies used"
              >
                {[
                  "JavaScript",
                  "TypeScript",
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "PostgreSQL",
                  "Tailwind CSS",
                  "Figma",
                  "Postman",
                  "Jest",
                  "Vitest",
                  "Rest APIs",
                  "Git/GitHub",
                ].map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1.5 bg-white border border-slate-100 rounded-full text-[10px] font-black uppercase shadow-sm hover:border-blue-600 transition-colors cursor-default"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* ----------------------------------------------------------------------
          FOOTER
          ---------------------------------------------------------------------- */}
      <footer className="w-full py-16 text-center border-t border-slate-100 bg-white mt-12">
        <p className="text-slate-300 text-[10px] uppercase tracking-[1em] font-black">
          Ricardo Alvear — 2026
        </p>
      </footer>
    </div>
  );
};

export default PortfolioPage;
