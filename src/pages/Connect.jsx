import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Navbar from "../component/Navbar";
import { motion } from 'motion/react';

export default function Connect() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,        
        import.meta.env.VITE_TEMPLET_ID, 
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then((result) => {
      alert('Message sent successfully!');
      form.current.reset();
    }, (error) => {
      alert('Failed to send message: ' + error.text);
    });
  };

  return (
    <>
      <header className='w-[100%] flex justify-center'>
        <Navbar />
      </header>


      <main className="flex items-center justify-center h-full w-[90vh] m-[10vh]">
        <form ref={form} onSubmit={sendEmail} className="Form">
            <div className="w-[100%] h-8 flex bg-gray-600 rounded-[10px] items-center">
                <div className="h-5 w-5 bg-red-600 ml-4 rounded-full"></div>
                <div className="h-5 w-5 bg-yellow-500 ml-4 rounded-full"></div>
                <div className="h-5 w-5 bg-green-800 ml-3 rounded-full"></div>
            </div>
          <p>
            <label className='z-50'>Your Email: 
              <input type="email" name="user_email" required placeholder="Enter Your Email" />
            </label>
          </p>
        <p>
            <label htmlFor="name" name="name">
                Your Name: 
                <input type="text" required placeholder="Enter Your Name" />
            </label>
        </p>
          <p>
            <label>Your Message:
                <textarea name="message" id=""required placeholder="Enter Your Message" className='min-w-200px max-h-200px border-2 border-black' ></textarea> 
            </label>
          </p>

          <p>
            <button type="submit" className="p-5 border-1 border-black">Send</button>
          </p>
        </form>
        <div className="social h-[500px] w-40 absolute bottom-10 left-2 flex justify-center items-center">
          <div className="left flex flex-col">

            <a href="https://github.com/Amanjeet-007">
            <motion.img whileHover={{scale:1.2,y:-10}} src="https://img.icons8.com/?size=160&id=118557&format=png" alt="github" />
            </a>
            {/* linkedIn */}
            <a href="https://www.linkedin.com/in/amanjeet-kumar-374b0928a">
            <motion.img whileHover={{scale:1.2,y:-10}} src="https://img.icons8.com/?size=160&id=64154&format=png" alt="linkedin" />
            </a>  
            <a href=""><motion.img whileHover={{scale:1.2,y:-10}} src="https://img.icons8.com/?size=160&id=TSZw5VixabhS&format=png" alt="instagram" /></a>          
            <a href="https://wa.me/918882137478?text=Hello"><motion.img whileHover={{scale:1.2,y:-10}} src="https://img.icons8.com/?size=160&id=108636&format=png" alt="whatsapp"/></a>   
            <a href="https://t.me/Rikkysinghrajput"><motion.img whileHover={{scale:1.2,y:-10}} src="https://img.icons8.com/?size=160&id=112164&format=png" alt="telegram" /></a> 
            </div>
        </div>
      </main>
    </>
  );
}
