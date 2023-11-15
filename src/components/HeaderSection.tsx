//@ts-nocheck
import React from 'react'
import "../styles/headersection.css"
import back from "../assets/Back.svg"
import dotbutton from "../assets/3dot.svg"
import chat1 from "../assets/chatimg1.png"
import chat2 from "../assets/chatimg2.png"
import chat3 from "../assets/chatimg3.png"
import chat4 from "../assets/chatimg4.png"
import edit from "../assets/edit.svg"

const HeaderSection = (data) => {
  
  return (
    <div className='border-bottom sticky-top bg-chat'>
    <div className=' mx-3 pt-5 mx-auto custom-width'>
      <div className='d-flex justify-content-between'>
        <div className='d-flex text-nowrap justify-content-start'>
      <img src={back} alt="back" className='pe-3 mb-3' />
      <div className='trip'>{data.name}</div>
        </div>
      <div>
        <img src={edit} className='me-1' alt=""/>
      </div>
        </div>
      <div className='d-flex justify-content-start'>
        <div className='col-2 chat-img me-3'>
            <img src={chat1} alt="1" className='chatimg1'/>
            <img src={chat2} alt="2" className='chatimg2'/>
            <img src={chat3} alt="3" className='chatimg3'/>
            <img src={chat4} alt="4" className='chatimg4'/>
        </div>
        <div>
        <div className='text-start'>
            <span className='light-text'>From</span> <span className='dark-text'>{data.from}</span>
        </div>
        <div className='text-start'>
            <span className='light-text'>To</span> <span className='dark-text'>{data.to}</span>
        </div>
        </div>
        <div className='mt-auto mb-auto ms-auto'>
            <img src={dotbutton} alt="menu" />
        </div>
      </div>

    </div>
    </div>
  )
}

export default HeaderSection
