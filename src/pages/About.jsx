import Navbar from "../component/Navbar";

export default function About() {

  return (
    <>
      {/* Header with Navbar */}
      <header className='w-full flex justify-center'>
        <Navbar />
      </header>

      {/* Main content area */}
      <main className="container mx-auto px-4 py-12 min-h-screen text-center">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16">
          {/* Text Content */}
          <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Hi, I'm Amanjeet kumar
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* Profile Image Placeholder */}
          <div className="md:w-1/2 flex justify-center">
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
        </section>


        {/* Interests/Personal Touch Section */}
        <section>
           <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Interests & Passion</h2>
           <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
           </p>
           {/* You could add icons or small images related to interests here */}
        </section>
      </main>
    </>
  );
}
