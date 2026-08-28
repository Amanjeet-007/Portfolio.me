/* eslint-disable react/no-unescaped-entities */
import { motion } from "motion/react";
import { Link } from "react-router";
const socialLinks = [
  {
    link: "https://github.com/Amanjeet-007",
    label: "GitHub",
    bg: "#181717",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="26"
        height="26"
        fill="white"
      >
        <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
      </svg>
    ),
  },
  {
    link: "https://www.linkedin.com/in/amanjeet-kumar-374b0928a/",
    label: "LinkedIn",
    bg: "#0A66C2",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
        <g fill="white">
          <rect x="3.8" y="9.2" width="3.9" height="11" />
          <circle cx="5.75" cy="5" r="2.3" />
          <path d="M10.8 9.2h3.7v1.7c.5-1 1.9-1.9 3.8-1.9 4 0 4.7 2.6 4.7 6v5.2h-3.9v-5c0-1.2-.1-2.7-1.7-2.7-1.7 0-1.9 1.3-1.9 2.6v5.1h-3.9V9.2z" />
        </g>
      </svg>
    ),
  },
  {
    link: "https://www.instagram.com/amanjeet_singh_007_/",
    label: "Instagram",
    bg: "linear-gradient(45deg, #515BD4, #8134AF, #DD2A7B, #F58529, #FEDA77)",
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" stroke="white" strokeWidth="1.5">
          <rect x="5" y="5" width="14" height="14" rx="4" />
          <circle cx="12" cy="12" r="3" />
        </g>
        <circle cx="16.5" cy="7.5" r="0.75" fill="white" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-[#0a0f1f] to-[#0f2141] text-white py-16 px-8 ">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }} // while in view
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center md:text-start"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">About Me</h3>
          <p className="text-base text-gray-200 leading-relaxed">
            I'm <span className="text-blue-300 font-medium">Amanjeet</span>, a full-stack developer
            who loves building sleek digital products that blend creativity with functionality.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center md:text-start"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-lg">
            <Link to={"/projects"}>
              <li className="hover:text-blue-300 transition"> Projects</li>
            </Link>
            <Link to={"/blogs"}>
              <li className="hover:text-blue-300 transition">Blogs</li>
            </Link>
            <Link to={"/connect"}>
              <li className="hover:text-blue-300 transition"> Contact</li>
            </Link>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
           className="text-center md:text-start"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Contact</h3>
          <p className="text-base text-gray-200">📍 Noida, India</p>
          <p className="text-base">
            📧{" "}
            <a
              href="mailto:kumaramanjeet951@gmail.com"
              className="text-blue-300 hover:underline"
            >
              kumaramanjeet951@gmail.com
            </a>
          </p>
        </motion.div>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center md:text-start"
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Social</h3>
          <div className=" flex w-full items-center justify-center gap-5 z-1 relative">
            {socialLinks.map((el) => (
              <motion.a
                href={el.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={el.label}
                key={el.label}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="py-2 px-5 rounded-full flex items-center justify-center cursor-pointer border-2 h-12 border-black"
                style={{ background: el.bg }}
              >
                {el.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        className="text-center text-gray-400 text-sm mt-12 border-t border-blue-800 pt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        © 2025 Amanjeet | Built with ❤️ using React + Animation
      </motion.div>
    </footer>
  );
}
