import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addLiveComment } from '../Utils/Store/Slices/liveChatSlice';

const InputLiveChat = () => {
  const searchRef = useRef("");
  const dispatch = useDispatch();

  const handleSend=()=>{
    console.log(searchRef?.current?.value);
    let payload = {
      comment: searchRef?.current?.value,
      name: "AdminCmt",
    };
    dispatch(addLiveComment(payload));
    searchRef.current.value = "";
  }

  return (
    <div className="flex border-2 border-blue-500 rounded-lg  content-center">
      <input type="text" ref={searchRef}  className="p-3 m-3 rounded-lg w-[70%] border-2 border-blue-400" />
      <button className="p-2 bg-red-500 font-black m-3 rounded-lg" onClick={handleSend}>Send</button>
    </div>
  )
}

export default InputLiveChat
