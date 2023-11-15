//@ts-nocheck
import React, { useEffect } from "react";
import "../styles/chat-section.css";
import Sender from "./SenderMessage";
import Reciver from "./ReciverMessage";
import { fetchMoreData } from "../Apis/chatapi";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../utils/Loader";
import Timecomponent from "./Timecomponent";

const ChatSection = ({ chatData }) => {

  const [page, setPage] = React.useState(0);

  const [chatsData, setChatData] = React.useState([]);

  const infiniteApi = async () => {
    const data = await fetchMoreData(page + 1);
    setChatData(chatsData.concat(data.chats));
    setPage(page + 1);
  };

  useEffect(() => {
    setChatData(chatData);
  }, [chatData]);

  if (chatsData === undefined) {
    return;
  }

  return (
    <div className="chat-div">
      {/* <Timecomponent chatData={data}/> */}
      <InfiniteScroll
        dataLength={chatsData.length}
        next={infiniteApi}
        hasMore={true}
        loader={<Loader />}
      >
        <div className="d-flex flex-column gap mx-auto pt-4 px-3 custom-width">
          {chatsData?.map((data, index) => {
            return (
              <div key={index} className="d-flex flex-column gap">
                {data.sender.self?<Reciver data={data} />
                :<Sender data={data}/>}
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default ChatSection;
