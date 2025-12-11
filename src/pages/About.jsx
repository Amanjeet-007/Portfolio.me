

export default function About() {

  return (
    <>
      {/* Header with Navbar */}
      <header className='w-full flex justify-center'>
      </header>
      {/* Main content area */}
      <main className="container px-7  text-center flex-grow">
        <div className="aboutPage">
        <h1 className="text-4xl md:text-5xl font-bold  mb-4">
         <span  className="tracking-light leading-tight">Amanjeet kumar</span>
        </h1>
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between mb-16">
          {/* Text Content */}

          <div className="md:w-[40%] md:pr-8 mb-8 md:mb-0 border-2 border-gray-400 p-5 rounded-2xl">

            <p className="text-xl text-white leading-relaxed mt-0 text-center ">
              A curious builder who loves turning ideas into experiences. I explore the world of code, design, and AI with one goal in mind: to create things that make people stop, think, and smile.
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


   
        </div>
        <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-[#E0E0E0]">

        {/* Headline Text 
        
        <div className="px-4 pt-12 pb-6">
          <h1 className="text-white tracking-light text-[32px] font-bold text-center leading-tight ">Full-Stack JavaScript Developer</h1>
          <p className="text-[#A0A0A0] mt-2 text-lg text-center">Specializing in building exceptional, high-quality websites and applications.</p>
        </div>*/}

        {/* Work Experience Section
        
        <section className="px-4 py-8" id="work">
          <h2 className="text-white text-right text-[22px] font-bold leading-tight tracking-[-0.015em] pb-5">Work Experience</h2>
          <div className="grid grid-cols-[auto_1fr] gap-x-4">
            Timeline Item 1: Senior Frontend Developer
            <div className="flex flex-col items-center gap-1">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-accent-blue">
                <span className="material-symbols-outlined">work</span>
              </div>
              <div className="w-px grow bg-white/20"></div>
            </div>

            <div className="flex flex-1 flex-col pb-10">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-white text-lg font-medium leading-normal">Senior Frontend Developer</p>
                <p className="text-[#A0A0A0] text-base font-normal leading-normal">Innovate Inc. | 2020 - Present</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="text-xs font-medium bg-accent-green/20 text-accent-green py-1 px-3 rounded-full">React</span>
                  <span className="text-xs font-medium bg-accent-green/20 text-accent-green py-1 px-3 rounded-full">TypeScript</span>
                  <span className="text-xs font-medium bg-accent-green/20 text-accent-green py-1 px-3 rounded-full">Next.js</span>
                </div>
                <details> element is native HTML, use appropriate state/toggle logic for a pure React component if needed
                <details className="flex flex-col pt-2 group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                    <p className="text-accent-blue text-sm font-medium leading-normal flex">View description</p>
                    <span className="material-symbols-outlined text-accent-blue group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <p className="text-[#A0A0A0] text-sm font-normal leading-normal pb-2">
                    Led the development of a scalable micro-frontend architecture using React and TypeScript, improving deployment efficiency by 40%. Implemented state management solutions with Redux and Zustand, ensuring predictable application behavior.
                  </p>
                </details>
              </div>
            </div>

            Timeline Item 2: Full-Stack Developer
            <div className="flex flex-col items-center gap-1">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-accent-blue">
                <span className="material-symbols-outlined">work</span>
              </div>
              <div className="w-px grow bg-white/20"></div>
            </div>
            <div className="flex flex-1 flex-col pb-10">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-white text-lg font-medium leading-normal">Full-Stack Developer</p>
                <p className="text-[#A0A0A0] text-base font-normal leading-normal">Tech Solutions LLC | 2018 - 2020</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="text-xs font-medium bg-accent-green/20 text-accent-green py-1 px-3 rounded-full">Node.js</span>
                  <span className="text-xs font-medium bg-accent-green/20 text-accent-green py-1 px-3 rounded-full">Express</span>
                  <span className="text-xs font-medium bg-accent-green/20 text-accent-green py-1 px-3 rounded-full">MongoDB</span>
                  <span className="text-xs font-medium bg-accent-green/20 text-accent-green py-1 px-3 rounded-full">AWS</span>
                </div>
                <details className="flex flex-col pt-2 group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                    <p className="text-accent-blue text-sm font-medium leading-normal">View description</p>
                    <span className="material-symbols-outlined text-accent-blue group-open:rotate-180 transition-transform">expand_more</span>
                  </summary>
                  <p className="text-[#A0A0A0] text-sm font-normal leading-normal pb-2">
                    Developed and maintained RESTful APIs for a client-facing SaaS platform, improving API response times by 30%. Managed cloud infrastructure on AWS, utilizing services like EC2, S3, and Lambda for a highly available and scalable system.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section> 
        */}

        {/* Education Section */}
        <section className="px-4 py-8 " id="education">
          <h2 className="text-white text-[25px] text-right font-bold leading-tight tracking-[-0.015em] pb-5">Education</h2>
          <div className="grid grid-cols-[auto_1fr] gap-x-4">
            {/* Timeline Item 3: B.S. in Computer Science */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-accent-blue">
                <span className="material-symbols-outlined">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z"></path></svg>
                </span>
              </div>
              <div className="w-px grow bg-white/20"></div>
            </div>
            <div className="flex flex-1 flex-col pb-10">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-white text-lg font-medium leading-normal">Bachelor of Computer Applications</p>
                <p className="text-[#A0A0A0] text-base font-normal leading-normal">Patliputra University <br />Vestor College of Management | 2022 - 2025</p>
                <details className="flex flex-col pt-2 group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                    <p className="text-accent-blue text-sm font-medium leading-normal">View details</p>
                    <span className="material-symbols-outlined text-accent-blue group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.9679 9.11619L3.03212 10.8838L12 15.6315Z"></path></svg>
                    </span>
                  </summary>
                  <p className="text-[#A0A0A0] text-sm font-normal leading-normal pb-2">
                    Graduated with honors. Focused on software engineering principles, data structures, and algorithms. Actively participated in coding clubs and hackathons.
                  </p>
                </details>
              </div>
            </div>

            {/* Timeline Item 4 (end): Full-Stack Web Development Bootcamp */}
            <div className="flex flex-col items-center">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary/20 text-accent-blue">
                <span className="material-symbols-outlined">
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M12.382 3C12.7607 3 13.107 3.214 13.2764 3.55279L14 5H20C20.5523 5 21 5.44772 21 6V17C21 17.5523 20.5523 18 20 18H13.618C13.2393 18 12.893 17.786 12.7236 17.4472L12 16H5V22H3V3H12.382ZM11.7639 5H5V14H13.2361L14.2361 16H19V7H12.7639L11.7639 5Z"></path></svg>
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col pb-10">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-white text-lg font-medium leading-normal">Senior Secondary</p>
                <p className="text-[#A0A0A0] text-base font-normal leading-normal">Bihar School Examination Board | 2022</p>
                <details className="flex flex-col pt-2 group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-2">
                    <p className="text-accent-blue text-sm font-medium leading-normal">View details</p>
                    <span className="material-symbols-outlined text-accent-blue group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.6315L20.9679 10.8838L20.0321 9.11619L12 13.3685L3.9679 9.11619L3.03212 10.8838L12 15.6315Z"></path></svg>
                    </span>
                  </summary>
                  <p className="text-[#A0A0A0] text-sm font-normal leading-normal pb-2">
                    In Science Stream I clear the Exam with First Division.It's gives Science Orianted view to solve a Problem in Tiny pieces then solve it using your curiosity
                  </p>
                </details>
              </div>
            </div>
            
            
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
