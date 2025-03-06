import Navbar from "../component/Navbar"
export default function Projects() {
    return (
        <>
            <header className='w-[100%] flex justify-center  '>
                <Navbar />
            </header>
            <main className="px-[10%] py-[4%]">
                <h1 className="text-[4rem] mb-10">Projects</h1>
                <div className="project">
                    <img src="\AiCodeConverter.png" alt="Ai code Converter img" className="" />
                </div>
            </main>
        </>
    )
}