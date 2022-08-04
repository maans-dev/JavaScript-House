import React from 'react'
import './Modal.css'

const Modal = ({props}) => {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
            <button onClick={()=>{props(false)}}> Cancel </button>
            </div>
            <div className='title'>
                <h1>Continue or Go Back</h1>
            </div>
            <div className='body'>
                Click to the next page
            </div>
            <div className='footer'>
                <button>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Modal
