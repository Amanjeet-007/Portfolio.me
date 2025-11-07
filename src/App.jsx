import Navbar from './component/Navbar'             // Navbar
import './App.css'                                  // Stylesheet
import Home from './pages/Home'
import { useEffect, useRef } from 'react'
import { motion ,useAnimation } from 'motion/react'
import LocomotiveScroll from 'locomotive-scroll';
import { easeInOut } from 'motion'

function App() {
  const notice = useRef(null)
  const controls = useAnimation()

  useEffect(()=>{
      setTimeout(()=>{
  notice.current.style.opacity = 0
  },9000)
    async function runAfterAnother() {
        await controls.start({x:0,opacity:1 ,transition: { duration: 0.8 ,delay:5 },})
        await controls.start({x:10,opacity:0,transition: { duration: 0.8 ,delay:15 },})
    }
    runAfterAnother()
  },[])



  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <main data-scroll-container>
        <Navbar />
        <Home />
        <motion.div
          className="h-10 w-70 bg-green-500 fixed bottom-9 right-14 rounded-full flex items-center justify-center font-semibold text-white z-99"
          initial={{x:50,opacity:0}}
          animate={controls}
          // transition={{ duration: 1.5 , delay:10 , ease:easeInOut }}
          ref={notice}
        >
          Ask anything about me
        </motion.div>
      </main>
    </>
  )
}

export default App
