import { motion ,AnimatePresence } from 'motion/react'              // Animnation 
import { Link } from 'react-router'
import { ProjectList } from './Projects'
import { useEffect, useRef ,useState } from 'react'
import { useAnimation } from 'motion/react'
import '../App.css'

export default function Home() {
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

  // Skills list
  const tools = [
    {
      name: "Frontend",
      tool: [
        { name: "HTML", icon: "https://cdn-icons-png.flaticon.com/128/174/174854.png" },
        { name: "CSS", icon: "https://cdn-icons-png.flaticon.com/128/732/732190.png" },
        // { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png" },
        { name: "React", icon: "https://cdn-icons-png.flaticon.com/128/875/875209.png" },
        { name: "Next", icon: "https://www.svgrepo.com/show/354113/nextjs-icon.svg" },
        { name: "Motion", icon: "https://framerusercontent.com/assets/MadJ73ykiBPmXMK5j0iTVYDPACI.png" },
        { name: "Gsap", icon: "https://gsap.com/community/uploads/monthly_2020_03/tweenmax.png.cf27916e926fbb328ff214f66b4c8429.png" },
      ]
    },
    {
      name: "Backend",
      tool: [
        { name: "Node", icon: "https://www.svgrepo.com/show/354119/nodejs-icon.svg" },
        { name: "Json", icon: "https://cdn-icons-png.flaticon.com/512/136/136525.png" },
        { name: "Express", icon: "https://user-images.githubusercontent.com/11978772/40430986-a0eb7b92-5e63-11e8-80eb-43fe07f664a6.png" },
      ]
    },
    {
      name: "Database & Tools",
      tool: [
        { name: "MongoDb", icon: "https://www.svgrepo.com/show/331488/mongodb.svg" },
        { name: "Git", icon: "https://cdn-icons-png.flaticon.com/128/15466/15466163.png" },
        { name: "Postman", icon: "https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-svg-download-png-2945092.png" },
        { name: "Github", icon: "https://cdn-icons-png.flaticon.com/128/733/733553.png" },
        { name: "Docker", icon: "https://cdn-icons-png.flaticon.com/128/919/919853.png" },
        { name: "N8N", icon: "https://th.bing.com/th/id/OIP.9gBs36qI6HSRCL6DfoZvQQAAAA?w=176&h=180&c=7&r=0&o=7&dpr=1.9&pid=1.7&rm=3" }
      ]
    },
    {
      name: "Programming Languages",
      tool: [
        { name: "JavaScript", icon: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png" },
        { name: "Python", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
        { name: "C++", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png" },
      ]
    }
  ]

  return (

    <>
      <div className="  flex h-full w-full items-center justify-around flex-col ">
        <div className="">
          <div className="center text-white flex justify-around items-center flex-col relative w-full h-full ">
            <div className="flex flex-col items-center justify-center">
              <h2 className=' name text-[10vmin] text-center mt-2 leading-[10vmin] h-[20vmin] inline-block'>Hey,
                <motion.span className='hand '
                  initial={{ position: 'absolute' }}
                  whileHover={{ rotate: '15deg' }}
                  transition={{ duration: .3 }}>👋</motion.span>
                <br /> I'm <span className="text-[#06D001]">A<span className='text-[#DA0037]'>man</span>jeet</span>
              </h2>
              <h3 className='slogan text-[1.7vmax] relative flex flex-col text-center items-center justify-center w-[500px] pt-10 mb-5'><pre className='font-extrabold'> Full-Stack Devloper | React Expert | Node.js Specialist </pre></h3>

            </div>

            {/* <div className=" m-[20px] border-b-[1px] w-full border-amber-800 h-16 flex">
               &copy;
          </div> */}
            <p className='para w-[80%] text-[1.5rem] h-min p-8 m-2 text-center'>🚀 A passionate full-stack developer with expertise in creating modern, responsive Full-Stack web application.
            </p>
            <button className='mt-10 cursor-pointer z-0'>View My Work</button>
          </div>
        </div>
      </div>
      <div className="homesocial h-[18vh]  border-t-2 border-b-2 border-gray-500 flex w-full mt-[-5rem] items-center justify-around z-1 ">
        {
          [{
            icon: <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" fill="black"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>,
            link: "https://github.com/Amanjeet-007"
          }, {
            link: "https://www.linkedin.com/in/amanjeet-kumar-374b0928a/",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="30" height="30"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg>
          }, {
            link: "https://www.instagram.com/amanjeet_singh_007_/",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="30" height="30"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>
          }].map((el) => {
            return (
              <div className="py-2 px-5 bg-white rounded-full flex items-center justify-center cursor-pointer border-2 h-12 border-black">
                <a href={el.link} className='cursor-pointer '>
                  {el.icon}
                </a>
              </div>
            )
          })
        }
      </div>
      <div className="skills h-min w-min flex flex-col">
        {
          tools.map(el => {
            return (
              <div className="skillwrapper  h-min text-white ">
                <p className='text-3xl m-5 text-center'>{el.name}</p>
                <div className=" w-[100vw] pl-0 flex flex-wrap items-center justify-center ">
                  {el.tool.map((childEl, i) => {
                    return (
                      <motion.div
                        whileHover={{ scale: 1.2,duration:0.3 }}
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }} // while in view 
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        viewport={{ once: true }}
                        key={i}
                        className="card m-5 rounded-2xl flex items-center flex-col border-1 border-gray-600 "
                      >
                        <img src={childEl.icon} alt={childEl.name} className='h-20' />
                        <p className='m-2'>{childEl.name}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            )
          })
        }

      </div>
      <div className="projects h-min flex w-full justify-around flex-wrap">
        {ProjectList.map((el, i) => {
          if (el.rank == 1) {
            return (
              <div className="bg-cyan-950 p-4 card h-[450px] w-[350px] text-white rounded-2xl m-5 overflow-hidden cursor-pointer relative" key={i} onClick={(e) => toggleTimeline(e)}>
                {/* link */}
                <div className="link absolute h-14 w-14 bg-blue-800 rounded-bl-2xl top-0 right-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24" fill="white"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                </div>
                <img src="" className='h-58 w-full rounded-2xl' alt="" />
                <a href="#" className='absolute top-[50%] left-[50%] translate-x-[-50%] w-40 flex items-center justify-center h-10 bg-amber-600 rounded-xl text-white font-bold'>{"<>"} Source</a>
                <p className='text-2xl font-bold mt-6 mb-2'>{el.name}</p>
                <p className='text-[17px]'>{el.disc}</p>
              </div>

            )
          }

        })
        }
      </div>
      {/* <motion.div
          className="h-10 w-70 bg-green-500 fixed bottom-9 right-14 rounded-full flex items-center justify-center font-semibold text-white z-99"
          initial={{x:50,opacity:0}}
          animate={controls}
          transition={{ duration: 1.5 , delay:10 , ease:easeInOut }}
          ref={notice}
        >
          Ask anything about me
        </motion.div> */}
      {/* <div className="blogs h-[100vh]">

      </div> */}
    </>

  )
}