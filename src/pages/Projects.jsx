/* eslint-disable react/prop-types */
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

gsap.registerPlugin(useGSAP);

const ProjectList = [
  {
    rank: 1,
    name: "E-Commerce Platform",
    disc: "A full-featured online store with a custom CMS ",
    link: "https://neoecommerce.vercel.app/",
    special: "Full stack",
    img: "https://i.postimg.cc/xThKsDVH/neo.webp",
    stack: ["React", "Node.js", "GraphQL"],
    source: "https://github.com/Amanjeet-007/Ecommerce",
    type: "Full-Stack",
  },
  {
    rank: 1,
    name: "Social Media App",
    disc: "A mobile first social media web application",
    link: "http//:",
    img: "https://www.winklix.com/blog/wp-content/uploads/2017/10/instant-messaging-900x500.png",
    stack: ["React", "Firebase", "Node.js"],
    source: "https://github.com/Amanjeet-007",
    type: "Full-Stack",
  },
  {
    rank: 2,
    name: "Deadpool Motion Website",
    disc: "A mobile first social media web application",
    link: "https://amanjeet-007.github.io/Deadpool/",
    special: "Frontend",
    img: "https://i.postimg.cc/J4pPQdpZ/Screenshot-(1663).png",
    stack: ["React", "Firebase", "Node.js"],
    source: "https://github.com/Amanjeet-007",
    type: "Frontend",
  },
  {
    rank: 2,
    name: "Limca Animated Website",
    disc: "A mobile first social media web application",
    link: "http//:",
    img: "",
    stack: ["React", "Firebase", "Node.js"],
    source: "https://github.com/Amanjeet-007",
    type: "Frontend",
  },
  {
    rank: 2,
    name: "Code Conveter",
    disc: "A mobile first social media web application",
    link: "https://github.com/Amanjeet-007/AI-coding",
    img: "https://i.postimg.cc/L6zBC42y/Screenshot-(1665).png",
    stack: ["React", "Gem-Api", "Node.js"],
    source: "https://github.com/Amanjeet-007/AI-coding",
    type: "Full-Stack",
  },
  {
    rank: 2,
    name: "Background Remover",
    disc: "A mobile first social media web application",
    link: "http//:",
    img: "",
    stack: ["React", "Firebase", "Node.js"],
    source: "https://github.com/Amanjeet-007",
    type: "Full-Stack",
  },
  {
    rank: 2,
    name: "Authentication (Scrach)",
    disc: "A mobile first social media web application",
    link: "http//:",
    img: "",
    stack: ["Express", "JWT", "Cookie"],
    source: "https://github.com/Amanjeet-007",
    type: "Backend",
  },
  {
    rank: 3,
    name: "Snake Game",
    disc: "A mobile first social media web application",
    link: "https://amanjeet-007.github.io/Snake-Game/",
    img: "",
    stack: ["React", "Firebase", "Node.js"],
    source: "https://github.com/Amanjeet-007/Snake-Game",
    type: "Frontend",
  },
  {
    rank: 3,
    name: "Tic-Tac-Toe",
    disc: "A mobile first social media web application",
    link: "http//:",
    img: "",
    stack: ["React", "Firebase", "Node.js"],
    source: "https://github.com/Amanjeet-007",
    type: "Frontend",
  },
];

export { ProjectList };

const FALLBACK_GRADIENTS = [
  "linear-gradient(135deg, #DA0037 0%, #3a0d1e 100%)",
  "linear-gradient(135deg, #06D001 0%, #0d3a1e 100%)",
  "linear-gradient(135deg, #1f1832 0%, #DA0037 100%)",
  "linear-gradient(135deg, #151021 0%, #3a1f5c 100%)",
];

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.96,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

