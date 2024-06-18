import React, { useState } from "react";
import './Stories.css'

function Stories() {

    const [story,setStory]=useState([1])



   function addStory(){
    setStory((prev)=>{
        return [...prev,2]
    })
    }

    return (
        <>
        <div className="storiesMain py-3">
            {story.map((item)=>{
               return <div class="card1" key={item}>
                Click me
                </div>
            })}
            <div class="card1" onClick={addStory}>
               +
                </div>
            </div>
            
        </>
    )
}

export default Stories;