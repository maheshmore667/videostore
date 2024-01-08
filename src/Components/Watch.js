import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../Utils/Store/Slices/navSlice";
import { useSearchParams } from "react-router-dom";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams?.get("v");
  useEffect(() => {
    dispatch(closeSideBar());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex w-full h-screen">
      <div className="w-[60%] h-[70%]">
        <iframe
          className="w-full h-full p-2"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Watch;
