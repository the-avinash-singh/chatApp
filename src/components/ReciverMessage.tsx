//@ts-nocheck
import React from "react";
import "../styles/message.css";
export default function Reciver({data}) {
  return (
    <div className="d-flex">
      <div className="sent ms-auto me-2 text-start">{data.message}</div>
    </div>
  );
}
