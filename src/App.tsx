//@ts-nocheck
import React, { useEffect, useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HeaderSection from './components/HeaderSection';
import MessageSection from './components/MessageSection';
import ChatSection from './components/ChatSection';
import { fetchMoreData } from './Apis/chatapi';


function App() {

const [chats,setChats]=React.useState({})

const [chatData,setChatData]=React.useState([])

const call= async ()=>{
  const data= await fetchMoreData(0)
  setChats(data)
  setChatData(data.chats)
}

useEffect( () =>{
 call()
},[])

  return (
    
    <div className="App">
      <HeaderSection from={chats.from} to={chats.to} name={chats.name}/>
      <ChatSection chatData={chatData}/>
      <MessageSection/>
    </div>
    
  );
}

export default App;
