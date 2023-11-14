import React from "react";
import "../styles/message.css";
import profile from "../assets/profile.png";
import verify from "../assets/verified.svg"

export default function Sender() {
  return (
    <div className="d-flex">
      <div className="ms-2">
        <img src={profile} className="rounded-circle "/>
        <div className="position-relative">
        <span className="position-absolute position-badg translate-middle badge">
          <img src={verify} alt="" />
        </span>
        </div>
      </div>
      <div className="message ms-2 text-start">data hhhhhhhhhhh hhhhhhhhhhh  jjjjjjjjjjjj </div>
    </div>
  );
}
