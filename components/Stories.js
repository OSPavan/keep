import React, { useEffect, useState } from "react";
import './Stories.css'
import NewStoryFrom from "./NewStoryFrom";

function Stories({ selectedStory, setSelectedStory }) {

    const [story, setStory] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [storyContent, setStoryContent] = useState('')

    function onSave() {
        setStory((prev) => {
            return prev.map((item) =>
                item.name === selectedStory
                    ? { ...item, content: storyContent }
                    : item
            )
        })
    }
    useEffect(() => {
        if (selectedStory) {
            let temp = story.filter(x => x.name == selectedStory)
            console.log(temp);
            setStoryContent(temp[0].content)
        }
    }, [selectedStory])
    function onStorySelection(item) {
        setSelectedStory(item.name)

    }
    return (
        <>
            <div className="storiesMain py-3 px-1">
                {story.map((item) => {
                    return <div onClick={() => { onStorySelection(item) }} className={selectedStory == item.name ? "card1 activeCard" : "card1"} key={item.name}>
                        {item.name}
                    </div>
                })}
                <div className="card1" onClick={() => { setShowForm(true);setStoryContent('') }}>
                    +
                </div>
            </div>
            {showForm && <div className="newStoryForm">
                <NewStoryFrom setStory={setStory} setShowForm={setShowForm} selectedStory={selectedStory} setSelectedStory={setSelectedStory} />
            </div>
            }
            {selectedStory &&
                <div className='col-12'>    <input value={storyContent}
                    onChange={(e) => setStoryContent(e.target.value)} className="input" type="textbox" /> </div>
            }
            {selectedStory &&
                <button className="btn-23" onClick={() => { onSave() }}>
                    <span className="text">SAVE</span>
                    <span aria-hidden="" className="marquee">SAVE</span>
                </button>
            }
        </>
    )
}

export default Stories;