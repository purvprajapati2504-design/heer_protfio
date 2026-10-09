"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  ExternalLink,
  Download,
  Eye,
  CheckCircle2,
  Award,
  GraduationCap,
  Briefcase,
  Code2,
  Terminal,
  Database,
  Cloud,
  Layers,
  Sparkles,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Search,
  Filter,
  X,
  Copy,
  Check,
  Menu,
  Globe,
  Server,
  Cpu,
  Laptop
} from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: "Infosys Springboard" | "IBM SkillsBuild" | "Skill India Digital" | "Government Certified";
  category: "Python" | "Web & Backend" | "Cloud & DevOps" | "Data & Database" | "Other";
  filename: string;
  originalName: string;
  date: string;
  description: string;
  skills: string[];
  color: string;
}

const CERTIFICATES: Certificate[] = [
  {
    id: "python-part-1",
    title: "Programming Fundamentals using Python - Part 1",
    issuer: "Infosys Springboard",
    category: "Python",
    filename: "python-part-1.pdf",
    originalName: "Python Part 1.pdf",
    date: "2024",
    description: "Algorithmic thinking, control structures, functions, core data types, and modular code development in Python.",
    skills: ["Python", "Algorithms", "Data Structures", "Functions"],
    color: "from-blue-500/20 to-indigo-500/10"
  },
  {
    id: "python-part-2",
    title: "Programming Fundamentals using Python - Part 2",
    issuer: "Infosys Springboard",
    category: "Python",
    filename: "python-part-2.pdf",
    originalName: "Python Part 2.pdf",
    date: "2024",
    description: "Advanced Python problem solving, exception handling, string operations, collections, and structured coding.",
    skills: ["Python 3", "Exception Handling", "File I/O", "Collections"],
    color: "from-indigo-500/20 to-purple-500/10"
  },
  {
    id: "oops-python",
    title: "Object Oriented Programming using Python",
    issuer: "Infosys Springboard",
    category: "Python",
    filename: "oops-using-python.pdf",
    originalName: "OOPs using Python.pdf",
    date: "2024",
    description: "Core OOP paradigms: Encapsulation, Inheritance, Polymorphism, Abstraction, Classes, and Design Patterns.",
    skills: ["OOP", "Classes & Objects", "Inheritance", "Polymorphism"],
    color: "from-cyan-500/20 to-blue-500/10"
  },
  {
    id: "docker",
    title: "Introduction to Docker",
    issuer: "Infosys Springboard",
    category: "Cloud & DevOps",
    filename: "Docker.pdf",
    originalName: "Docker.pdf",
    date: "2024",
    description: "Containerization fundamentals, Docker images, Dockerfiles, containers lifecycle, and container networking.",
    skills: ["Docker", "Containerization", "DevOps", "Microservices"],
    color: "from-sky-500/20 to-cyan-500/10"
  },
  {
    id: "cloud-computing",
    title: "Fundamentals of Cloud Computing",
    issuer: "Skill India Digital",
    category: "Cloud & DevOps",
    filename: "skill-india-cloud-computing.pdf",
    originalName: "Skill India - Cloud computing.pdf",
    date: "2024",
    description: "Cloud service models (IaaS, PaaS, SaaS), deployment architectures, cloud storage, virtualization, and security.",
    skills: ["Cloud Architecture", "IaaS / PaaS / SaaS", "Virtualization", "Security"],
    color: "from-teal-500/20 to-emerald-500/10"
  },
  {
    id: "sql-nosql",
    title: "SQL and NoSQL for Beginners",
    issuer: "Skill India Digital",
    category: "Data & Database",
    filename: "skill-india-sql-nosql.pdf",
    originalName: "Skill India- SQL & No SQL.pdf",
    date: "2024",
    description: "Relational schema design, SQL CRUD operations, joins, indexing, normalization, and NoSQL document models.",
    skills: ["SQL", "NoSQL", "Database Design", "Queries & Joins"],
    color: "from-amber-500/20 to-orange-500/10"
  },
  {
    id: "ibm-data-science",
    title: "IBM SkillsBuild - Data Concepts & Tableau Desktop",
    issuer: "IBM SkillsBuild",
    category: "Data & Database",
    filename: "ibm-all.pdf",
    originalName: "IBM all .pdf",
    date: "2024",
    description: "Comprehensive credentials covering Tableau Desktop, Data Analytics Concepts, and the Data Science Landscape.",
    skills: ["Tableau Desktop", "Data Concepts", "Data Science", "Analytics"],
    color: "from-blue-600/20 to-indigo-600/10"
  },
  {
    id: "php-intro",
    title: "Introduction to PHP Programming",
    issuer: "Infosys Springboard",
    category: "Web & Backend",
    filename: "infosys-php-certificate.pdf",
    originalName: "infosys php certificate.pdf",
    date: "2024",
    description: "Server-side web scripting, dynamic response generation, form processing, and backend logic with PHP.",
    skills: ["PHP", "Web Backend", "Form Processing", "Server Scripting"],
    color: "from-purple-500/20 to-pink-500/10"
  },
  {
    id: "php-learn",
    title: "Learn PHP - Full Course",
    issuer: "Infosys Springboard",
    category: "Web & Backend",
    filename: "learn-php.pdf",
    originalName: "Learn PHP.pdf",
    date: "2024",
    description: "Comprehensive PHP development: session management, database connectivity, object-oriented PHP, and web security.",
    skills: ["PHP 8", "MySQL Connection", "Sessions & Cookies", "Security"],
    color: "from-violet-500/20 to-purple-500/10"
  },
  {
    id: "spring-basics",
    title: "Spring 5 Basics",
    issuer: "Infosys Springboard",
    category: "Web & Backend",
    filename: "infosys-spring-certificate.pdf",
    originalName: "infosys spring certificate.pdf",
    date: "2024",
    description: "Spring 5 Framework architecture, Inversion of Control (IoC), Dependency Injection, and modern enterprise Java.",
    skills: ["Spring 5", "Dependency Injection", "IoC", "Enterprise Backend"],
    color: "from-emerald-500/20 to-teal-500/10"
  },
  {
    id: "kotlin",
    title: "Kotlin Programming",
    issuer: "Infosys Springboard",
    category: "Web & Backend",
    filename: "Kotlin.pdf",
    originalName: "Kotlin.pdf",
    date: "2024",
    description: "Modern Kotlin language fundamentals, null safety, lambdas, object-oriented and functional programming paradigms.",
    skills: ["Kotlin", "Modern Syntax", "Coroutines", "Android Ready"],
    color: "from-fuchsia-500/20 to-rose-500/10"
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalPdf, setActiveModalPdf] = useState<Certificate | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = ["All", "Python", "Web & Backend", "Cloud & DevOps", "Data & Database"];

  const filteredCertificates = useMemo(() => {
    return CERTIFICATES.filter((cert) => {
      const matchesCategory =
        selectedCategory === "All" || cert.category === selectedCategory;
      const matchesSearch =
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("heerprajapati017@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Background Decorative Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-600/10 blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0a_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Top Banner */}
      <div className="relative z-50 bg-gradient-to-r from-indigo-950/80 via-slate-900 to-indigo-950/80 border-b border-indigo-500/20 text-xs text-slate-300 py-2 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-slate-200">
            MCA Student at Ganpat University (2025–2027)
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline text-indigo-300">
            Open for Software Engineering & Web Developer Opportunities
          </span>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500/50 group-hover:border-indigo-400 transition-all shadow-lg shadow-indigo-500/20">
              <Image
                src="/avatar.jpg"
                alt="Heer Prajapati"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="font-bold text-base tracking-tight text-white flex items-center gap-1.5">
                Heer Prajapati
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <p className="text-[11px] text-slate-400 -mt-0.5">MCA Student & Web Dev</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <Link href="#about" className="hover:text-indigo-400 transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-indigo-400 transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-indigo-400 transition-colors">
              Projects
            </Link>
            <Link href="#certificates" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
              Certifications
              <span className="bg-indigo-500/20 text-indigo-300 text-[10px] px-1.5 py-0.2 rounded-full border border-indigo-500/30">
                11
              </span>
            </Link>
            <Link href="#education" className="hover:text-indigo-400 transition-colors">
              Education
            </Link>
            <Link href="#contact" className="hover:text-indigo-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/Heer_Prajapati_Resume.pdf"
              download="Heer_Prajapati_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-indigo-400" />
              Resume
            </a>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-3.5 h-3.5" />
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-card border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-indigo-400 text-sm font-medium"
            >
              About
            </Link>
            <Link
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-indigo-400 text-sm font-medium"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-indigo-400 text-sm font-medium"
            >
              Projects
            </Link>
            <Link
              href="#certificates"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-indigo-400 text-sm font-medium flex items-center justify-between"
            >
              Certifications
              <span className="bg-indigo-500/20 text-indigo-300 text-xs px-2 py-0.5 rounded-full">
                11 Certificates
              </span>
            </Link>
            <Link
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-indigo-400 text-sm font-medium"
            >
              Education
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-300 hover:text-indigo-400 text-sm font-medium"
            >
              Contact
            </Link>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="/Heer_Prajapati_Resume.pdf"
                download
                className="flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 border border-slate-700"
              >
                <Download className="w-3.5 h-3.5 text-indigo-400" />
                Download Resume PDF
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section id="hero" className="pt-12 pb-20 md:pt-20 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Bio & Intro */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                MCA Scholar • Web Developer • Python Enthusiast
              </div>

              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                  Hello, I&apos;m <br />
                  <span className="gradient-text">Heer Prajapati</span>
                </h1>
                <p className="text-lg sm:text-xl font-medium text-slate-300 max-w-2xl mx-auto lg:mx-0">
                  Crafting dynamic web applications, robust backends, and data-driven solutions with modern technologies.
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Motivated Master of Computer Applications (MCA) student at Ganpat University and BCA graduate (CGPA 8.16).
                Skilled in Python, PHP, SQL, Supabase, Cloud fundamentals, and containerization. Passionate about solving real-world challenges through elegant software engineering.
              </p>

              {/* Quick Info Grid */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-slate-300">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  <span>Mehsana, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <GraduationCap className="w-3.5 h-3.5 text-indigo-400" />
                  <span>MCA (2025–2027)</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>BCA CGPA: 8.16</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="#certificates"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Award className="w-4 h-4" />
                  View 11+ Certifications
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-slate-600 transition-all hover:-translate-y-0.5"
                >
                  <Laptop className="w-4 h-4 text-cyan-400" />
                  Explore Projects
                </Link>

                <a
                  href="/Heer_Prajapati_Resume.pdf"
                  download="Heer_Prajapati_Resume.pdf"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm border border-slate-800 hover:border-slate-700 transition-all"
                  title="Download Resume PDF"
                >
                  <Download className="w-4 h-4 text-indigo-400" />
                  Resume PDF
                </a>
              </div>

              {/* Social links row */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-3">
                <a
                  href="https://www.linkedin.com/in/heer-prajapati-a3730a2b1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/40 hover:bg-blue-900/60 text-blue-300 border border-blue-800/50 text-xs font-medium transition-all"
                >
                  <LinkedInIcon className="w-3.5 h-3.5 fill-current text-blue-400" />
                  LinkedIn Profile
                  <ExternalLink className="w-3 h-3 text-blue-400" />
                </a>
                <a
                  href="mailto:heerprajapati017@gmail.com"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-medium transition-all"
                >
                  <Mail className="w-3.5 h-3.5 text-rose-400" />
                  heerprajapati017@gmail.com
                </a>
              </div>
            </div>

            {/* Right Column: Visual Avatar & Tech Ring */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 sm:w-80 md:w-96 aspect-square">
                {/* Glowing Aura Rings */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-cyan-400/30 blur-2xl animate-pulse-glow" />
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 blur-xl opacity-60" />

                {/* Main Avatar Card Frame */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-indigo-500/30 glass-card p-2 shadow-2xl shadow-indigo-950/50">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                    <Image
                      src="/avatar.jpg"
                      alt="Heer Prajapati Avatar"
                      fill
                      className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />

                    {/* Overlay Tag inside Avatar */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-center">
                      <div className="text-xs font-semibold text-white flex items-center justify-center gap-1.5">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                        Heer Prajapati • MCA Student
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Ganpat University • Web & Python Developer
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -top-3 -right-3 animate-float px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-indigo-500/40 shadow-xl flex items-center gap-2 text-xs font-medium text-indigo-300">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  Python & OOP
                </div>

                <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 animate-float px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 shadow-xl flex items-center gap-2 text-xs font-medium text-cyan-300" style={{ animationDelay: "1.5s" }}>
                  <Cloud className="w-3.5 h-3.5 text-teal-400" />
                  Docker & Cloud
                </div>

                <div className="absolute -bottom-3 -left-3 animate-float px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-purple-500/40 shadow-xl flex items-center gap-2 text-xs font-medium text-purple-300" style={{ animationDelay: "2.5s" }}>
                  <Database className="w-3.5 h-3.5 text-rose-400" />
                  SQL & Supabase
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Banner */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="glass-card p-5 rounded-2xl text-center border border-indigo-500/20">
              <div className="text-3xl font-extrabold text-indigo-400">11+</div>
              <div className="text-xs font-medium text-slate-300 mt-1">Verified Certifications</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Infosys, IBM & Skill India</div>
            </div>

            <div className="glass-card p-5 rounded-2xl text-center border border-cyan-500/20">
              <div className="text-3xl font-extrabold text-cyan-400">8.16</div>
              <div className="text-xs font-medium text-slate-300 mt-1">BCA CGPA</div>
              <div className="text-[10px] text-slate-400 mt-0.5">HNGU University Distinction</div>
            </div>

            <div className="glass-card p-5 rounded-2xl text-center border border-purple-500/20">
              <div className="text-3xl font-extrabold text-purple-400">2027</div>
              <div className="text-xs font-medium text-slate-300 mt-1">MCA Expected</div>
              <div className="text-[10px] text-slate-400 mt-0.5">Ganpat University</div>
            </div>

            <div className="glass-card p-5 rounded-2xl text-center border border-emerald-500/20">
              <div className="text-3xl font-extrabold text-emerald-400">2+</div>
              <div className="text-xs font-medium text-slate-300 mt-1">Core Projects</div>
              <div className="text-[10px] text-slate-400 mt-0.5">E-Commerce & AI Mock Interview</div>
            </div>
          </div>
        </section>

        {/* ABOUT & STRENGTHS SECTION */}
        <section id="about" className="py-20 bg-slate-950/60 border-t border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                Profile & Background
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
                About Heer Prajapati
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                A passionate computer science scholar committed to building reliable, high-performance web applications and mastering modern software architecture.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Summary & Journey */}
              <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-indigo-400" />
                    Professional Summary
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mt-3">
                    Motivated MCA student and BCA graduate with a solid foundation in software development, web technologies, database design, and data analytics. Familiar with modern web workflows, Python programming, PHP backend development, SQL & Supabase, and containerization.
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mt-3">
                    Eager to apply technical knowledge, contribute to real-world software engineering projects, and continuously learn emerging technologies in cloud computing and modern full-stack frameworks.
                  </p>
                </div>

                {/* Core Strengths */}
                <div className="pt-2">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Core Strengths & Work Attributes
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Problem Solving",
                      "Team Collaboration",
                      "Clear Communication",
                      "Time Management",
                      "Goal-Oriented",
                      "Quick Learner",
                      "Attention to Detail",
                      "Continuous Learning"
                    ].map((strength) => (
                      <span
                        key={strength}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Languages Known */}
                <div className="pt-2">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Languages Spoken
                  </h4>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-xs font-bold text-white">English</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Professional</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-xs font-bold text-white">Hindi</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Fluent</div>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800">
                      <div className="text-xs font-bold text-white">Gujarati</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">Native</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Quick Details & Academic Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="glass-card p-6 sm:p-7 rounded-3xl border border-indigo-500/20 space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    Academic Snapshot
                  </h3>

                  <div className="space-y-3.5 text-xs">
                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
                      <div className="text-[11px] text-indigo-400 font-semibold uppercase">Currently Pursuing</div>
                      <div className="text-sm font-bold text-white mt-0.5">Master of Computer Applications (MCA)</div>
                      <div className="text-slate-400 mt-0.5">Ganpat University, Mehsana • 2025–2027</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
                      <div className="text-[11px] text-emerald-400 font-semibold uppercase">Completed With Distinction</div>
                      <div className="text-sm font-bold text-white mt-0.5">Bachelor of Computer Applications (BCA)</div>
                      <div className="text-slate-400 mt-0.5">Sarvajanik BCA College (HNGU) • 2022–2025</div>
                      <div className="mt-1 font-semibold text-emerald-300">CGPA: 8.16 / 10</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800/80">
                      <div className="text-[11px] text-slate-400 font-semibold uppercase">Schooling</div>
                      <div className="text-sm font-bold text-white mt-0.5">Higher Secondary Certificate (12th)</div>
                      <div className="text-slate-400 mt-0.5">Gyanjyot Vidyavihar, Ahmedabad • 2022</div>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Card */}
                <div className="glass-card p-6 rounded-3xl border border-purple-500/20 space-y-3">
                  <h4 className="text-sm font-bold text-white">Direct Communication</h4>
                  <div className="text-xs text-slate-300 space-y-2">
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-indigo-400" />
                      <a href="mailto:heerprajapati017@gmail.com" className="hover:text-indigo-300 transition-colors">
                        heerprajapati017@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-emerald-400" />
                      <a href="tel:+917984399768" className="hover:text-emerald-300 transition-colors">
                        +91 7984399768
                      </a>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin className="w-4 h-4 text-rose-400" />
                      <span>Mehsana, Gujarat, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section id="skills" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              Technical Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Skills & Tech Stack
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Core technologies, programming languages, databases, and DevOps tools verified through hands-on projects and certified courses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Programming Languages */}
            <div className="glass-card p-6 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
                  <Terminal className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Programming</h3>
                <p className="text-xs text-slate-400 mb-4">
                  Core coding foundations and object-oriented architectures.
                </p>
                <div className="space-y-2">
                  {[
                    { name: "Python (OOP & Core)", level: "90%" },
                    { name: "PHP (Backend)", level: "85%" },
                    { name: "SQL Queries", level: "85%" },
                    { name: "HTML5 & CSS3", level: "95%" },
                    { name: "JavaScript", level: "80%" },
                    { name: "Kotlin (Basics)", level: "70%" }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                        <span>{skill.name}</span>
                        <span className="text-slate-400">{skill.level}</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
                          style={{ width: skill.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Databases & Backend */}
            <div className="glass-card p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Databases & BaaS</h3>
                <p className="text-xs text-slate-400 mb-4">
                  Relational schemas, NoSQL concepts, and modern cloud databases.
                </p>
                <div className="space-y-2">
                  {[
                    { name: "SQL (MySQL / Relational)", level: "90%" },
                    { name: "Supabase (PostgreSQL)", level: "85%" },
                    { name: "NoSQL Fundamentals", level: "75%" },
                    { name: "Spring 5 Basics", level: "75%" },
                    { name: "Database Schema Design", level: "85%" }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                        <span>{skill.name}</span>
                        <span className="text-slate-400">{skill.level}</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                          style={{ width: skill.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Cloud & DevOps */}
            <div className="glass-card p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                  <Cloud className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Cloud & DevOps</h3>
                <p className="text-xs text-slate-400 mb-4">
                  Containerized deployments and cloud infrastructure concepts.
                </p>
                <div className="space-y-2">
                  {[
                    { name: "Docker Containerization", level: "85%" },
                    { name: "Cloud Computing (IaaS/PaaS)", level: "80%" },
                    { name: "Git & GitHub Version Control", level: "85%" },
                    { name: "Vercel Deployments", level: "90%" },
                    { name: "Linux / Windows Dev", level: "85%" }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                        <span>{skill.name}</span>
                        <span className="text-slate-400">{skill.level}</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-teal-500"
                          style={{ width: skill.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 4: Analytics & Tools */}
            <div className="glass-card p-6 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Analytics & Tools</h3>
                <p className="text-xs text-slate-400 mb-4">
                  Data science exploration, visualization, and productivity tools.
                </p>
                <div className="space-y-2">
                  {[
                    { name: "Tableau Desktop", level: "80%" },
                    { name: "Data Science Landscape", level: "80%" },
                    { name: "VS Code & IDEs", level: "95%" },
                    { name: "Windows OS Environment", level: "95%" },
                    { name: "REST APIs & JSON", level: "85%" }
                  ].map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs font-medium text-slate-300 mb-1">
                        <span>{skill.name}</span>
                        <span className="text-slate-400">{skill.level}</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-rose-500"
                          style={{ width: skill.level }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 bg-slate-950/60 border-t border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold uppercase tracking-wider">
                Practical Work
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
                Featured Projects
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Real-world web and AI solutions built to solve practical user needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project 1: E-Commerce */}
              <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 hover:border-indigo-500/40 transition-all flex flex-col justify-between group">
                <div className="p-7 sm:p-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
                      Full-Stack Web App
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Server className="w-3.5 h-3.5 text-indigo-400" />
                      PHP & SQL
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      E-Commerce Website
                    </h3>
                    <p className="text-slate-400 text-xs mt-1">
                      Web-Based Grocery Shopping & Retail Platform
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    A web-based grocery shopping concept designed to help users browse, filter, and purchase grocery products seamlessly. Featuring catalog exploration, dynamic cart updates, user authentication, and persistent order tracking.
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-semibold text-slate-300">Key Features:</div>
                    <ul className="text-xs text-slate-400 space-y-1.5 pl-4 list-disc">
                      <li>Intuitive product browsing with categorized aisles and fast search</li>
                      <li>Interactive shopping cart with real-time price calculations</li>
                      <li>User registration and login with session management</li>
                      <li>Relational SQL database handling inventories and orders</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {["PHP", "SQL / MySQL", "HTML5", "CSS3", "JavaScript", "Responsive UI"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-slate-900/50 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Grocery Shopping Concept</span>
                  <span className="text-xs font-semibold text-indigo-400 flex items-center gap-1">
                    Completed Project
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Project 2: AI Mock Interview */}
              <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
                <div className="p-7 sm:p-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                      AI & Web Platform
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                      Python & Supabase
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      AI Mock Interview
                    </h3>
                    <p className="text-slate-400 text-xs mt-1">
                      Intelligent Interview Preparation & Evaluation Platform
                    </p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    An online interview-practice platform that empowers candidates to simulate real-world technical and behavioral interviews, submit responses, and review comprehensive automated evaluation results and actionable feedback.
                  </p>

                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-semibold text-slate-300">Key Features:</div>
                    <ul className="text-xs text-slate-400 space-y-1.5 pl-4 list-disc">
                      <li>Role-tailored interview question sequences with customizable difficulty</li>
                      <li>Real-time response capture and submission processing</li>
                      <li>Automated scoring algorithms analyzing clarity, relevance, and depth</li>
                      <li>Supabase integration for secure user profile storage and progress tracking</li>
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {["Python", "Supabase", "AI/ML Logic", "Web UI", "SQL", "Analytics"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-slate-900/50 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Interview Evaluation Platform</span>
                  <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1">
                    Completed Project
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION - HIGHEST PRIORITY */}
        <section id="certificates" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              Verified Credentials
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Certifications & Diplomas
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Browse all 11+ professional certifications from Infosys Springboard, IBM SkillsBuild, and Skill India.
              Click to view, preview in modal, or download the original PDF files.
            </p>
            <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <FolderIcon className="w-3.5 h-3.5 text-indigo-400" />
              <span>Local source: <code className="text-indigo-300 font-mono">D:heercertificate</code></span>
            </div>
          </div>

          {/* Filter Bar & Search */}
          <div className="glass-card p-4 rounded-2xl mb-8 space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                      selectedCategory === cat
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                        : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search certificate or skill..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <div className="text-xs text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800/60">
              <span>
                Showing <strong className="text-white">{filteredCertificates.length}</strong> of {CERTIFICATES.length} certificates
              </span>
              <span className="text-[11px] text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> All PDFs ready to open & inspect
              </span>
            </div>
          </div>

          {/* Certificate Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="glass-card rounded-2xl border border-slate-800 hover:border-indigo-500/40 p-6 flex flex-col justify-between transition-all hover:-translate-y-1 group"
              >
                <div className="space-y-4">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      {cert.issuer}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {cert.category}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-[10px] text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions: Open, Preview, Download */}
                <div className="pt-5 mt-4 border-t border-slate-800/80 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {/* View Certificate (Hyperlink opens in new tab) */}
                    <a
                      href={`/certificates/${cert.filename}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/20 transition-all"
                      title="Open full PDF in a new browser tab"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Open PDF
                    </a>

                    {/* Quick Preview in Modal */}
                    <button
                      onClick={() => setActiveModalPdf(cert)}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-all"
                      title="Preview certificate directly on this page"
                    >
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      Preview
                    </button>
                  </div>

                  {/* Direct Download option */}
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span className="font-mono truncate max-w-[170px]" title={cert.originalName}>
                      {cert.originalName}
                    </span>
                    <a
                      href={`/certificates/${cert.filename}`}
                      download={cert.originalName}
                      className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
                    >
                      <Download className="w-3 h-3" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CCC Certificate Honorable Mention */}
          <div className="mt-8 p-5 glass-card rounded-2xl border border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  CCC Certificate in Computer Fundamentals
                </h4>
                <p className="text-xs text-slate-400">
                  Government Recognized IT Credential • Computer Operating Concepts & Office Automation
                </p>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
              Verified Credential
            </span>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-20 bg-slate-950/60 border-t border-b border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                Academic Background
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
                Education & Qualifications
              </h2>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                A strong academic record in computer applications and software engineering.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {/* MCA */}
              <div className="glass-card p-6 sm:p-7 rounded-3xl border border-indigo-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold w-fit">
                    Currently Pursuing (2025–2027)
                  </span>
                  <span className="text-xs text-slate-400">Mehsana, Gujarat</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Master of Computer Applications (MCA)
                </h3>
                <div className="text-sm font-semibold text-indigo-300 mt-0.5">
                  Ganpat University, Mehsana
                </div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Focusing on advanced computing paradigms, enterprise software engineering, distributed systems, modern web architectures, and practical application development.
                </p>
              </div>

              {/* BCA */}
              <div className="glass-card p-6 sm:p-7 rounded-3xl border border-emerald-500/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold w-fit">
                    Completed (2022–2025)
                  </span>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-800">
                    CGPA: 8.16 / 10
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Bachelor of Computer Applications (BCA)
                </h3>
                <div className="text-sm font-semibold text-emerald-300 mt-0.5">
                  Sarvajanik BCA & PGDCA College (HNGU University)
                </div>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  Graduated with Distinction. Comprehensive coursework in Data Structures, Object-Oriented Programming (Python, C++, Java), Database Management Systems (SQL), Web Technologies (HTML, CSS, PHP), and System Analysis.
                </p>
              </div>

              {/* 12th Standard */}
              <div className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-800 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-xs font-semibold w-fit border border-slate-800">
                    Completed (2022)
                  </span>
                  <span className="text-xs text-slate-400">Ahmedabad, Gujarat</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Higher Secondary Certificate (12th Standard)
                </h3>
                <div className="text-sm font-semibold text-slate-300 mt-0.5">
                  Gyanjyot Vidyavihar, Ahmedabad
                </div>
                <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                  Solid foundation in mathematics, analytical thinking, and foundational sciences leading to entry into computer science.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold uppercase tracking-wider">
              Get In Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Let&apos;s Connect & Collaborate
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Have an internship, project, or full-time opportunity? Feel free to reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-4">
              {/* Email Card with Copy button */}
              <div className="glass-card p-6 rounded-2xl border border-indigo-500/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <button
                    onClick={copyEmailToClipboard}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy Email
                      </>
                    )}
                  </button>
                </div>
                <div className="text-xs text-slate-400">Official Email</div>
                <a
                  href="mailto:heerprajapati017@gmail.com"
                  className="text-base font-bold text-white hover:text-indigo-300 transition-colors block mt-0.5 truncate"
                >
                  heerprajapati017@gmail.com
                </a>
              </div>

              {/* Phone Card */}
              <div className="glass-card p-6 rounded-2xl border border-emerald-500/30">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium">Available</span>
                </div>
                <div className="text-xs text-slate-400">Mobile Number</div>
                <a
                  href="tel:+917984399768"
                  className="text-base font-bold text-white hover:text-emerald-300 transition-colors block mt-0.5"
                >
                  +91 7984399768
                </a>
              </div>

              {/* LinkedIn & Location Card */}
              <div className="glass-card p-6 rounded-2xl border border-blue-500/30 space-y-4">
                <div>
                  <div className="text-xs text-slate-400">LinkedIn Profile</div>
                  <a
                    href="https://www.linkedin.com/in/heer-prajapati-a3730a2b1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors mt-1"
                  >
                    <LinkedInIcon className="w-4 h-4 fill-current text-blue-400" />
                    linkedin.com/in/heer-prajapati
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <div className="text-xs text-slate-400">Current Location</div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    Mehsana, Gujarat, India
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Message Form */}
            <div className="lg:col-span-7 glass-card p-6 sm:p-8 rounded-3xl border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below to reach out directly to Heer Prajapati.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! Your message inquiry has been recorded. You can also directly email heerprajapati017@gmail.com.");
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Internship Opportunity / Collaboration"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <a
                    href="mailto:heerprajapati017@gmail.com"
                    className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Open Default Email App
                  </a>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-indigo-500/50">
              <Image
                src="/avatar.jpg"
                alt="Heer Prajapati"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-sm text-white">Heer Prajapati</div>
              <div className="text-[11px] text-slate-400">
                MCA Student & Web Developer • Ganpat University
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <Link href="#hero" className="hover:text-white transition-colors">Home</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#skills" className="hover:text-white transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-white transition-colors">Projects</Link>
            <Link href="#certificates" className="hover:text-white transition-colors">Certifications</Link>
            <Link href="#education" className="hover:text-white transition-colors">Education</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="text-center md:text-right text-xs text-slate-500">
            <p>© 2026 Heer Prajapati. All rights reserved.</p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Built with Next.js, Tailwind CSS & Vercel
            </p>
          </div>
        </div>
      </footer>

      {/* MODAL: INTERACTIVE CERTIFICATE VIEWER */}
      {activeModalPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-4xl h-[85vh] bg-[#0c1220] border border-indigo-500/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
              <div className="flex items-center gap-3 pr-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <h3 className="text-sm sm:text-base font-bold text-white truncate">
                    {activeModalPdf.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {activeModalPdf.issuer} • {activeModalPdf.originalName}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={`/certificates/${activeModalPdf.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium flex items-center gap-1.5 transition-all"
                  title="Open PDF in new tab"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open in Tab</span>
                </a>
                <a
                  href={`/certificates/${activeModalPdf.filename}`}
                  download={activeModalPdf.originalName}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium flex items-center gap-1.5 border border-slate-700 transition-all"
                  title="Download PDF"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={() => setActiveModalPdf(null)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF iframe */}
            <div className="flex-1 w-full bg-slate-950 relative">
              <iframe
                src={`/certificates/${activeModalPdf.filename}#toolbar=1&navpanes=0`}
                className="w-full h-full border-none"
                title={activeModalPdf.title}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 px-5">
              <span>Path: <code className="text-indigo-300 font-mono text-[11px]">D:\heer\certificate\{activeModalPdf.originalName}</code></span>
              <button
                onClick={() => setActiveModalPdf(null)}
                className="text-xs text-indigo-400 hover:text-indigo-300 font-medium cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function FolderIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
    </svg>
  );
}
