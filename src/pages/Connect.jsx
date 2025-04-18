import { useRef } from 'react';
import emailjs from 'emailjs-com';
import Navbar from "../component/Navbar";

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

      <main className="flex items-center justify-center h-full w-full p-80">
        <form ref={form} onSubmit={sendEmail} className="Form mt-80">
            <div className="w-[100%] h-5 flex bg-gray-600 rounded-[10px] items-center">
                <div className="h-5 w-5 bg-red-600 ml-3 rounded-full"></div>
                <div className="h-5 w-5 bg-yellow-500 ml-3 rounded-full"></div>
                <div className="h-5 w-5 bg-green-800 ml-3 rounded-full"></div>
            </div>
          <p>
            <label>Your Email: 
              <input type="email" name="user_email" required placeholder="Enter Your Email" />
            </label>
          </p>
        <p>
            <label htmlFor="name" name="name" >
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
     
      </main>
    </>
  );
}
