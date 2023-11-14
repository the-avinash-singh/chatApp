import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HeaderSection from './components/HeaderSection';
import MessageSection from './components/MessageSection';
import ChatSection from './components/ChatSection';


function App() {
  return (
    
    <div className="App">
      <HeaderSection/>
      <ChatSection/>
      <MessageSection/>
    </div>
  );
}

export default App;
