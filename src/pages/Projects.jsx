import { useState } from "react"; // useState is still needed if you use other local states, but not for the hover state managed by Framer Motion here.
import Navbar from "../component/Navbar";
import { motion } from "framer-motion"; // Correct import

export default function Projects() {
  const Type = ["MERN Stack", "Programming Based", "Data Science", "AI Powered"];
  // const [hover, setHover] = useState(false); // Not needed for this animation approach

  const parentVariants = {
    initial: {}, // Define an initial state for the parent
    hovered: {
      scale: 1.05, // Slightly increased scale on hover for the card itself
    },
  };

  // Define variants for the individual stack letters
  const stackLetterVariants = {
    initial: {
      rotateX: 70, // Use numbers for degrees
      y: -20, // Add a slight initial y offset
      margin:0
      
    },
    hovered: {
      rotateX: 0,
      y: 0,
      margin:5,
      transition: {
        duration: 0.4, // Animation duration
        ease: "easeOut" // Easing function
      }
    },
  };

  // Optional: Add staggering to the child animations
  const containerVariants = {
      initial: {},
      hovered: {
          transition: {
              staggerChildren: 0.1, // Delay between each child's animation
              delayChildren: 0.2 // Delay before the first child starts animating
          }
      }
  };


  return (
    <>
      <header className="w-[100%] h-min flex justify-center">
        <Navbar />
      </header>
      <main className="w-[80vw] flex flex-wrap justify-center">
        <div className="project w-[30%] h-full flex-wrap">
          {Type.map((el) => {
            return (
              <motion.div
                variants={parentVariants}
                initial="initial" // Set the initial state for the parent
                whileHover="hovered" // Trigger the "hovered" variant on hover
                className="card justify-around"
                key={el}
              >
                <p>
                  {el}</p>
                  {el === "MERN Stack" ? (
                    <motion.div // This div acts as a container for the stack letters
                        variants={containerVariants} // Apply container variants for staggering
                      className="items-center flex flex-col w-full"
                    >
                      {/* Apply stackLetterVariants to each letter */}
                      <motion.div variants={stackLetterVariants} className="stack" style={{borderColor:"#1aad57"}}>M</motion.div>
                      <motion.div variants={stackLetterVariants} className="stack" style={{borderColor:"#404040"}}>E</motion.div>
                      <motion.div variants={stackLetterVariants} className="stack" style={{borderColor:"#37c0e6"}}>R</motion.div>
                      <motion.div variants={stackLetterVariants} className="stack" style={{borderColor:"#7eba4c"}}>N</motion.div>
                    </motion.div>
                  ) : (
                    ""
                  )}
                
              </motion.div>
            );
          })}
        </div>
      </main>
    </>
  );
}