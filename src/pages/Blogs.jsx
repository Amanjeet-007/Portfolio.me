import Navbar from "../component/Navbar"
import '../App.css'
import { motion } from 'motion/react'



export default function Blogs() {
  const blogs = [
    {
      id: 0,
      path: "/firstblog",
      image: "https://media.licdn.com/dms/image/v2/D5612AQHY0LBRCLhk1Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1727362192771?e=2147483647&v=beta&t=1jpwJm68AOOU1rNNFU3rlZSj5EDni0tbHlCezPI0yVU",
      title: "System design basic",
      date: "2025 - 10 - 20",
      status: "upcoming",
      summary: "An intnroduction guide for system design"
    },
    {
      id: 1,
      path: "/2nd",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJZ8TBRf7TmDqUdEUduoB2nOS17UOPOus3Q&s",
      title: "OOPs advance",
      date: Date.now(),
      status: "upcoming",
      summary: "An brife guide of OOPs concepts"
    },


  ]

  return (
    <main>
      <Navbar />
      <div className="blogs w-full h-full flex items-center justify-around flex-wrap ">
        {
          blogs.map(el => {
            return (
              <motion.div
                className="card h-80 w-90  bg-red-800 m-10 rounded-2xl flex items-center flex-col overflow-hidden text-black cursor-pointer border-2 border-black"
                whileHover={{ scale: 1.1 }}
              >
                <p className="">{el.date}</p>
                <img src={el.image} alt="" className="h-40 bg-white w-[100%] rounded-2xl" />
                <p className="title text-2xl m-2 font-extrabold">{el.title}</p>
                <p className="text-center">{el.summary}</p>
              </motion.div>
            )
          })
        }
      </div>
    </main>
  )
}