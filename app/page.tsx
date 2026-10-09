"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Eye,
  Globe,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Phone,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  UserRound,
  X,
  Copy,
  Check,
  Send,
  Award,
  Database,
  Cloud,
  Laptop
} from "lucide-react";

interface Certificate {
  id: string;
  name: string;
  issuer: string;
  category: "Python" | "Web & Backend" | "Cloud & DevOps" | "Data & Database";
  filename: string;
  originalName: string;
  skills: string[];
  description: string;
}

const certificates: Certificate[] = [
  {
    id: "python-1",
    name: "Programming Fundamentals using Python - Part 1",
    issuer: "Infosys Springboard",
    category: "Python",
    filename: "python-part-1.pdf",
    originalName: "Python Part 1.pdf",
    skills: ["Python", "Algorithms", "Data Structures", "Functions"],
    description: "Core algorithmic thinking, control flow, functional programming, and data types in Python."
  },
  {
    id: "python-2",
    name: "Programming Fundamentals using Python - Part 2",
    issuer: "Infosys Springboard",
    category: "Python",
    filename: "python-part-2.pdf",
    originalName: "Python Part 2.pdf",
    skills: ["Python 3", "Exception Handling", "File I/O", "Collections"],
    description: "Advanced Python problem-solving, structured programming, file handling, and collections."
  },
  {
    id: "oops-python",
    name: "Object Oriented Programming using Python",
    issuer: "Infosys Springboard",
    category: "Python",
    filename: "oops-using-python.pdf",
    originalName: "OOPs using Python.pdf",
    skills: ["OOP", "Classes & Objects", "Inheritance", "Polymorphism"],
    description: "OOP concepts in Python: Encapsulation, Inheritance, Polymorphism, Abstraction, and Class Design."
  },
  {
    id: "docker",
    name: "Introduction to Docker",
    issuer: "Infosys Springboard",
    category: "Cloud & DevOps",
    filename: "Docker.pdf",
    originalName: "Docker.pdf",
    skills: ["Docker", "Containerization", "DevOps", "Microservices"],
    description: "Containerization fundamentals, Dockerfiles, building container images, and running containers."
  },
  {
    id: "cloud-computing",
    name: "Fundamentals of Cloud Computing",
    issuer: "Skill India Digital",
    category: "Cloud & DevOps",
    filename: "skill-india-cloud-computing.pdf",
    originalName: "Skill India - Cloud computing.pdf",
    skills: ["Cloud Architecture", "IaaS / PaaS / SaaS", "Virtualization", "Security"],
    description: "Cloud service models, deployment paradigms, cloud storage, virtualization, and infrastructure."
  },
  {
    id: "sql-nosql",
    name: "SQL and NoSQL for Beginners",
    issuer: "Skill India Digital",
    category: "Data & Database",
    filename: "skill-india-sql-nosql.pdf",
    originalName: "Skill India- SQL & No SQL.pdf",
    skills: ["SQL Queries", "NoSQL", "Schema Design", "Joins & Indexes"],
    description: "Relational database modeling, SQL CRUD operations, joins, indexing, and NoSQL principles."
  },
  {
    id: "ibm-data",
    name: "IBM SkillsBuild - Data Concepts & Tableau Desktop",
    issuer: "IBM SkillsBuild",
    category: "Data & Database",
    filename: "ibm-all.pdf",
    originalName: "IBM all .pdf",
    skills: ["Tableau Desktop", "Data Concepts", "Data Science Landscape"],
    description: "Tableau Desktop visual analytics, data science landscape, and foundational data concepts."
  },
  {
    id: "php-intro",
    name: "Introduction to PHP Programming",
    issuer: "Infosys Springboard",
    category: "Web & Backend",
    filename: "infosys-php-certificate.pdf",
    originalName: "infosys php certificate.pdf",
    skills: ["PHP", "Web Backend", "Form Processing", "Server Scripting"],
    description: "Server-side scripting, dynamic web responses, form handling, and web application logic."
  },
  {
    id: "php-learn",
    name: "Learn PHP - Full Course",
    issuer: "Infosys Springboard",
    category: "Web & Backend",
    filename: "learn-php.pdf",
    originalName: "Learn PHP.pdf",
    skills: ["PHP 8", "MySQL Connection", "Sessions & Cookies", "Web Security"],
    description: "Database-driven PHP applications, session state, user authentication, and application security."
  },
  {
    id: "spring-basics",
    name: "Spring 5 Basics",
    issuer: "Infosys Springboard",
    category: "Web & Backend",
    filename: "infosys-spring-certificate.pdf",
    originalName: "infosys spring certificate.pdf",
    skills: ["Spring 5", "Dependency Injection", "IoC", "Enterprise Backend"],
    description: "Spring Framework fundamentals, Inversion of Control (IoC), Dependency Injection, and modern backend architecture."
  },
  {
    id: "kotlin",
    name: "Kotlin Programming",
    issuer: "Infosys Springboard",
    category: "Web & Backend",
    filename: "Kotlin.pdf",
    originalName: "Kotlin.pdf",
    skills: ["Kotlin", "Modern Syntax", "Coroutines", "Android Ready"],
    description: "Modern Kotlin programming fundamentals, null-safety, functional paradigms, and coroutines."
  }
];

