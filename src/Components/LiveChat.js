import React, { useEffect } from "react";
import { generateRandomName } from "../Utils/Store/randomName";
import LiveComment from "./LiveComment";
import { useDispatch, useSelector } from "react-redux";
import { addLiveComment } from "../Utils/Store/Slices/liveChatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveChat = useSelector(store => store?.liveChatSlice)
  useEffect(() => {
    const interval = setInterval(() => {
      getCommentQuote();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const getCommentQuote = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response?.json();
      var name = generateRandomName();
      let payload = {
        comment: data?.slip?.advice,
        name: name,
      };
      dispatch(addLiveComment(payload));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <label className="text-md font-bold ml-2 p-2"> Livechat </label>
      <div className="pt-3">
        {
          liveChat && liveChat?.map((liveCmt, index) => <LiveComment key={index} comment={liveCmt?.comment} name={liveCmt?.name}/>)
        }
        
      </div>
    </div>
  );
};

export default LiveChat;
