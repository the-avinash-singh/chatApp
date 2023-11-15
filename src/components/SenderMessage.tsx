//@ts-nocheck
import React from "react";
import "../styles/message.css";
import verify from "../assets/verified.svg"

export default function Sender({data}) {
  return (
    <div className="d-flex">
      <div className="ms-2">
        <img src={data.sender.image} className="rounded-circle image"/>
        {data.sender.is_kyc_verified
?<div className="position-relative">
        <span className="position-absolute position-badg translate-middle badge">
          <img src={verify} alt=""  className="verify-image"/>
        </span>
        </div>:""}
      </div>
      <div className="message ms-2 text-start">{data.message}</div>
    </div>
  );
}
