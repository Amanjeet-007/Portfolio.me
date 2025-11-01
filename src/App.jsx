import Navbar from './component/Navbar'             // Navbar
import './App.css'                                  // Stylesheet
import Home from './pages/Home'
import { useRef } from 'react'
import { motion } from 'motion/react'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const notice = useRef(null)

  setTimeout(()=>{
    notice.current.style.opacity = 0
  },9000)

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <main >
        <Navbar />
        <Home />
        <motion.div
          className="h-10 w-70 bg-green-500 fixed bottom-9 right-14 rounded-full flex items-center justify-center font-semibold text-white z-99"
          initial={{x:50,opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{ duration: 1 , delay:5 }}
          ref={notice}
        >
          Ask anything about me
        </motion.div>
      </main>
    </>
  )
}

export default App
