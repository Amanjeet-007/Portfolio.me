import { motion ,AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { NavLink } from 'react-router'
export default function Navbar() {
    const [isClick,setIsClick] = useState(false);
    const options = ["Home","Projects","Blogs","Connect"] //"About",

    return (
        <>
        <nav className="w-full h-min flex items-center justify-between">
           

            <pre className='logo'>{'< Code />'}</pre>
            <div className="menu md:none w-min h-full">
                <ul className='flex'>
                    {options.map(el=>{
                        return(
                            <NavLink to={`/${el.toLowerCase()}`} key={el}>  <motion.li
                            whileHover={{scaleX:1.1,scaleY:1.2,scaleZ:1.1,color:'white'}}
                            >{el}</motion.li> </NavLink>
                        )
                    })}
                </ul>
               
            </div>
            <AnimatePresence>
            <motion.div className="menu-button"
            onClick={()=>setIsClick(el=>!el)}
            animate={isClick?{rotate:360}:{rotate:0}}
            whileHover={{scale:1.1}}
            >
                <div className="curcle">
                    <motion.span className='bg-emerald-600  w-20 h-20' transition={{duration:.1}} animate={isClick?{opacity:1,scale:1}:{opacity:0,scale:0}}>
                        <button className="theme">Chnage</button>
                    </motion.span>
                </div>
                <motion.div className="MobileList absolute top-[70px] -right-3"
                initial={{opacity:0}}
                animate={isClick?{opacity:1,scale:1}:{opacity:0,scale:0}}
                >
                    <NavLink to={"/home"}>
                    <div className="icons">
                        <img src="https://cdn-icons-png.flaticon.com/128/10349/10349274.png" alt="home" />
                    </div>
                        </NavLink>
                    <NavLink to={"/projects"}>
                    <div className="icons"><img src="https://cdn-icons-png.flaticon.com/128/16291/16291033.png" alt="project" /></div>
                    </NavLink>
                    <NavLink to={"/blogs"}>
                    <div className="icons"><img src="https://cdn-icons-png.flaticon.com/128/3959/3959425.png" alt="Blog" /></div>
                    </NavLink>
                    <NavLink to={'/connect'}>
                    <div className="icons"><img src="https://cdn-icons-png.flaticon.com/128/9333/9333996.png" alt="Connect" /></div>
                    </NavLink>
                    {/* <NavLink to={'/about'}>
                    <div className="icons"><img src="https://cdn-icons-png.flaticon.com/128/1/1176.png" alt="About" /></div>
                    </NavLink> */}

                </motion.div>
                <motion.div className="box"  animate={isClick?{scale:0,opacity:0}:{scale:1,opacity:1}} ></motion.div>
                <motion.div className="box" animate={isClick?{scale:0,opacity:0}:{backgroundColor:"white"}}></motion.div>
                <motion.div className="box" animate={isClick?{scale:0,opacity:0}:{scale:1,opacity:1}}></motion.div>
                <motion.div className="box flex items-center justify-center text-white text-xl font-bold" animate={isClick?{backgroundColor:"#DA0037",height:"25px",width:"25px"}:{backgroundColor:"white"}} whileHover={isClick?{scale:1.1}:""}>
                   {isClick?"X":""}
                </motion.div>
            </motion.div>
            </AnimatePresence>
        </nav>
         {/* <div className="option absolute top-[80px] bg-red-600 h-min w-min right-20">
         hiui
             </div> */}
            </>
    )
}