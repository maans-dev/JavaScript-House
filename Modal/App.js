import React, { useState } from 'react'
import "./App.css"
import Modal from './components/Modal'

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='App'>
      <h1> Basic Clicker</h1>
      <button onClick={()=>{setOpen(true)}}>Clicker</button>

      {open && <Modal props={setOpen} />}
    </div>
  )
}

export default App



//can render modal or not pass state to Modal to affect actions
