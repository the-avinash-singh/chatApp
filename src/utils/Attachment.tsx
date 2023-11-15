import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
} from "@chakra-ui/react";
import attachment from "../assets/Attachment.svg";
import camera from "../assets/camera_icon.svg";
import camcorder from "../assets/camcorder.svg";
import doc from "../assets/doc.svg";

const Attachment = () => {
  return (
    <>
      <Popover 
      placement="top"
      closeOnBlur
      >
        <PopoverTrigger>
          <img
            src={attachment}
            alt=""
            className="pe-2 cursor-pointer"
          />
        </PopoverTrigger>
        <PopoverContent
          bg="green.0"
          borderRadius={"62.4375rem"}
          width={"100%"}
          border={0}
          outline={"none"}
        >
          <PopoverArrow 
          bg="green.0"
          outline={"none"} />
          <PopoverBody
          outline={"none"}
          >
            <div></div>
            <img src={camera} alt="" className="cursor-pointer" />
            <img src={camcorder} alt="" className="px-2 cursor-pointer" />
            <img src={doc} alt="" className="cursor-pointer" />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Attachment;
