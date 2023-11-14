import React from "react";
import "../styles/MessageSection.css";
import send from "../assets/send.svg";
import Attachment from "../utils/Attachment";

const MessageSection = () => {
  return (
    <div className="pt-4 pb-5 sticky-bottom bg-chat">
      <div className="mx-3 bg-white d-flex  justify-content-between">
        <input
          type="text"
          className=" border-0 py-2 mx-2 input-div"
          placeholder="Reply to @Rohit Yadav"
        />
        <div className="py-2 d-flex justify-content-between">
          <Attachment />
          <img src={send} alt="" className="pe-1 pe-md-2" />
        </div>
      </div>
    </div>
  );
};

export default MessageSection;
