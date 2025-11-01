import { gsap } from 'gsap';
import { useGSAP } from "@gsap/react";
import Navbar from "../component/Navbar";

gsap.registerPlugin(useGSAP);

export default function Projects() {


  return (
    <>
      <header className="w-[100%] h-min flex justify-center">
        <Navbar />
      </header>
      <main>
        <div className="All  h-20 w-full flex items-center justify-around flex-nowrap overflow-scroll fixed top-[125px] z-50 ">
          {["All","HTML","CSS","JavaScript","React","Node.js","Express","GraphQL","D3.js","Python","Firebase"].map((el,i)=>{
            return(
              <div className="tech py-1 px-7 rounded-4xl border-2 border-white text-white min-w-[100px] flex items-center justify-center mx-4 " key={i}>{el}</div>
            )
          })}
          
        </div>

        <section className="boxes-container flex justify-around items-center w-full flex-wrap h-min mt-25">
          {["Box1","Box1","Box1","Box1","Box1","Box1","Box1","Box1","Box1","Box1","Box1","Box1","Box1","Box1","Box1"].map((el,i)=>{
            return(
               <div className="card h-[300px] w-[250px] rounded-2xl m-5 relative overflow-hidden cursor-pointer"key={i}  onClick={(e)=>toggleTimeline(e)}>
                {/* link */}
                <div className="link absolute h-14 w-14 bg-blue-800 rounded-bl-2xl top-0 right-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 24 24" fill="white"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
                </div>
                <p>{el}</p>
                  
               </div>
            )
          })
          }
      </section>
      </main>
    </>
  );
}