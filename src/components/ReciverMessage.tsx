//@ts-nocheck
import React from "react";
import "../styles/message.css";
import profile from "../assets/profile.png";
import verify from "../assets/verified.svg"

export default function Reciver({data}) {
  return (
    <div className="d-flex">
      <div className="sent ms-auto me-2 text-start">{data.message}</div>
    </div>
  );
}