function ProjectCard({ el, index }) {
  const [imgFailed, setImgFailed] = useState(false);
  const hasImage = Boolean(el.img) && !imgFailed;
  const fallback = FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length];

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="p-4 card h-[400px] w-[350px] text-white rounded-2xl m-5 overflow-hidden relative flex flex-col"
    >
      {el.special && (
        <span
          className="absolute top-3 left-3 z-50 text-xs font-bold px-3 py-1 rounded-full text-white shadow-md"
          style={{
            background: "rgba(0,0,0,0.55)",
            backdropFilter: "blur(6px)",
            border: "1px solid rgba(255,255,255,0.25)",
          }}
        >
          {el.special}
        </span>
      )}

      <a
        href={el.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${el.name}`}
      >
        <div className="link absolute h-14 w-14 bg-blue-800 rounded-bl-2xl top-0 right-0 flex items-center justify-center z-50 transition-colors hover:bg-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
          </svg>
        </div>
      </a>

      <motion.div
        className="h-45 w-full rounded-2xl mt-4 relative overflow-hidden flex items-center justify-center"
        whileHover={{ scale: 0.92 }}
        transition={{ duration: 0.3 }}
        style={!hasImage ? { background: fallback } : undefined}
      >
        {Boolean(el.img) && (
          <img
            src={el.img}
            alt={el.name}
            loading="lazy"
            onError={() => setImgFailed(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ display: hasImage ? "block" : "none" }}
          />
        )}

        {/* subtle dark gradient at top so the special badge stays readable over any image */}
        {hasImage && (
          <div
            className="absolute top-0 left-0 w-full h-16 pointer-events-none"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.45), transparent)" }}
          />
        )}

        {!hasImage && (
          <span className="text-white/70 text-sm font-semibold tracking-wide">
            Preview coming soon
          </span>
        )}
      </motion.div>

      <motion.a
        href={el.source}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="absolute top-[44%] left-[50%] translate-x-[-50%] w-40 flex items-center justify-center h-10 bg-[#DA0037] rounded-xl text-white font-bold"
        target="_blank"
        rel="noopener noreferrer"
      >
        {"<>"} Source
      </motion.a>

      <p className="text-2xl font-bold mt-10 mb-2 text-[#ffffff]">
        {el.name}
      </p>
      <p className="text-[17px] font-semibold text-[#dcdcdc]">{el.disc}</p>

      <div className="flex bottom-0 absolute flex-wrap">
        {el.stack.map((stackItem) => (
          <p
            key={stackItem}
            className="bg-[#DA0037] font-bold m-4 mt-2 ml-0 pt-1 pb-1 pl-4 pr-4 border-1 rounded-2xl border-white"
          >
            {stackItem}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [FilteredProjects, setFilteredProjects] = useState(ProjectList);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  const filters = [
    {
      name: "All",
      apply: () => {
        setActiveFilter("All");
        setFilteredProjects(ProjectList);
      },
    },
    {
      name: "Frontend",
      apply: () => {
        setActiveFilter("Frontend");
        setFilteredProjects(ProjectList.filter((el) => el.type === "Frontend"));
      },
    },
    {
      name: "Backend",
      apply: () => {
        setActiveFilter("Backend");
        setFilteredProjects(ProjectList.filter((el) => el.type === "Backend"));
      },
    },
    {
      name: "Full Stack",
      apply: () => {
        setActiveFilter("Full Stack");
        setFilteredProjects(ProjectList.filter((el) => el.type === "Full-Stack"));
      },
    },
  ];

  return (
    <main>
      <div className="fixed top-[100px] md:top-[125px] z-40 w-full">
        <div
          className="All h-16 md:h-20 w-full md:-mt-3 mt-4 flex items-center flex-nowrap justify-between overflow-x-auto overflow-y-hidden gap-5 pl-4 scroll-smooth snap-x scrollbar-hide"
          style={{
            maskImage:
              "linear-gradient(to right, black 0%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 90%, transparent 100%)",
          }}
        >
          {filters.map((el) => {
            const isActive = activeFilter === el.name;
            return (
              <button
                key={el.name}
                type="button"
                onClick={el.apply}
                aria-pressed={isActive}
                className={`tech shrink-0 snap-start py-1.5  px-5 md:px-7 rounded-4xl border-2 text-white text-sm md:text-base min-w-max text-center cursor-pointer transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-[#DA0037] border-[#DA0037] scale-105"
                    : "bg-[#151021] border-white hover:bg-[#1f1832]"
                }`}
              >
                {el.name === "All" ? `All ${ProjectList.length}` : el.name}
              </button>
            );
          })}
          {/* extra trailing space so the mask fade doesn't eat into the last real pill's tap target */}
          <div className="shrink-0 w-8" aria-hidden="true" />
        </div>
      </div>

      <motion.section
        layout
        className="boxes-container flex justify-around items-center mt-32 md:mt-26 w-full flex-wrap h-min min-h-[300px]"
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence mode="popLayout">
          {FilteredProjects.length > 0 ? (
            FilteredProjects.map((el, i) => (
              <ProjectCard key={el.name} el={el} index={i} />
            ))
          ) : (
            <motion.p
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white/60 text-xl mt-20"
            >
              No projects here yet — check back soon.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.section>
    </main>
  );
}