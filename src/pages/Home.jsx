/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import { ProjectList } from "./Projects";
import { NavLink } from "react-router";
import "../App.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SkillsComp = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const tools = [
    {
      name: "Frontend",
      tool: [
        {
          name: "HTML",
          icon: "https://cdn-icons-png.flaticon.com/128/174/174854.png",
        },
        {
          name: "CSS",
          icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png",
        },
        {
          name: "Tailwind",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBcUWKpYcq2J1vHUZukxAZgDo1oxERdU6fp6Ns3sWixA&s=10",
        },
        {
          name: "React",
          icon: "https://cdn-icons-png.flaticon.com/128/875/875209.png",
        },
        {
          name: "Next",
          icon: "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
        },
        {
          name: "Motion",
          icon: "https://framerusercontent.com/assets/MadJ73ykiBPmXMK5j0iTVYDPACI.png",
        },
        {
          name: "Gsap",
          icon: "https://gsap.com/community/uploads/monthly_2020_03/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png",
        },
      ],
    },
    {
      name: "Backend",
      tool: [
        {
          name: "Node",
          icon: "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
        },
        {
          name: "Firebase",
          icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqT8djE3RRCjS12VhVffYljiQFEX4DUKcnF5ihpraG6Cz8EDbIi0bqzDG&s=10",
        },
        {
          name: "Supabase",
          icon: "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/supabase.webp",
        },
        {
          name: "Express",
          icon: "https://user-images.githubusercontent.com/11978772/40430986-a0eb7b92-5e63-11e8-80eb-43fe07f664a6.png",
        },
      ],
    },
    {
      name: "Database & Tools",
      tool: [
        {
          name: "MongoDb",
          icon: "https://www.svgrepo.com/show/331488/mongodb.svg",
        },
        {
          name: "PostgreSQL",
          icon: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Logo_PostgreSQL.png",
        },
        {
          name: "Git",
          icon: "https://cdn-icons-png.flaticon.com/128/15466/15466163.png",
        },
        {
          name: "Postman",
          icon: "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-svg-download-png-2945092.png",
        },
        {
          name: "Github",
          icon: "https://cdn-icons-png.flaticon.com/128/733/733553.png",
        },
        {
          name: "Docker",
          icon: "https://cdn-icons-png.flaticon.com/128/919/919853.png",
        },
        {
          name: "N8N",
          icon: "https://th.bing.com/th/id/OIP.9gBs36qI6HSRCL6DfoZvQQAAAA?w=176&h=180&c=7&r=0&o=7&dpr=1.9&pid=1.7&rm=3",
        },
      ],
    },
    {
      name: "Programming Languages",
      tool: [
        {
          name: "JavaScript",
          icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
        },
        {
          name: "Python",
          icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
        },
        {
          name: "C++",
          icon: "https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png",
        },
      ],
    },
  ];

  const categories = ["All", ...tools.map((item) => item.name)];

  const filteredTools =
    activeCategory === "All"
      ? tools
      : tools.filter((item) => item.name === activeCategory);

  const groupVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.25, ease: "easeOut" },
    },
  };

  return (
    <div className="skills min-h-screen w-full flex flex-col items-center py-12 px-4">
      <p className="font-bold text-2xl sectionname text-white mb-6">Skills</p>



      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-4xl flex flex-col items-center"
        >
          {filteredTools.map((el) => (
            <div className="skillwrapper w-full text-white my-3" key={el.name}>
              <motion.div
                className="w-full flex flex-wrap items-center justify-center gap-2.5"
                variants={groupVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {el.tool.map((childEl) => (
                  <motion.div
                    variants={cardVariant}
                    whileHover={{ scale: 1.05, y: -2 }}
                    key={childEl.name}
                    className="card px-3.5 py-2 rounded-full flex items-center gap-2 border border-gray-700/60 bg-gray-900/60 backdrop-blur-md hover:border-blue-500/50 hover:bg-gray-800/80 transition-all cursor-default shadow-sm"
                  >
                    <img
                      src={childEl.icon}
                      alt={childEl.name}
                      loading="lazy"
                      className="h-5 w-5 object-contain"
                    />
                    <span className="text-xs md:text-sm font-medium text-gray-200">
                      {childEl.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-wrap justify-center gap-2 mb-8 p-1.5 md:bg-gray-900/80 md:backdrop-blur-md rounded-full md:border border-gray-800/80 max-w-full">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative cursor-pointer px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-colors duration-200 outline-none border-none`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterPill"
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-md shadow-blue-500/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 flex items-center  ${
                isActive ? "text-white" : "text-gray-400 hover:text-gray-200"
              }`} >
                {category}
                {isActive && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

const TopProjects = () => {
  const topRankProjects = ProjectList.filter((el) => el.rank === 1);

  return (
    <div className="projects h-min flex w-full justify-around flex-wrap">
      {topRankProjects.map((el, i) => (
        <motion.div
          className="p-4 card h-[400px] w-[350px] text-white rounded-2xl m-5 overflow-hidden cursor-pointer relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
          whileHover={{ scale: 1.03 }}
          key={el.name}
        >
          <a
            href={el.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={el.name}
          >
            <div className="link absolute h-14 w-14 bg-blue-800 rounded-bl-2xl top-0 right-0 flex items-center justify-center z-50">
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
            className="h-45 w-full rounded-2xl mt-4 img"
            whileHover={{ scale: 0.92 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundImage: `url(${el.img})`,
              backgroundOrigin: "center",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></motion.div>

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

          <div className="flex bottom-0 absolute">
            {el.stack.map((stackItem, j) => (
              <p
                key={stackItem}
                className="bg-[#DA0037] font-bold m-4 mt-2 ml-0 pt-1 pb-1 pl-4 pr-4 border border-white rounded-2xl"
              >
                {stackItem}
              </p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const heroContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const heroLine = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <>
      <div className="flex h-full w-full items-center justify-around flex-col">
        <div className="absolute w-full overflow-hidden left-180 bottom-0 -rotate-90"></div>

        <div>
          <div className="center text-white flex justify-around items-center flex-col relative w-full h-full">
            <motion.div
              className="flex flex-col items-center justify-center"
              variants={heroContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.h2
                variants={heroLine}
                className="name text-[10vmin] text-center mt-2 leading-[10vmin] h-[20vmin] inline-block"
              >
                Hey,
                <br /> I&apos;m{" "}
                <span className="text-[#06D001]">
                  A<span className="text-[#DA0037]">man</span>jeet
                </span>
              </motion.h2>

              <motion.h3
                variants={heroLine}
                className=" text-[1.7vmax] relative flex flex-col text-center items-center justify-center w-[500px] pt-10 mb-5 mt-10 md:mt-2"
              >
                <p style={{background:"transparent"}} className="font-bold flex flex-wrap w-[90vw] md:block">
                  Full-Stack Developer | DevOps | Automation Specialist
                </p>
              </motion.h3>
            </motion.div>

            <motion.p
              variants={heroLine}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              className="para w-[80%] text-[1.5rem] h-min p-8 m-2 text-center"
            >
              🚀 A passionate full-stack developer with expertise in creating
              modern, responsive Full-Stack web application.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <NavLink to={"/projects"}>
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="mt-10 cursor-pointer z-0"
                >
                  View My Work
                </motion.button>
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <SkillsComp />
      <br />

      {/* Projects */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Top Projects
      </motion.h1>
      <TopProjects />
    </>
  );
}