// EXACT TECHNICAL SKILLS AS REQUESTED:
// HTML, CSS, PYTHON, PHP, SQL, SUPABSE
const technicalSkills = [
  "HTML",
  "CSS",
  "PYTHON",
  "PHP",
  "SQL",
  "SUPABSE"
];

const coreStrengths = [
  "Problem Solving",
  "Team Collaboration",
  "Communication",
  "Time Management",
  "Goal-Oriented",
  "Quick Learner"
];

const projects = [
  {
    title: "E-Commerce Website",
    subtitle: "Web-Based Grocery Shopping Platform",
    icon: <Globe className="h-5 w-5 text-indigo-400" />,
    description:
      "Web-based grocery shopping concept designed to help users browse, filter, and purchase grocery products seamlessly with cart management and relational database backend.",
    tags: ["PHP", "SQL", "HTML", "CSS", "Responsive UI"],
    highlights: "Catalog search, shopping cart state, session authentication, and database order processing."
  },
  {
    title: "AI Mock Interview",
    subtitle: "Intelligent Preparation & Evaluation Platform",
    icon: <Bot className="h-5 w-5 text-cyan-400" />,
    description:
      "Online interview-practice platform that helps candidates practise interview responses in real time and review automated evaluation scores and actionable feedback.",
    tags: ["PYTHON", "SUPABSE", "AI/ML Logic", "Web UI", "SQL"],
    highlights: "Question sequencing, instant response evaluation, performance scoring, and persistent progress logs."
  }
];

