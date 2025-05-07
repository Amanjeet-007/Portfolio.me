import { motion ,AnimatePresence } from 'motion/react'
import { useState } from 'react'
import { NavLink } from 'react-router'
export default function Navbar() {
    const [isClick,setIsClick] = useState(false);
    const options = ["Home","Projects","About","Blogs",]

    return (
        <>
        <nav className="w-full h-min flex items-center justify-between">
           

            <pre className='logo'>{'< Code />'}</pre>
            <div className="menu md:none w-min h-full">
                <ul className='flex'>
                    {options.map(el=>{
                        console.log(el.toLowerCase())
                        return(
                            <NavLink to={`/${el.toLowerCase()}`} key={el}>  <motion.li>{el}</motion.li> </NavLink>
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