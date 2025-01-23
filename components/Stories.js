import React, { useEffect, useState } from "react";
import "./Stories.css";
import NewStoryFrom from "./NewStoryFrom";
import DeleteButton from "./DeleteButton";
import SaveButton from "./SaveButton";
import PopUp from "./common_components/PopUp";

function Stories({ selectedStory, setSelectedStory }) {
  const [firstLoad, setFirstLoad] = useState(true);
  const [story, setStory] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [storyContent, setStoryContent] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  const [popUpProps,setPopUpProps] = useState({
    colsePopup: colsePopup,
    title: "",
    message: "",
    onYes: () => {},
    onNo: () => {},
  })

  function colsePopup() {
    setShowPopUp(false );
  }
  function onSave() {
    setPopUpProps({
    title : "Save keep ?",
    message : "Testing",
    onYes : () => {
        setFirstLoad(false);
        setStory((prev) => {
          return prev.map((item) =>
            item.name === selectedStory
              ? { ...item, content: storyContent }
              : item
          );
        });
        colsePopup()
      },
      onNo : colsePopup
    })
    togglePopup()
  }
  const togglePopup = () => {
    setShowPopUp(!showPopUp);
  };
  useEffect(() => {
    if (!firstLoad) sessionStorage.setItem("story", JSON.stringify(story));
  }, [story]);

  useEffect(() => {
    if (selectedStory) {
      let temp = story.filter((x) => x.name == selectedStory);
      temp[0].content ? setStoryContent(temp[0].content) : setStoryContent(" ");
    }
  }, [selectedStory]);

  useEffect(() => {
    let sessionStory = sessionStorage.getItem("story");
    if (sessionStory) {
      setStory(JSON.parse(sessionStory));
    }
  }, []);

  function onStorySelection(item) {
    setSelectedStory(item.name);
  }

  function onDelete() {
    setFirstLoad(false);
    setStoryContent(" ");
    setStory(story.filter((x) => x.name != selectedStory));
    setSelectedStory("");
  }

  function onYes() {
    alert("yesss");
  }

  return (
    <>
      <div className="storiesMain py-3 px-1">
        {story.map((item) => {
          return (
            <div
              onClick={() => {
                onStorySelection(item);
              }}
              className={
                selectedStory == item.name ? "card1 activeCard" : "card1"
              }
              key={item.name}
            >
              {item.name}
            </div>
          );
        })}
        <div
          className="card1"
          onClick={() => {
            setShowForm(true);
            setSelectedStory(null);
          }}
        >
          +
        </div>
      </div>
      {showForm && (
        <div className="newStoryForm">
          <NewStoryFrom
            setStory={setStory}
            setShowForm={setShowForm}
            selectedStory={selectedStory}
            setSelectedStory={setSelectedStory}
          />
        </div>
      )}
      {selectedStory && (
        <div className="col-12">
          {" "}
          <textarea
            value={storyContent}
            onChange={(e) => setStoryContent(e.target.value)}
            className="input"
            type="textbox"
            multiline="true"
          ></textarea>{" "}
        </div>
      )}
      {selectedStory && (
        <div className="col-12 bottomBtns d-flex flex-row-reverse ">
          <SaveButton onSave={onSave} />
          <DeleteButton onDelete={onDelete} />
        </div>
      )}
      {showPopUp && popUp}
    </>
  );
}

export default Stories;