const educationList = [
  {
    degree: "Master of Computer Applications (MCA) — Pursuing",
    school: "Ganpat University, Mehsana",
    year: "2025 - 2027",
    details: "Advanced software engineering, enterprise applications, cloud systems, and data analytics."
  },
  {
    degree: "Bachelor of Computer Applications (BCA) — Distinction",
    school: "Sarvajanik BCA & PGDCA College (HNGU University)",
    year: "2022 - 2025",
    details: "Graduated with 8.16 CGPA. Core coursework in Data Structures, Python, PHP, DBMS (SQL), and Web Technologies."
  },
  {
    degree: "Higher Secondary Certificate (12th Standard)",
    school: "Gyanjyot Vidyavihar, Ahmedabad",
    year: "2022",
    details: "Academic foundation in mathematics, analytical thinking, and scientific reasoning."
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalPdf, setActiveModalPdf] = useState<Certificate | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const categories = ["All", "Python", "Web & Backend", "Cloud & DevOps", "Data & Database"];

  const filteredCertificates = useMemo(() => {
    return certificates.filter((cert) => {
      const matchesCategory =
        selectedCategory === "All" || cert.category === selectedCategory;
      const matchesSearch =
        cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const linkedInUrl = "https://www.linkedin.com/in/heer-prajapati-a3730a2b1";
  const emailMailto = "mailto:heerprajapati017@gmail.com";
  const gmailWebUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=heerprajapati017@gmail.com";
  const phoneTel = "tel:+917984399768";

  const copyEmail = () => {
    navigator.clipboard.writeText("heerprajapati017@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Decorative Radial Background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.2),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(6,182,212,0.15),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(236,72,153,0.12),_transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8 lg:px-12" id="top">
        {/* Floating Capsule Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl shadow-2xl shadow-black/20"
        >
          <div className="flex items-center gap-3.5">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-indigo-400/40 bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-cyan-400 shadow-lg shadow-indigo-500/20">
              <Image
                src="/avatar.jpg"
                alt="Heer Prajapati"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-base font-bold tracking-tight text-white flex items-center gap-1.5">
                Heer Prajapati
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              </h1>
              <p className="text-xs text-white/60">MCA Student • Web Developer</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm text-white/80 font-medium">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#certificates" className="hover:text-white transition flex items-center gap-1.5">
              Certifications
              <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[11px] text-indigo-300 border border-indigo-500/30 font-semibold">
                11
              </span>
            </a>
            <a href="#education" className="hover:text-white transition">Education</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          {/* Direct Action Buttons in Header */}
          <div className="flex items-center gap-2.5">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-blue-600/30 transition hover:bg-blue-500 hover:scale-[1.02] active:scale-[0.98]"
              title="Open LinkedIn in new tab"
            >
              <LinkedInIcon className="h-3.5 w-3.5 fill-current" />
              <span className="hidden sm:inline">LinkedIn</span>
              <ExternalLink className="h-3 w-3 text-blue-200" />
            </a>

            <a
              href={emailMailto}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              title="Direct Email (Mailto)"
            >
              <Mail className="h-3.5 w-3.5 text-rose-400" />
              <span>Email</span>
            </a>

            <a
              href="/Heer_Prajapati_Resume.pdf"
              download="Heer_Prajapati_Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition hover:scale-[1.02] active:scale-[0.98]"
              title="Download Resume PDF"
            >
              <Download className="h-3.5 w-3.5 text-indigo-600" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>
        </motion.header>

        {/* HERO SECTION */}
        <section className="grid items-center gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr] lg:py-20" id="hero">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs sm:text-sm text-emerald-200 backdrop-blur">
              <Sparkles className="h-4 w-4 text-emerald-300" />
              MCA Student (Ganpat University) • Web Developer • Python Enthusiast
            </div>

            <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              Building reliable web apps with{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
                modern tech
              </span>{" "}
              and precision.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              Motivated MCA student (2025–2027) and BCA graduate (CGPA 8.16) with a solid foundation in software development, web technologies, and database architecture. Familiar with HTML, CSS, PYTHON, PHP, SQL, SUPABSE.
            </p>

            {/* Direct Primary Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#certificates"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-white/10"
              >
                <Award className="h-4 w-4 text-indigo-600" />
                View 11+ Certificates <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-600/20 px-6 py-3 text-sm font-semibold text-blue-200 backdrop-blur transition hover:bg-blue-600/30 hover:scale-[1.02]"
                title="Directly open LinkedIn Profile"
              >
                <LinkedInIcon className="h-4 w-4 fill-current text-blue-300" />
                Open LinkedIn <ExternalLink className="h-3.5 w-3.5 text-blue-300" />
              </a>

              <a
                href={emailMailto}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
                title="Send email directly via default mail app"
              >
                <Mail className="h-4 w-4 text-rose-400" />
                Email Me
              </a>

              <a
                href={gmailWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-5 py-3 text-sm font-semibold text-rose-200 backdrop-blur transition hover:bg-rose-500/20"
                title="Open Gmail compose in web browser"
              >
                <Send className="h-3.5 w-3.5 text-rose-300" />
                Gmail Web
              </a>
            </div>

            {/* Stats Row */}
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Certifications", value: "11+" },
                { label: "BCA CGPA", value: "8.16" },
                { label: "Core Projects", value: "2+" },
                { label: "MCA Expected", value: "2027" }
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl shadow-lg shadow-black/10"
                >
                  <p className="text-3xl font-black text-indigo-200">{item.value}</p>
                  <p className="mt-1 text-xs text-white/60 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/15 to-cyan-400/20 blur-3xl pointer-events-none" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.08] p-7 shadow-2xl shadow-black/40 backdrop-blur-2xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                    Developer Profile
                  </p>
                  <h3 className="mt-1.5 text-2xl font-bold">
                    Heer Prajapati
                  </h3>
                  <p className="text-xs text-indigo-300 font-medium mt-0.5">
                    MCA Scholar • Ganpat University
                  </p>
                </div>
                <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>

              {/* Avatar and Contact Details */}
              <div className="mt-7 flex flex-col sm:flex-row items-center gap-5">
                <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border-2 border-indigo-400/30 bg-slate-900 shadow-xl shadow-indigo-500/20">
                  <Image
                    src="/avatar.jpg"
                    alt="Heer Prajapati Avatar"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                <div className="space-y-2.5 text-xs text-white/75 w-full">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-cyan-300 shrink-0" />
                    <span>Mehsana, Gujarat, India</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-cyan-300 shrink-0" />
                    <a href={phoneTel} className="hover:text-cyan-300 transition">+91 7984399768</a>
                  </p>
                  <p className="flex items-center gap-2 truncate">
                    <Mail className="h-4 w-4 text-cyan-300 shrink-0" />
                    <a href={emailMailto} className="hover:text-cyan-300 transition truncate">heerprajapati017@gmail.com</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <LinkedInIcon className="h-4 w-4 fill-current text-cyan-300 shrink-0" />
                    <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 transition font-semibold flex items-center gap-1">
                      LinkedIn Profile <ExternalLink className="h-3 w-3" />
                    </a>
                  </p>
                </div>
              </div>

              {/* 4 Feature Cards */}
              <div className="mt-7 grid grid-cols-2 gap-3.5">
                {[
                  { icon: <Terminal className="h-4 w-4 text-cyan-300" />, label: "PYTHON" },
                  { icon: <Globe className="h-4 w-4 text-indigo-300" />, label: "PHP & Web" },
                  { icon: <Database className="h-4 w-4 text-fuchsia-300" />, label: "SQL & SUPABSE" },
                  { icon: <Code2 className="h-4 w-4 text-teal-300" />, label: "HTML & CSS" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3.5 text-xs font-medium text-white/85 flex items-center gap-2.5"
                  >
                    <div className="rounded-xl bg-white/10 p-2 shrink-0">
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT & CORE STRENGTHS SECTION */}
        <section className="grid gap-6 py-8 lg:grid-cols-[0.95fr_1.05fr]" id="about">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <UserRound className="h-5 w-5 text-cyan-300" />
              <h3 className="text-2xl font-bold">About Me</h3>
            </div>
            <p className="mt-5 leading-8 text-white/70 text-sm sm:text-base">
              Motivated MCA student at Ganpat University and BCA graduate with Distinction (CGPA: 8.16). I possess a solid foundation in software development, web technologies, database management, and cloud basics. Familiar with Html, Css, Python, Php, Sql, Supabse.
            </p>
            <p className="mt-4 leading-8 text-white/70 text-sm sm:text-base">
              Eager to apply technical knowledge, contribute to practical projects, and continue learning emerging technologies. Experienced in developing full-stack web applications and AI evaluation workflows.
            </p>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2 text-xs">
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-white/80">Languages: English (Professional)</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-white/80">Hindi (Fluent)</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-white/80">Gujarati (Native)</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <Star className="h-5 w-5 text-fuchsia-300" />
              <h3 className="text-2xl font-bold">Core Strengths</h3>
            </div>
            <div className="mt-6 grid gap-3.5 sm:grid-cols-2">
              {coreStrengths.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/85 font-medium"
                >
                  <BadgeCheck className="h-4 w-4 text-emerald-300 shrink-0" />
                  {skill}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-2xl border border-indigo-400/20 bg-indigo-500/10 text-xs text-indigo-200">
              <p className="font-semibold text-white mb-1 flex items-center gap-1.5">
                <Laptop className="h-4 w-4 text-cyan-300" />
                Operating System:
              </p>
              <p className="text-white/85 font-medium">Windows</p>
            </div>
          </motion.div>
        </section>

        {/* TECHNICAL SKILLS SECTION (EXACTLY HTML, CSS, PYTHON, PHP, SQL, SUPABSE) */}
        <section className="py-12" id="skills">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <Layers3 className="h-5 w-5 text-indigo-300" />
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1.5 rounded-full">
                <Laptop className="h-3.5 w-3.5" />
                Operating System: Windows
              </div>
            </div>

            <p className="mt-2 text-sm text-white/60">
              Programming &amp; Core Technical Stack:
            </p>

            {/* Exactly the 6 requested technical skills */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {technicalSkills.map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center backdrop-blur hover:border-indigo-400/50 hover:bg-white/[0.1] transition-all hover:scale-[1.03]"
                >
                  <p className="text-base sm:text-lg font-black tracking-wider text-white">
                    {skill}
                  </p>
                  <span className="text-[10px] text-indigo-300 font-medium uppercase mt-0.5 block">
                    Core Skill
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="py-12" id="projects">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Featured Work
            </p>
            <h3 className="text-3xl font-black mt-1">Practical Projects</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((proj) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55 }}
                className="rounded-[2.5rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl flex flex-col justify-between hover:border-indigo-400/40 transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-2xl border border-white/10 bg-white/10 p-2.5">
                      {proj.icon}
                    </span>
                    <span className="text-xs text-emerald-300 font-semibold flex items-center gap-1">
                      <Check className="h-3.5 w-3.5" /> Completed Project
                    </span>
                  </div>

                  <p className="text-xs text-indigo-300 font-semibold">{proj.subtitle}</p>
                  <h4 className="text-2xl font-bold mt-1 text-white">{proj.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {proj.description}
                  </p>

                  <div className="mt-4 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 text-xs text-white/70">
                    <strong className="text-white">Core Highlight: </strong>
                    {proj.highlights}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-white/80 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CERTIFICATIONS SECTION (ONLY VIEW/SHOW - NO DOWNLOAD) */}
        <section className="py-12" id="certificates">
          <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Verified Credentials
              </p>
              <h3 className="text-3xl font-black mt-1">11+ Verified Certifications</h3>
              <p className="text-xs sm:text-sm text-white/60 mt-1">
                Infosys Springboard, IBM SkillsBuild &amp; Skill India. Click &quot;Open PDF&quot; or &quot;Preview&quot; to inspect credentials.
              </p>
            </div>

            {/* Live Search */}
            <div className="relative w-full md:w-72">
              <Search className="h-4 w-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search certificate or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-2xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-indigo-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-white text-slate-950 shadow-md shadow-white/20"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Certificates Grid - VIEW ONLY, NO DOWNLOAD BUTTON */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl flex flex-col justify-between hover:border-indigo-400/40 transition group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/80 flex items-center gap-1.5">
                      <Award className="h-3.5 w-3.5 text-amber-300" />
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] text-white/50">{cert.category}</span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-indigo-200 transition line-clamp-2">
                    {cert.name}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-white/60 line-clamp-2">
                    {cert.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span key={s} className="rounded bg-white/5 px-2 py-0.5 text-[10px] text-white/70">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ONLY SHOW / VIEW ACTIONS - NO DOWNLOAD */}
                <div className="mt-5 pt-4 border-t border-white/10">
                  <div className="grid grid-cols-2 gap-2">
                    {/* Open in tab */}
                    <a
                      href={`/certificates/${cert.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-white/90 shadow-sm"
                      title="Open full PDF to view in new tab"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Open PDF
                    </a>

                    {/* Preview Modal */}
                    <button
                      onClick={() => setActiveModalPdf(cert)}
                      className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-white/12 bg-white/5 px-3 py-2 text-xs font-semibold text-white transition hover:bg-white/10 cursor-pointer"
                      title="Preview certificate on page"
                    >
                      <Eye className="h-3.5 w-3.5 text-cyan-300" />
                      Preview
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CCC Certificate Box */}
          <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-amber-300 shrink-0" />
              <div>
                <h5 className="text-sm font-bold text-white">CCC Certificate in Computer Fundamentals</h5>
                <p className="text-xs text-white/70">Government Recognized Credential • Computer Operating Concepts</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-200">
              Verified Credential
            </span>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="py-12" id="education">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-300">
              Academic Background
            </p>
            <h3 className="text-3xl font-black mt-1">Education &amp; Qualifications</h3>
          </div>

          <div className="space-y-4">
            {educationList.map((edu) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <span className="text-xs font-semibold text-indigo-300 rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 w-fit">
                    {edu.year}
                  </span>
                </div>
                <p className="text-sm font-medium text-emerald-300">{edu.school}</p>
                <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION WITH DIRECT HYPERLINKS */}
        <section className="py-12" id="contact">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-rose-300">
              Get in Touch
            </p>
            <h3 className="text-3xl font-black mt-1">Direct Contact &amp; Channels</h3>
            <p className="text-sm text-white/60 mt-1">
              Click any of the links below to connect directly with Heer Prajapati.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Direct Channel Cards */}
            <div className="space-y-4">
              {/* LinkedIn Direct Card */}
              <div className="rounded-3xl border border-blue-500/30 bg-blue-500/10 p-6 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="rounded-2xl bg-blue-600 p-3 text-white shadow-lg shadow-blue-600/30">
                    <LinkedInIcon className="h-6 w-6 fill-current" />
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-white">LinkedIn Profile</h5>
                    <p className="text-xs text-blue-200">Connect for internships &amp; developer roles</p>
                  </div>
                </div>

                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-600/30 transition hover:bg-blue-500 hover:scale-[1.02]"
                >
                  Open LinkedIn <ExternalLink className="h-3.5 w-3.5 inline ml-1" />
                </a>
              </div>

              {/* Email Direct Card */}
              <div className="rounded-3xl border border-indigo-500/30 bg-indigo-500/10 p-6 backdrop-blur-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="rounded-2xl bg-indigo-600 p-3 text-white shadow-lg shadow-indigo-600/30">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-white">Email Address</h5>
                      <a href={emailMailto} className="text-xs text-indigo-200 hover:underline">
                        heerprajapati017@gmail.com
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="rounded-full border border-white/12 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white/90 transition hover:bg-white/20 cursor-pointer"
                  >
                    {copiedEmail ? "Copied!" : "Copy"}
                  </button>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                  <a
                    href={emailMailto}
                    className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-white/90"
                  >
                    Open Mail App
                  </a>
                  <a
                    href={gmailWebUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-rose-400/30 bg-rose-500/20 px-4 py-2 text-xs font-semibold text-rose-200 transition hover:bg-rose-500/30"
                  >
                    Open in Gmail Web <ExternalLink className="h-3 w-3 inline ml-1" />
                  </a>
                </div>
              </div>

              {/* Phone & Location */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs text-white/50">Call / Phone</p>
                  <a href={phoneTel} className="mt-1 text-sm font-bold text-emerald-300 block hover:underline">
                    +91 7984399768
                  </a>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs text-white/50">Location</p>
                  <p className="mt-1 text-sm font-bold text-white">
                    Mehsana, Gujarat
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Message Form */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h4 className="text-xl font-bold mb-2">Send a Quick Message</h4>
              <p className="text-xs text-white/60 mb-5">
                Have an inquiry or collaboration opportunity? Send a quick note:
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message recorded! You can also email directly at heerprajapati017@gmail.com.");
                }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-indigo-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-indigo-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-white/70 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-white py-3 text-xs font-bold text-slate-950 transition hover:bg-white/90 active:scale-[0.99] cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-white/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white">Heer Prajapati</span>
            <span>•</span>
            <span>MCA Scholar, Ganpat University</span>
          </div>

          <div className="flex items-center gap-4">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href={emailMailto} className="hover:text-white transition">
              Email
            </a>
            <a href="/Heer_Prajapati_Resume.pdf" download className="hover:text-white transition">
              Resume PDF
            </a>
            <a href="#top" className="hover:text-white transition">
              Back to Top ↑
            </a>
          </div>

          <p>© 2026 Heer Prajapati. All rights reserved.</p>
        </footer>
      </div>

      {/* MODAL: INTERACTIVE PDF VIEWER (SHOW / PREVIEW ONLY - NO DOWNLOAD BUTTON) */}
      {activeModalPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl h-[85vh] bg-[#0c1220] border border-white/15 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.04]">
              <div className="truncate pr-4">
                <h4 className="text-base font-bold text-white truncate">
                  {activeModalPdf.name}
                </h4>
                <p className="text-xs text-white/60">
                  {activeModalPdf.issuer} • Verified Credential
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`/certificates/${activeModalPdf.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-slate-950 transition hover:bg-white/90"
                >
                  Open in Tab
                </a>
                <button
                  onClick={() => setActiveModalPdf(null)}
                  className="rounded-full p-1.5 text-white/60 hover:text-white hover:bg-white/10 transition cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 w-full bg-slate-950">
              <iframe
                src={`/certificates/${activeModalPdf.filename}#toolbar=0&navpanes=0`}
                className="w-full h-full border-none"
                title={activeModalPdf.name}
              />
            </div>

            <div className="p-3 bg-white/[0.02] border-t border-white/10 flex items-center justify-between text-xs text-white/50 px-5">
              <span>Verified Credential • {activeModalPdf.issuer}</span>
              <button
                onClick={() => setActiveModalPdf(null)}
                className="text-xs text-indigo-300 hover:text-white font-medium cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}
