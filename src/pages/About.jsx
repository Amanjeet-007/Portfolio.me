

export default function About() {

  return (
    <>
      {/* Header with Navbar */}
      <header className='w-full flex justify-center'>
      </header>
      {/* Main content area */}
      <main className="container px-7  text-center">
        <div className="aboutPage">
        <h1 className="text-4xl md:text-5xl font-bold  mb-4">
         <span>Amanjeet kumar</span>
        </h1>
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16">
          {/* Text Content */}

          <div className="md:w-[40%] md:pr-8 mb-8 md:mb-0 border-2 border-gray-400 p-5 rounded-2xl">

            <p className="text-xl text-white leading-relaxed mt-0 text-center ">
              I’m Amanjeet — a curious builder who loves turning ideas into experiences. I explore the world of code, design, and AI with one goal in mind: to create things that make people stop, think, and smile.
            </p>
            <p className="text-xl text-white leading-relaxed mt-4 text-center">
              I enjoy understanding how things operate under the hood — from system internals to data flow — and then using that knowledge to build something meaningful.
            </p>

          </div>

          {/* Profile Image Placeholder */}
          <div className="md:w-[30%] flex justify-center">
            <div className="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden shadow-lg">
              {/* Replace with your actual image */}
              <img
                src="https://placehold.co/256x256/cccccc/333333?text=Your+Photo"
                alt="Your Profile"
                className="object-cover w-full h-full"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/256x256/cccccc/333333?text=Image+Error'; }} // Fallback on error
              />
            </div>
          </div>
          <div className="md:w-[40%] md:pr-8 mb-8 md:mb-0 border-2 border-gray-400 p-5 mt-30 rounded-2xl md:mt-0 ">
            <p className="text-xl text-white leading-relaxed text-center  ">
              I like mixing logic with imagination — writing code that not only functions but also feels crafted. Learning, experimenting, and pushing boundaries are all part of my daily rhythm.
            </p>
            <p className="text-xl text-white leading-relaxed mt-4 text-center ">
              Right now, I’m on a journey to master the art of building impactful digital tools — the kind that simplify lives, inspire ideas, and spark innovation.
            </p>
          </div>

        </section>


        {/* Interests/Personal Touch Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-200">Interests & Passion</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">

          </p>
          {/* You could add icons or small images related to interests here */}
        </section>
        </div>
      </main>
    </>
  );
}
