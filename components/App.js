import React, { useState } from 'react'
import './main.css'
import Stories from './Stories'
import TextBox from './TextBox'

const App = () => {

  const [selectedStory,setSelectedStory]= useState('')

  return (
   <>
    <div className=' mainDiv '>
      <div className='header col-12 px-5 py-3 fw-bold' >KEEP</div>
      <div className='container col-12'>
       <div className='col-12'> <Stories selectedStory={selectedStory} setSelectedStory={setSelectedStory}/></div>
       {/* <div className='col-12'> <TextBox selectedStory={selectedStory} setSelectedStory={setSelectedStory}/></div> */}
      </div>
    </div>
   </>
  )
}

export default App