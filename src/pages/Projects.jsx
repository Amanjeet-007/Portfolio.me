import Navbar from "../component/Navbar"
export default function Projects() {
    return (
        <>
            <header className='w-[100%] flex justify-center  '>
                <Navbar />
            </header>
            <main className="px-[10%] py-[4%]">
                <div className="project w-[98%]">
                    <div className="card">
                        <p>MERN stack</p>
                    </div>
                    <div className="card">
                        <p>programming based</p>
                    </div>
                    <div className="card">
                        <p>AI</p> 
                    </div>
                    <div className="card">
                        <p>
                            Innovation
                        </p>
                    </div>
                     {/* <li className='mx-10 tracking-widest'>C</li>
                              <li className='mx-10 tracking-widest'>C++</li>
                              <li className='mx-10'>Java</li>
                              <li className='mx-10 tracking-widest'>Python</li>
                              <li className='mx-10 tracking-widest'>HTML & CSS</li>
                              <li className='mx-10 tracking-widest'>Tailwind</li>
                              <li className='mx-10 tracking-widest'>React</li>
                              <li className='mx-10 tracking-widest'>Node</li>
                              <li className='mx-10 tracking-widest'>MongoDB</li>
                              <li className='mx-10 tracking-widest'>Express</li> */}
                    {/* <table className="w-full" >
                        <caption><h1 className="text-[4rem] mb-10 ">Projects</h1></caption>
                       <tbody>
                        <tr className="p-[50px] align-middle">
                            <td className="w-1/2 p-[20px]"><img src="\AiCodeConverter.png" alt="Ai code Converter img" /></td>
                            <td className="p-[20px] ">              
                            </td>
                        </tr>
                       </tbody>
                        
                    </table> */}
                    
                </div>
            </main>
        </>
    )
}