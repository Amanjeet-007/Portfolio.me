import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Navbar from "../component/Navbar";
import { motion } from 'framer-motion'; // Correct import for Framer Motion

export default function Connect() {
  const form = useRef();
  const [message, setMessage] = useState(null); // State to manage messages

  const sendEmail = (e) => {
    e.preventDefault();
    setMessage(null); // Clear previous messages

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLET_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then((result) => {
        setMessage('Message sent successfully!'); // Set success message
        form.current.reset(); // Reset the form
      }, (error) => {
        setMessage('Failed to send message: ' + error.text); // Set error message
      });
  };

  const social = [
    {
      name:"Email",
      link:"mailto:kumaramanjeet951@gmail.com",
      img:<svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 41 41"><g fill="none" stroke-miterlimit="10"><path fill="#ffe236" stroke="#231f20" d="M36 33.59c3-1.36 3.53-8.34 3.53-13.59S38.94 7.77 36 6.41c-1.48-1.36-9.4-1.73-16-1.73S5.52 5.05 4 6.41C1.06 7.77.5 14.75.5 20S1.06 32.23 4 33.59c1.49 1.36 9.41 1.73 16 1.73s14.49-.32 16-1.73Z"/><path stroke="#231f20" stroke-linecap="round" d="M4.67 13c3.65 3.81 8.94 7.93 10.57 8.64a10.81 10.81 0 0 0 9.52 0c1.62-.64 6.91-4.79 10.56-8.64m-20.89 8.39l-6.96 6.97m18.1-6.97l6.97 6.97"/><path stroke="#fff" stroke-linecap="round" d="M29.05 7.53a15.4 15.4 0 0 1 5.27.92"/></g></svg>
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/amanjeet-kumar-374b0928a",
      img: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60"/><rect width="256" height="256" fill="#0A66C2" rx="60"/><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"/></g></svg>,
    },
    {
      name: "Instagram",
      link: "#",
      img: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"/><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"/><path fill="#ffffff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z"/><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5"/><stop offset=".1" stop-color="#FD5"/><stop offset=".5" stop-color="#FF543E"/><stop offset="1" stop-color="#C837AB"/></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771C8"/><stop offset=".128" stop-color="#3771C8"/><stop offset="1" stop-color="#60F" stop-opacity="0"/></radialGradient></defs></g></svg>
    },
    {
      name: "Whats App",
      link: "https://wa.me/918882137478?text=Hello",
      img: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1FAF38"/><stop offset="100%" stop-color="#60D669"/></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#F9F9F9"/><stop offset="100%" stop-color="#FFF"/></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416Zm40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513l10.706-39.082Z"/><path fill="#ffffff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg>
    },
    {
      name: "Telegram",
      link: "https://t.me/Rikkysinghrajput",
      img: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 256 256"><defs><linearGradient id="logosTelegram0" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#2AABEE"/><stop offset="100%" stop-color="#229ED9"/></linearGradient></defs><path fill="url(#logosTelegram0)" d="M128 0C94.06 0 61.48 13.494 37.5 37.49A128.038 128.038 0 0 0 0 128c0 33.934 13.5 66.514 37.5 90.51C61.48 242.506 94.06 256 128 256s66.52-13.494 90.5-37.49c24-23.996 37.5-56.576 37.5-90.51c0-33.934-13.5-66.514-37.5-90.51C194.52 13.494 161.94 0 128 0Z"/><path fill="#ffffff" d="M57.94 126.648c37.32-16.256 62.2-26.974 74.64-32.152c35.56-14.786 42.94-17.354 47.76-17.441c1.06-.017 3.42.245 4.96 1.49c1.28 1.05 1.64 2.47 1.82 3.467c.16.996.38 3.266.2 5.038c-1.92 20.24-10.26 69.356-14.5 92.026c-1.78 9.592-5.32 12.808-8.74 13.122c-7.44.684-13.08-4.912-20.28-9.63c-11.26-7.386-17.62-11.982-28.56-19.188c-12.64-8.328-4.44-12.906 2.76-20.386c1.88-1.958 34.64-31.748 35.26-34.45c.08-.338.16-1.598-.6-2.262c-.74-.666-1.84-.438-2.64-.258c-1.14.256-19.12 12.152-54 35.686c-5.1 3.508-9.72 5.218-13.88 5.128c-4.56-.098-13.36-2.584-19.9-4.708c-8-2.606-14.38-3.984-13.82-8.41c.28-2.304 3.46-4.662 9.52-7.072Z"/></svg>
    }
  ]

  return (
    <>
      {/* Header with Navbar */}
      <header className='w-full flex justify-center'>
        <Navbar />
      </header>

      {/* Main content area */}
      <main >
        <div className="flex connect mt-15 flex-col  w-full text-white h-full  md:flex-row items-center text-center justify-around">

          <div className="left w-1/2 h-full flex items-center justify-center">
            <form ref={form} onSubmit={sendEmail} className="Form text-gray-200 mt-4 space-y-6 flex items-center justify-center flex-col">
              <h2 className='text-3xl font-extrabold'>Let's Build Foundation</h2>
              {/* Name Input */}
              <div>
                <label htmlFor="name" className='block text-2xl font-medium  mb-1 text-start'>
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" // Added name attribute for EmailJS
                  required
                  placeholder="Enter Your Name"
                  className="text-xl px-3 py-2 w-80 border-1 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500  "
                />
              </div>

              {/* Email Input */}

              <div>
                <label htmlFor="user_email" className='block text-2xl font-medium  mb-1 text-start'>
                  Your Email:
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  placeholder="Enter Your Email"
                  className=" text-xl w-100 border-1 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 "
                />
              </div>



              {/* Message Textarea */}
              <div >
                <label htmlFor="message" className='block text-2xl font-medium mb-1 text-start'>
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Enter Your Message"
                  rows="4" // Set initial rows
                  className='text-xl w-100 border-1 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-y' // Allow vertical resize
                ></textarea>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="send flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>

              {/* Message Display */}
              {message && (
                <div className={`mt-4 p-3 rounded-md text-center text-sm ${message.includes('successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                  {message}
                </div>
              )}

            </form>
            {/* <div className="terminal w-full max-w-md rounded-lg shadow-xl">

              <div className="w-full h-8 flex rounded-t-lg items-center justify-center px-4">
                <span className="ml-4 text-sm text-gray-300 font-bold">Send a Message</span>
              </div>

             
            </div> */}
          </div>
          <div className="right w-1/2 h-full">
            <div className="social flex flex-col items-center  space-y-6 md:space-y-8">
              <div className="flex flex-row flex-wrap w-[400px] m-10 justify-center h-[400px] items-center space-x-6 md:space-x-0 md:space-y-6">
                {
                  social.map((el, i) => {
                    return(<motion.a
                      href={el.link}
                      key={i}
                      target="_blank" // Open in new tab
                      rel="noopener noreferrer" // Security best practice
                      whileHover={{ scale: 1.1, y: -5 }} // Slightly less aggressive hover effect
                      className="m-10 flex items-center justify-center flex-col" // Ensure the link is a block for spacing
                    >
                      {el.img}
                      {el.name}
                    </motion.a>)
                  })
                }            
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
