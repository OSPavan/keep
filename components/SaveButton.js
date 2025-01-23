import React from 'react'

const SaveButton = ({onSave}) => {
  return (
    <button
    className="btn-23 "
    onClick={() => {
      onSave();
    }}
  >
    <span className="text">SAVE</span>
    <span aria-hidden="" className="marquee">
      SAVE
    </span>
  </button>
  )
}

export default SaveButton