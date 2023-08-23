import React from 'react'
import styles from "./Modal.css"

function Modal({open, onClose}){
  if(!open)
  return null;

  return (
    <div className="modal">
   <div className=' '>
<div className='modalHeader'>
<div className='heading'>Great Software Engineers
</div>
</div>
<div className='content'>
  <p>Stay up to date</p>
  <p>Sign up for this newsletter to get the latest update from our projects</p>
</div>
<div className='content'>
  <input type="text" placeholder="Name"></input>
  <input type="text" placeholder="Email"></input>
</div>
<div className="">
      <button className='subBtn'
    onClick={onClose}
    >Subscribe</button>
    
    </div>
   </div>
    </div>
  )
} 

export default Modal;