//@ts-nocheck
import React from 'react';
import "../styles/chat-section.css";

const Timecomponent = ({ chatData }) => {

  const isDayChanged = (prevDate, currentDate) => {
    const prevDay = new Date(prevDate).getDate();
    const currentDay = new Date(currentDate).getDate();
    return prevDay !== currentDay;
  };

  const renderDateSeparator = (date) => {
    return (
      <div className="date-separator">
        <div className="mx-3 d-flex justify-content-center text my-4">
        <div className="border border-bottom w-100 my-auto me-1"></div>
        <span className='date'>
            {new Date(date).toDateString()}
        </span> 
        <div className=" ms-1 my-auto border border-bottom w-100"></div>
      </div>
      </div>
    );
  };

  return (
    <div className="chat-app">
      {chatData.map((message,index) => {
        console.log(message)
        const showDateSeparator =
          index === 0 || isDayChanged(chatData[index - 1].time, message.time);

        return (
          <React.Fragment key={index}>
            {showDateSeparator && renderDateSeparator(message.time)}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Timecomponent;