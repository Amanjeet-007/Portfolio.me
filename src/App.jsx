
import Navbar from './component/Navbar'
import './App.css'
// import Spline from '@splinetool/react-spline';


function App() {
  return (
    <>
      <marquee behavior="" direction="left" className="text-white absolute top-0.5">
        <ul className='flex'>
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
          <li className='mx-10 tracking-widest'>  Hello World || Currently : learning Ecommerce & React Native because mobile Devlopmentreally fasinating me 😁. Planing AI & ML after deep understanding of py. </li>
        </ul>
      </marquee>
      <header className='w-[100%] flex justify-center  '>
        <Navbar />
      </header>
      <div className="flex justify-center items-center ">

         {/* <Spline scene="https://prod.spline.design/StmSkSoIRuIdfbyg/scene.splinecode" className='flex h-screen w-screen -z-10 absolute top-0 left-0 justify-center items-center h-10 ' 
         onSplineMouseHover={(e)=>{

         }} /> */}
      </div>
       

      


    </>
  )
}

export default App
