import { useEffect, useState } from "react"

export default function Tab({options}){
    const [choose,setChoose] = useState(0)
    const option = ["Intro","Basic","Intermidiate","Advance","Pro","Master"]
    useEffect(()=>{
        
    })
    return(
        <>
        <div className="w-[100vw] h-min flex justify-around fixed left-0">
            {
                option.map((el,i)=>{
                    return(
                        <div className="w-30 pt-5 pb-5 bg-red-600 flex items-center justify-center rounded-2xl" key={i} onClick={setChoose(i)}>{el}
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}