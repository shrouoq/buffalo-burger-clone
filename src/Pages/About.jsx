import { useState } from "react"
// ******components******
import Story from "../components/AboutComponents/Story";
import Values from "../components/AboutComponents/Values";
import FindUs from "../components/AboutComponents/FindUs";

export default function About() {

  const [content , setContent] = useState('story')  

  const handelContentBox = () => {
    switch(content){
      case 'story' : return <Story />
      case 'valus' : return <Values />
      case 'find'  : return <FindUs />
    }
  }

  const handelClick = (e) => {
    setContent(e.target.dataset.category)
  }

  return (
    <div className="mt-[120px]">
      
      <div className="content-btns py-3 bg-orangee flex justify-center gap-4 flex-wrap max-xs:flex-col">
        <button className="content-btn" data-category='story' onClick={handelClick} style={{color : content=== 'story' ?  '#fff' : 'rgba(255,255,255,.6)'}}>our story</button>
        <button className="content-btn" data-category='valus' onClick={handelClick} style={{color : content=== 'valus' ?  '#fff' : 'rgba(255,255,255,.6)'}}>our valus</button>
        <button className="content-btn" data-category='find' onClick={handelClick} style={{color : content=== 'find' ?  '#fff' : 'rgba(255,255,255,.6)'}}>find us</button>
      </div>
     
      <div className="content bg-backgroundColor py-10">
        {handelContentBox()}
      </div>

    </div>
  )
}
