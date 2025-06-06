import Navbar from './component/Navbar'             // Navbar
import './App.css'                                  // Stylesheet
import { motion } from 'motion/react'              // Animnation 
import {useRef , useEffect , useState} from 'react'




function App() {

  const hover = useRef()

  console.log(hover)
  

  function Span(){
    let All = []
    const BinaryText = [
      [0,1,1,0,1,0,0,1],
      [0,0,1,0,0,1,1,1],
      [0,1,1,0,1,1,0,1],
      [0,0,1,0,0,0,0,0],
      [0,1,1,1,0,1,0,0],
      [0,1,1,0,1,0,0,0],      //I'm The best
      [0,1,1,0,0,1,0,1],
      [0,0,1,0,0,0,0,0],
      [0,1,1,0,0,0,1,0],
      [0,1,1,0,0,1,0,1],
      [0,1,1,1,0,0,1,1],
      [0,1,1,1,0,1,0,0] ]
    for(let i = 0 ; i < 364;i++){
        All.push(<motion.span key={i}>
        </motion.span>)
    }
    return All
}
  return (
    <>
      <Navbar />
      <main>
        <div className="top flex w-full h-[100vh]">
          <div className="backGround">
           <Span/>
          </div>
          <div className="left w-1/3 h-[80vh] flex items-center justify-center">
            <motion.div className="card"
            whileHover={{scaleX:1.05,scaleZ:1.1,scaleY:1.1}}
            >
              <img src="https://img.icons8.com/?size=160&id=EvfjU4d05f0I&format=png" className='h-28' alt="" />
              <p>Amanjeet Kumar</p>
              <a href="https://drive.google.com/file/d/1LTA155Rd2tWSzZll4qX9LIuaFWZPqY6j/view" target='blank'>
              <button>Resume</button>
              </a>
            </motion.div>
          </div>
          <div className="center text-white  flex items-center justify-center flex-col relative" ref={hover}>
            <h2>Hey, <motion.span className='hand'  initial={{position:'absolute',opacity:0}} whileHover={{rotate:'10deg',opacity:1}} transition={{duration:.3}}>👋</motion.span> <br /> I'm <span className="text-[#06D001]">A<span className='text-[#DA0037]'>man</span>jeet kumar</span></h2>
            <h3><pre className='font-extrabold'> FullStack Devloper|AI Learner </pre></h3>
            <p>🚀 I’m Amanjeet, a self-taught full-stack developer
skilled in React, Node.js, MongoDB, and Express. Currently learning C, DSA, and Artificial Intelligence
| to build powerful tools and contribute to impactful. open-source and SaaS projects. </p>
          </div>
          <div className="right text-amber-50 w-1/3 flex items-center flex-col justify-center">
          
        <div className="skills flex flex-wrap w-[100%] justify-around h-min">
        <p> {"#"} Technical expertise</p>
            <motion.div whileHover={{scale:1.2}} className="tech"><img src="https://cdn-icons-png.flaticon.com/128/541/541509.png" alt="js" />JavaScript </motion.div>
            <motion.div className="tech" whileHover={{scale:1.2}}> <img src="https://cdn-icons-png.flaticon.com/128/3098/3098090.png" alt="py" />Python</motion.div>
            <motion.div className="tech" whileHover={{scale:1.2}}> <img src="https://cdn-icons-png.flaticon.com/128/5098/5098279.png" alt="" />C++</motion.div>
            <motion.div className="tech" whileHover={{scale:1.2}}> <img src="https://cdn-icons-png.flaticon.com/128/174/174854.png" alt="" /> HTML & <img src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="" /> CSS</motion.div>
            <motion.div className="tech" whileHover={{scale:1.2}}> <img src="https://cdn-icons-png.flaticon.com/128/3334/3334886.png" alt="" /> React</motion.div> 
            <motion.div className="tech" whilever={{scale:1.2}}> <img src="https://img.icons8.com/?size=96&id=x7XMNGh2vdqA&format=png" alt="" />Tailwind</motion.div>
            <motion.div className="tech" whileHover={{scale:1.2}}> <img src="https://cdn-icons-png.flaticon.com/128/919/919825.png" alt="" />NodeJs</motion.div>
            <motion.div className="tech" whileHover={{scale:1.2}}> <img src="https://netforemost.com/wp-content/uploads/2024/08/1646733543-1.webp" alt="" />ExpressJs</motion.div>
            <motion.div className="tech" whileHover={{scale:1.2}}> <img src="https://cdn-icons-png.flaticon.com/128/9672/9672250.png" alt="" />MongoDb</motion.div>
            <motion.div className="tech" whileHover={{scale:1.2}}> <img src="https://cdn-icons-png.flaticon.com/128/1161/1161388.png" alt="" />JsonWebToken</motion.div>
            <motion.div className="tech" whileHover={{scale:1.2}}> <img src="https://cdn-icons-png.flaticon.com/128/4494/4494748.png" alt="" /> Git & <img src="https://cdn-icons-png.flaticon.com/128/10090/10090320.png" alt="" /> Github</motion.div>
            <motion.div className="tech" whileHover={{scale:1.2}}> <img src="https://cdn.iconscout.com/icon/free/png-256/free-redux-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-10-pack-icons-283024.png?f=webp&w=256" alt="" />Redux</motion.div>
            <motion.div className="tech" whileHover={{scale:1.2}}> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.0379 0.13033C14.8991 -0.272747 11.7113 0.264019 8.87752 1.67275C6.04379 3.08148 3.69144 5.29889 2.11796 8.04457C0.544486 10.7903 -0.179442 13.9409 0.0377277 17.098C0.254897 20.2551 1.40341 23.277 3.33802 25.7813C5.27263 28.2857 7.90645 30.1601 10.9064 31.1676C13.9063 32.175 17.1376 32.2702 20.1917 31.4412C23.2457 30.6121 25.9854 28.896 28.0641 26.5099C30.1428 24.1237 31.4672 21.1748 31.8699 18.0359C32.4098 13.8273 31.2559 9.57657 28.6619 6.21869C26.068 2.8608 22.2465 0.670781 18.0379 0.13033Z" fill="#FF6C37"></path><path d="M11.5674 17.0111C11.5736 17.0238 11.5841 17.0339 11.5969 17.0397C11.6097 17.0456 11.6242 17.0468 11.6378 17.0431L14.1978 16.4911L13.121 15.3999L11.5866 16.9343C11.5745 16.9425 11.5659 16.9548 11.5623 16.969C11.5588 16.9832 11.5606 16.9982 11.5674 17.0111Z" fill="white"></path><path d="M23.5548 6.0193C23.198 6.01966 22.8459 6.10004 22.5243 6.25451C22.2027 6.40898 21.9199 6.63361 21.6966 6.91187C21.4733 7.19012 21.3153 7.51491 21.2342 7.86232C21.153 8.20973 21.1508 8.57091 21.2277 8.91928C21.3047 9.26765 21.4588 9.59433 21.6786 9.87527C21.8985 10.1562 22.1786 10.3842 22.4983 10.5426C22.818 10.701 23.1691 10.7856 23.5259 10.7903C23.8826 10.795 24.2358 10.7196 24.5596 10.5697L22.9372 8.9473C22.9186 8.92872 22.9038 8.90665 22.8937 8.88235C22.8836 8.85805 22.8784 8.83201 22.8784 8.8057C22.8784 8.77939 22.8836 8.75334 22.8937 8.72904C22.9038 8.70475 22.9186 8.68268 22.9372 8.6641L25.0572 6.5457C24.6314 6.20338 24.1011 6.01756 23.5548 6.0193Z" fill="white"></path><path d="M25.3483 6.8208L23.3611 8.8L24.9195 10.3584C25.0343 10.2778 25.1414 10.1867 25.2395 10.0864C25.6666 9.6564 25.9152 9.08072 25.9354 8.47497C25.9556 7.86923 25.7458 7.27828 25.3483 6.8208Z" fill="white"></path><path d="M21.3722 10.4737H21.337C21.2957 10.4733 21.2544 10.4771 21.2138 10.4849H21.1994C21.1548 10.4945 21.111 10.5073 21.0682 10.5233L21.0346 10.5393C21.0024 10.5527 20.9714 10.5687 20.9418 10.5873L20.9066 10.6097C20.8679 10.6364 20.8315 10.6664 20.7978 10.6993L14.905 16.5936L15.6346 17.3232L21.8746 11.8465C21.9099 11.8155 21.942 11.7812 21.9706 11.7441L21.9978 11.7089C22.0191 11.6776 22.0384 11.645 22.0554 11.6113C22.065 11.5921 22.073 11.5729 22.081 11.5537C22.0918 11.5281 22.1009 11.5019 22.1082 11.4753C22.1082 11.4561 22.1194 11.4369 22.1242 11.4177C22.1321 11.378 22.1375 11.338 22.1402 11.2977V11.2449C22.1402 11.2161 22.1402 11.1873 22.1402 11.1585C22.1402 11.1297 22.1402 11.1201 22.1322 11.1009C22.1026 10.9499 22.0289 10.811 21.9204 10.7019C21.8119 10.5929 21.6735 10.5184 21.5226 10.4881H21.4922C21.4526 10.4804 21.4125 10.4756 21.3722 10.4737Z" fill="white"></path><path d="M13.3962 15.1168L14.6058 16.32L20.5146 10.4112C20.7069 10.2232 20.9575 10.1064 21.225 10.08C20.1802 9.28 19.041 9.4896 13.3962 15.1168Z" fill="white"></path><path d="M22.2075 12.0769L22.1355 12.1473L15.8955 17.6225L16.9563 18.6817C19.5867 16.1937 21.9211 13.8241 22.2075 12.0769Z" fill="white"></path><path d="M6.64277 24.9039C6.64601 24.9153 6.65267 24.9253 6.66182 24.9328C6.67098 24.9402 6.6822 24.9447 6.69397 24.9455L9.41396 25.1327L7.88917 23.6079L6.65557 24.8399C6.64757 24.8483 6.64212 24.8587 6.63985 24.87C6.63759 24.8814 6.6386 24.8931 6.64277 24.9039Z" fill="white"></path><path d="M8.17383 23.3247L9.78182 24.9327C9.80091 24.9531 9.82645 24.9663 9.85413 24.9701C9.88181 24.9739 9.90996 24.968 9.93382 24.9535C9.95875 24.9411 9.97861 24.9205 9.98999 24.8951C10.0014 24.8697 10.0036 24.8411 9.99622 24.8143L9.72582 23.6591C9.70831 23.5842 9.71627 23.5056 9.74844 23.4358C9.7806 23.366 9.83514 23.3089 9.90342 23.2735C12.7226 21.8607 14.9962 20.4063 16.665 18.9535L15.545 17.8335L13.145 18.3503L8.17383 23.3247Z" fill="white"></path><path d="M15.2012 17.4944L14.5996 16.8928L13.7676 17.7232C13.7616 17.7304 13.7583 17.7395 13.7583 17.7488C13.7583 17.7582 13.7616 17.7672 13.7676 17.7744C13.7714 17.7829 13.7783 17.7898 13.7868 17.7936C13.7954 17.7974 13.805 17.798 13.814 17.7952L15.2012 17.4944Z" fill="white"></path><path d="M25.4043 8.11051C25.3961 8.08533 25.3826 8.0622 25.3647 8.04267C25.3469 8.02314 25.325 8.00766 25.3006 7.99728C25.2763 7.9869 25.25 7.98185 25.2235 7.98247C25.197 7.9831 25.171 7.98938 25.1471 8.0009C25.1233 8.01242 25.1022 8.02891 25.0852 8.04926C25.0683 8.06962 25.0559 8.09336 25.0489 8.1189C25.0419 8.14444 25.0404 8.17118 25.0446 8.19733C25.0488 8.22348 25.0585 8.24844 25.0731 8.27051C25.1209 8.36674 25.1399 8.47474 25.1277 8.58148C25.1155 8.68823 25.0726 8.78917 25.0043 8.87211C24.9819 8.89921 24.9676 8.93213 24.9632 8.96703C24.9587 9.00193 24.9643 9.03738 24.9792 9.06924C24.9941 9.10111 25.0178 9.12807 25.0475 9.14699C25.0771 9.16591 25.1116 9.17601 25.1467 9.17611C25.1739 9.17582 25.2007 9.16967 25.2253 9.15807C25.2499 9.14647 25.2716 9.1297 25.2891 9.10891C25.4024 8.97122 25.4735 8.80379 25.4939 8.62669C25.5143 8.4496 25.4832 8.27037 25.4043 8.11051Z" fill="#FF6C37"></path></svg> Postman</motion.div>
          </div>
          </div>
        </div>
        {/* <div className="project">
            
        </div> */}
      </main>
    </>
  )
}

export default App
