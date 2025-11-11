import '../App.css'
import { motion } from 'motion/react'
import { Link, Outlet } from "react-router"




export default function Blogs() {
  const blogs = [
    {
      id: 0,
      path: "python&JavaScript",
      image: "https://bigblue.academy/images/thumb/blog/python-vs-javascript-which-language-should-you-learn-first/pythonvsjavascript-1200x630.jpeg",
      title: "Python & JavaScript",
      date: "01/11/2025",
      status: "working",
      summary: "Learn And understand the simillarity between Js and Py"
    },
    {
      id: 1,
      path: "oops",
      image: "https://i.pinimg.com/736x/49/e4/5f/49e45fa4fed20eb38f8f2c06c263e793.jpg",
      title: "OOPs advance",
      date: "COMING SOON",
      status: "upcoming",
      summary: "An brife guide of OOPs concepts"
    }, {
      id: 2,
      path: "Systemdesign",
      image: "https://media.licdn.com/dms/image/v2/D5612AQHY0LBRCLhk1Q/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1727362192771?e=2147483647&v=beta&t=1jpwJm68AOOU1rNNFU3rlZSj5EDni0tbHlCezPI0yVU",
      title: "System design basic",
      date: "2025 - 10 - 20",
      status: "upcoming",
      summary: "An intnroduction guide for system design"

    }


  ]

  return (
    <main>
      <div className="blogs w-full h-full flex items-center justify-around flex-wrap">
        {
          blogs.map(el => {
            return (
              <motion.div
                className="card h-80 w-90 m-4 rounded-2xl flex items-center flex-col overflow-hidden text-center text-white cursor-pointer border-2 border-black"
                whileHover={{ scale: 1.1 }}
              >
                <Link to={el.path}>
                  <p className="">{el.date}</p>
                  <motion.img src={el.image} alt="" className="h-40 bg-white w-[100%] rounded-2xl border-2 border-gray-800 shadow-2xl shadow-gray-700" whileHover={{ scale: .9 }} />
                  <p className="title text-2xl m-2 font-extrabold text-rose-700">{el.title}</p>
                  <p className="text-center">{el.summary}</p>
                </Link>
              </motion.div>


            )
          })
        }
        <Outlet />
      </div>
    </main>
  )
}