//@ts-nocheck
import React, { useEffect, useRef } from "react";
import "../styles/chat-section.css";
import Sender from "./SenderMessage";
import Reciver from "./ReciverMessage";
import { fetchMoreData } from "../Apis/chatapi";
import InfiniteScroll from 'react-infinite-scroller';
import Loader from "../utils/Loader";

const ChatSection = ({ chatingData }) => {

  const [page, setPage] = React.useState(0);

  const [chatsData, setChatData] = React.useState([]);
  const div1=useRef(null)
  const infiniteApi = async () => {
    const data = await fetchMoreData(page+1);
    setPage(page + 1);
    setChatData(chatsData.concat(data.chats));
      
  };
  
const count=3
  useEffect(() => {
if(count<=0){
    div1.current.scrollIntoView({ block: "end" })
}
  });
  
  return (
    <div className="chat-div" >
        <div className="d-flex flex-column-reverse gap mx-auto pt-4 px-3 pb-3 custom-width" ref={div1}>
        <InfiniteScroll
    loadMore={infiniteApi}
    style={{ display: 'flex', flexDirection: 'column-reverse',gap:"1.2rem" }} 
    isReverse={true}
    hasMore={true}
  >
          {chatsData?.map((data, index) => {
            return (
              <div key={index}>
                {data.sender.self?<Reciver data={data} />
                :<Sender data={data}/>}
              </div>
            );
          })}
          </InfiniteScroll>
          <Loader/>
        </div>

    </div>
  );
};

export default ChatSection;
