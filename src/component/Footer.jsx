import { motion } from "motion/react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">About Me</h3>
          <p className="text-base text-gray-200 leading-relaxed">
            I'm <span className="text-blue-300 font-medium">Amanjeet</span>, a full-stack developer
            who loves building sleek digital products that blend creativity with functionality.
          </p>
        </motion.div> */}

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            <li><a href="#projects" className="hover:text-blue-300 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-300 transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-300 transition">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Contact</h3>
          <p className="text-base text-gray-200">📍 Patna, India</p>
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
        >
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">Social</h3>
          <div className="flex space-x-5 text-3xl">
            <a href="https://github.com/Amanjeet-007" target="blank" className="hover:text-blue-300 transition"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/amanjeet-kumar-374b0928a/" className="hover:text-blue-300 transition" target="blank"><FaLinkedin /></a>
            <a href="#" className="hover:text-blue-300 transition" target="blank"><FaTwitter /></a>
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
  )
}