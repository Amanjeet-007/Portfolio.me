import Navbar from "../component/Navbar"
export default function Connect(){
    
    return(
        <>
        <header className='w-[100%] flex justify-center  '>
                <Navbar />
              </header>
              <canvas id="can" className="border-2 bg-amber-600 -z-99 ">
                         
              </canvas>
        Contact
        </>
    )
}