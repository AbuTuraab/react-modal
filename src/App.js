import React, {useState} from 'react'

 import Modal from './components/Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="">
      <button className='signupBtn'
    onClick={() => setOpenModal(true)}>Sign up</button>
      <Modal  open={openModal} onClose={()=> setOpenModal(false)} />
    </div>
  )
}

export default App;

