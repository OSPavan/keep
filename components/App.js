import React from 'react'
import './main.css'
import Stories from './Stories'

const App = () => {
  return (
   <>
    <div className=' mainDiv '>
      <div className='header col-12 px-5 py-3' >KEEP</div>
      <div className='container col-12'>
        <Stories />
      </div>
    </div>
   </>
  )
}

export default App