import {motion }from 'motion/react'
import { useState } from 'react'
import { Link ,useNavigate } from 'react-router'

export default function Welcome(){

    const [button,setButton] = useState("PORTFOLIO")
    const navigate = useNavigate()
    function handleLink(e){
        e.preventDefault 
        setTimeout(() => {
            setButton("")
            navigate("/home");
          }, 500);
    }
    function handleHover(){
        setButton("Enter")
    }
    function handleHoverEnd(){
        setButton("PORTFOLIO")
    }


    return (
        <>
        <div className="welcome h-[90vh] w-full flex items-center justify-center flex-col">
            <div className="flex items-center justify-center">
        {/* <marquee behavior="" direction="right" scrollamount="2" className="absolute w-20 h-4 flex items-center justify-center top-1/6 bg-black text-green-700">click
        </marquee> */}

            <motion.img className='rotate-180' src="https://cdn-icons-png.flaticon.com/128/7500/7500143.png" 
                alt="starting"
                initial={{marginRight:20,opacity:0}}
                animate={{marginRight:0,opacity:1}}
                transition={{delay:.3}}/>
            
            <Link onClick={handleLink}>
            <motion.button 
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1,transition: { duration: .5 }}}
            whileHover={{scaleX:1.3,scaleY:1.2, scaleZ:1.1}}
            onHoverStart={handleHover}
            onHoverEnd={handleHoverEnd}
            className='cursor-pointer w-[200px]'
            
            >{button}</motion.button>
            </Link>
            <motion.img src="https://cdn-icons-png.flaticon.com/128/7500/7500143.png" alt="ending"
            
            initial={{marginLeft:30,opacity:0}}
            animate={{marginLeft:0,opacity:1}}
            transition={{delay:.3}}
             />
            </div>
            <Link to="/home">
            <img src="https://www.svgrepo.com/show/499775/play.svg" className='play h-40 hidden ' alt="" />
            </Link>
                


        </div>
        </>
    )
}