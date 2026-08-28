import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, ChevronDown, ExternalLink } from "lucide-react";

export default function About() {
  const [openSection, setOpenSection] = useState(null);

  const toggleDetails = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  const workExperience = [
    {
      id: "work-1",
      role: "Full Stack Developer",
      company: "Axione Solutions",
      duration: "06/2026 - Present",
      tags: ["React", "TypeScript", "Next.js", "PostgreSQL", "React Native", "Hostinger", "Vercel", "MongoDB"],
      description:
        "Building scalable web applications using Next.js with TypeScript, improving deployment efficiency by 40%. Implemented state management solutions with Redux and Zustand to ensure predictable application behavior.",
    },
    {
      id: "work-2",
      role: "Web Developer",
      company: "InAmingo Foundation",
      duration: "01/2026 - 06/2026",
      tags: ["React", "Node.js", "Express", "PostgreSQL", "AWS"],
      description:
        "Developed full-stack features and maintained RESTful APIs for a client-facing SaaS platform, improving API response times by 30%. Managed cloud infrastructure on AWS utilizing EC2, S3, and Lambda.",
    },
  ];

  const education = [
    {
      id: "edu-1",
      degree: "Bachelor of Computer Applications",
      institution: "Patliputra University (Vestor College of Management)",
      duration: "2022 - 2025",
      description:
        "Focused on software engineering principles, data structures, and algorithms. Actively participated in coding clubs and hackathons.",
    },
    {
      id: "edu-2",
      degree: "Senior Secondary (12th)",
      institution: "Bihar School Examination Board",
      duration: "2020 - 2022",
      description:
        "Completed Science Stream with First Division. Built strong foundation in analytical thinking and problem-solving.",
    },
  ];

  const interests = [
    {
      name: "Chess",
      img: "https://images.unsplash.com/photo-1695480542225-bc22cac128d0?w=600&auto=format&fit=crop&q=60",
      link: "https://www.chess.com/member/amanjeet007",
      about: "I like to play chess to sharpen strategy and take a break from overthinking 😆",
    },
  ];

  return (
    <main className="container max-w-6xl px-6 py-15 mx-auto text-gray-200">
      {/* Hero Header */}
      <section className="text-center mb-16 mt-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
          AMANJEET KUMAR
        </h1>
        <p className="text-lg md:text-xl text-blue-400 font-medium">
          Full-Stack JavaScript Developer
        </p>
        <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto mt-2">
          Specializing in building high-quality, modern web & mobile applications.
        </p>
      </section>

      {/* Hero Profile Cards & PNG Image (Borderless & Overflow Visible) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24 items-center overflow-visible">
        <div className="md:col-span-4 border border-white/10 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md">
          <p className="text-gray-300 leading-relaxed text-center md:text-left">
            A <span className="text-blue-400 font-semibold">curious builder</span> who loves turning complex ideas into intuitive digital experiences across code, UI/UX, and AI.
          </p>
        </div>

        {/* PNG Image Container without Borders */}
        <div className="md:col-span-4 flex justify-center overflow-visible relative">
          <img
            src="/hiibat.webp"
            alt="Amanjeet Kumar"
            className="w-56 h-auto max-h-[320px] object-contain overflow-visible drop-shadow-[0_20px_30px_rgba(0,0,0,0.7)]"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/256x256/1e293b/ffffff?text=Amanjeet";
            }}
          />
        </div>

        <div className="md:col-span-4 border border-white/10 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md">
          <p className="text-gray-300 leading-relaxed text-center md:text-left">
            Passionate about understanding systems <span className="text-purple-400 font-semibold">under the hood</span> — building fast, scalable tools that simplify daily life.
          </p>
        </div>
      </section>

      {/* Main Sections Wrapper */}
      <div className="space-y-24">
        {/* Work Experience Section (Left Aligned + Right Image Placeholder) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2 justify-start">
              <Briefcase className="w-6 h-6 text-blue-400" /> Work Experience
            </h2>

            <div className="relative border-l border-white/15 ml-4 space-y-8">
              {workExperience.map((item) => {
                const isOpen = openSection === item.id;
                return (
                  <div key={item.id} className="relative pl-8">
                    <span className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#121420] border border-blue-500/40 text-blue-400">
                      <Briefcase className="w-4 h-4" />
                    </span>

                    <div className="bg-[#121420] p-6 rounded-xl border border-white/10 shadow-xl transition-all hover:border-white/20">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h3 className="text-lg font-bold text-white">{item.role}</h3>
                        <span className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-md w-fit">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-blue-400 text-sm font-medium mt-0.5">{item.company}</p>

                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {item.tags.map((tag) => (
                          <span key={tag} className="text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 py-0.5 px-2.5 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => toggleDetails(item.id)}
                        className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 mt-4 font-medium transition-colors"
                      >
                        <span>{isOpen ? "Hide description" : "View description"}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-400 text-sm leading-relaxed mt-3 pt-3 border-t border-white/10">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side Image Placeholder for Work Experience */}
          <div className="lg:col-span-5 h-full flex items-center justify-center order-2 lg:order-1 pt-12 lg:pt-0">
            <img src="/work.webp" alt="" />
          </div>
        </section>

        {/* Education Section (Left Image Placeholder + Right Aligned) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side Image Placeholder for Education */}
          <div className="lg:col-span-3 h-full flex items-center justify-center order-2 lg:order-1 pt-12 lg:pt-0 ">
            <img src="/study.webp" alt="work" />
          </div>

          {/* Right Side Education Content */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2 justify-start">
              <GraduationCap className="w-6 h-6 text-blue-400" /> Education
            </h2>

            <div className="relative border-l border-white/15 ml-4 space-y-8">
              {education.map((item) => {
                const isOpen = openSection === item.id;
                return (
                  <div key={item.id} className="relative pl-8">
                    <span className="absolute -left-[17px] top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-[#121420] border border-blue-500/40 text-blue-400">
                      <GraduationCap className="w-4 h-4" />
                    </span>

                    <div className="bg-[#121420] p-6 rounded-xl border border-white/10 shadow-xl transition-all hover:border-white/20">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h3 className="text-lg font-bold text-white">{item.degree}</h3>
                        <span className="text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-md w-fit">
                          {item.duration}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mt-1">{item.institution}</p>

                      <button
                        onClick={() => toggleDetails(item.id)}
                        className="flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 mt-4 font-medium transition-colors"
                      >
                        <span>{isOpen ? "Hide details" : "View details"}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-400 text-sm leading-relaxed mt-3 pt-3 border-t border-white/10">
                              {item.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Personal Touch / Interests */}
        <section className="pt-6">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Interests & Hobbies</h2>
          <div className="flex flex-col items-center bg-[#121420] border border-white/10 p-6 rounded-2xl max-w-sm mx-auto">
            <img src={interests[0].img} alt="Chess" className="h-40 w-full object-cover rounded-xl mb-4" />
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">{interests[0].name}</span>
              <a href={interests[0].link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <p className="text-sm text-gray-400 text-center mt-2">{interests[0].about}</p>
          </div>
        </section>
      </div>
    </main>
  );
}