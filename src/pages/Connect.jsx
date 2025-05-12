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

  return (
    <>
      {/* Header with Navbar */}
      <header className='w-full flex justify-center'>
        <Navbar />
      </header>

      {/* Main content area */}
      <main className=" connect flex flex-col md:flex-row items-center justify-center">
          <h2 className="text-2xl font-bold">Connect with Me</h2>

        {/* Contact Form Section */}
        <div className="terminal w-[90%] max-w-md p-8 rounded-lg shadow-xl mb-8 md:mb-0 md:mr-12">
          {/* Form Header (Terminal-like) */}
          <div className=" ttop w-full h-8 flex rounded-t-lg items-center justify-center px-4">
            <span className="ml-4 text-sm text-gray-300 font-bold">Send a Message</span>
          </div>

          {/* The Form */}
          <form ref={form} onSubmit={sendEmail} className="Form mt-4 space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="user_email" className='block text-sm font-medium text-gray-700 mb-1'>
                Your Email:
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                placeholder="Enter Your Email"
                className="w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Name Input */}
            <div>
              <label htmlFor="name" className='block text-sm font-medium text-gray-700 mb-1'>
                Your Name:
              </label>
              <input
                type="text"
                id="name"
                name="name" // Added name attribute for EmailJS
                required
                placeholder="Enter Your Name"
                className="w-full px-3 py-2  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Message Textarea */}
            <div >
              <label htmlFor="message" className='block text-sm font-medium text-gray-700 mb-1'>
                Your Message:
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Enter Your Message"
                rows="4" // Set initial rows
                className='w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-y' // Allow vertical resize
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
        </div>
            <p className='or'>OR</p>
        {/* Social Media Icons Section */}
        {/* Positioned relative to the main container, allowing flexbox alignment */}
        <div className="social flex flex-col items-center  space-y-6 md:space-y-8">
          {/* Heading for Socials */}

          {/* Social Icons Container */}
          <div className="flex flex-row items-center space-x-6 md:space-x-0 md:space-y-6">
            {/* GitHub */}
            <motion.a
              href="https://github.com/Amanjeet-007"
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security best practice
              whileHover={{ scale: 1.1, y: -5 }} // Slightly less aggressive hover effect
              className="block" // Ensure the link is a block for spacing
            >
              <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github" className="w-10 h-10 md:w-12 md:h-12" /> {/* Adjusted size */}
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/amanjeet-kumar-374b0928a"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
               className="block"
            >
              <img src="https://img.icons8.com/ios-filled/50/0077B5/linkedin.png" alt="linkedin" className="w-10 h-10 md:w-12 md:h-12" /> {/* Adjusted size and color */}
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="#" // Replace with actual Instagram link
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
               className="block"
            >
              <img src="https://img.icons8.com/ios-filled/50/E4405F/instagram-new.png" alt="instagram" className="w-10 h-10 md:w-12 md:h-12" /> {/* Adjusted size and color */}
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/918882137478?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
               className="block"
            >
              <img src="https://img.icons8.com/ios-filled/50/25D366/whatsapp--v1.png" alt="whatsapp" className="w-10 h-10 md:w-12 md:h-12" /> {/* Adjusted size and color */}
            </motion.a>

            {/* Telegram */}
            <motion.a
              href="https://t.me/Rikkysinghrajput"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
               className="block"
            >
              <img src="https://img.icons8.com/ios-filled/50/0088CC/telegram-app.png" alt="telegram" className="w-10 h-10 md:w-12 md:h-12" /> {/* Adjusted size and color */}
            </motion.a>
          </div>
        </div>
      </main>
    </>
  );
}
