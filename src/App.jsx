
import Navbar from './component/Navbar'
import './App.css'

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



    </>
  )
}

export default App
