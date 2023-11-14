import React from 'react'
import "../styles/chat-section.css"
import Sender from './SenderMessage'
import Reciver from './ReciverMessage'

const ChatSection = () => {
  return (
    <div className='chat-div'>
      <div className='mx-3 d-flex justify-content-center text'>
        <div className='border-bottom w-100 my-auto me-1'></div>12JAN,2023<div className=' ms-1 my-auto border-bottom w-100'></div>
      </div>
      <div className='d-flex flex-column gap'>
      <Sender/>
      <Reciver/>
      </div>
    </div>
  )
}

export default ChatSection
