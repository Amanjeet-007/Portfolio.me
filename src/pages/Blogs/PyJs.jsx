import Navbar from '../../component/Navbar';

export default function PyJs() {
  return (
    <>
    <Navbar/>
    <div className="-mt-16 min-h-screen w-full bg-[#0f172a] text-slate-200 selection:bg-blue-500/30">
      {/* Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[5%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-yellow-500/10 blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-4xl px-6 lg:py-32">
        <section className="leading-relaxed">
          
          {/* Header Section */}
          <header className="mb-5">
            <span className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4 block">
              Language Strategy
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-8">
              Every Programmer Starts With the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400">Same Question</span> 🤔
            </h1>
            <div className="flex flex-wrap gap-3 mb-8">
              {['Python', 'JavaScript', 'C++', 'Java', 'Rust'].map((lang) => (
                <span key={lang} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm font-mono text-slate-400">
                  {lang}
                </span>
              ))}
            </div>
          </header>

          {/* Intro Paragraphs */}
          <div className="space-y-6 text-lg text-slate-400">
            <p>
              <strong className="text-white">“Which programming language should I learn first?”</strong>
            </p>
            <p>
              Almost every new programmer begins here. It feels like a life-changing decision. 
              But once you spend real time in the industry, you realize a fundamental truth:
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-10 italic text-white text-2xl font-medium">
              "There is no single “best” programming language — only the right tool for the right problem."
            </blockquote>
          </div>

          {/* Superpowers Section */}
          <div className="my-20">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-blue-500"></span>
              Different Problems, Different Superpowers ⚡
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { lang: 'JavaScript', task: 'Web Applications', color: 'border-yellow-500/50' },
                { lang: 'Python', task: 'AI & Data Science', color: 'border-blue-500/50' },
                { lang: 'C++ / Java', task: 'High-Performance Systems', color: 'border-red-500/50' }
              ].map((item) => (
                <div key={item.lang} className={`p-6 rounded-2xl border ${item.color} bg-white/5 backdrop-blur-sm transition-transform hover:-translate-y-1`}>
                  <p className="text-sm text-slate-500 mb-2">{item.task}</p>
                  <p className="text-xl font-bold text-white">{item.lang}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Logic Section */}
          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 my-20">
            <h2 className="text-2xl font-bold text-white mb-6">The Core Truth 💡</h2>
            <p className="mb-8 text-slate-400">
              Syntax may change, and styles may differ, but the <span className="text-blue-400">logical blueprint</span> remains identical across the board:
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-mono text-sm">
              {['Data types', 'Conditions', 'Loops', 'Functions', 'OOP Concepts', 'Variables'].map((concept) => (
                <div key={concept} className="flex items-center gap-2 text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {concept}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-yellow-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative p-8 bg-[#1e293b] rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">
                Want to bridge the gap? 📘
              </h3>
              <p className="text-slate-400 mb-6">
                I created a documentation-style guide comparing <strong>Python</strong> and <strong>JavaScript</strong>. 
                If you know one, you already know 70% of the other.
              </p>
              <a
                href="https://github.com/Amanjeet-007/Js-python"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-blue-400 hover:text-white transition-colors"
              >
                View Comparison Guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </a>
            </div>
          </div>

        </section>
      </main>
    </div>
    </>
  );
}