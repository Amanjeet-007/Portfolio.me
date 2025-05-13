import Navbar from "../component/Navbar"
import {motion} from 'motion/react'
export default function Blogs(){
    return(
        <main>
            <Navbar/>
     <div className="blogs w-full h-full flex items-center flex-col">

    
    <motion.div
      className="bCard max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer"
      whileHover={{ scale: 1.03 }} // Subtle scale up animation on hover
    >
      {/* Blog Post Image */}
      {/* Using an img tag with object-cover to ensure the image fills the space without distortion */}
      {/* Added a placeholder image and a simple error fallback */}
      <img
        className="w-full h-48 object-cover"
        src={"asf" || 'https://placehold.co/600x400/E5E7EB/1F2937?text=Blog+Image'} // Placeholder if no image URL is provided
        alt={"asf" || 'Blog post image'}
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/E5E7EB/1F2937?text=Image'; }} // Fallback on error
      />

      {/* Card Body */}
      <div className="px-6 py-4">
        {/* Blog Post "asf" */}
        {/* Using text-xl and font-bold for a prominent "asf" */}
        <div className="font-bold text-xl mb-2 ml-4 ">{"Upcoming.." || 'Blog Post "Upcoming Blog"'}</div>
        {/* Blog Post Excerpt/Description */}
        {/* Using text-gray-700 for body text and text-base for standard size */}
        <p className="text-base">
          {`` || 'This Blog is related to redux tool kit '}
        </p>
      </div>

      {/* Card Footer - Optional Info */}
      {/* Using text-sm for smaller text like "date" and "Amanjeet" */}
      <div className="px-6 pt-4 pb-2 flex justify-between items-center  text-sm">
        {/* "date" */}
        {"date" && <span>{"soon"}</span>}
        {/* "Amanjeet" */}
        {"Amanjeet" && <span>By {"Amanjeet"}</span>}
      </div>

      {/* Optional: Link Overlay or Button */}
      {/* You might wrap the entire card in an <a> tag or add a "Read More" button */}
       <a href={"Amanjeet"} className="border-2 mt-20 bg-emerald-50 block px-6 py-3 text-center text-blue-600 hover:text-blue-800 transition-colors duration-200">
         Read More
       </a>

    </motion.div>
 </div>
        </main>
    )
}