import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import HeaderSection from './components/HeaderSection';
import MessageSection from './components/MessageSection';


function App() {
  return (
    
    <div className="App">
      <HeaderSection/>
      
      <MessageSection/>
    </div>
  );
}

export default App;
