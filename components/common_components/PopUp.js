import React from 'react'

function PopUp(props) {
  debugger
  return (
    <div className="popup-overlay">
          <div className="popup">
            <h2>{props.title}</h2>
            <p>{props.message}</p>
            <button onClick={props.onYes}>Yes</button>
            <button onClick={props.onNo}>No</button>
          </div>
        </div>
  )
}

export default PopUp