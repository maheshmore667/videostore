import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../Utils/Store/Slices/navSlice";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEOS_URL } from "../Utils/Constants";
import  { DataModified } from "./MovieCard";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import InputLiveChat from "./InputLiveChat";

const Watch = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const id = searchParams?.get("v");
  const [likedMovies, setLikedMovies] = useState(null);
  useEffect(() => {
    dispatch(closeSideBar());
    getMyLikedVideos();
    // eslint-disable-next-line
  }, []);

  const getMyLikedVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const response = await data?.json();
    setLikedMovies(response?.items);
  };

  return (
    <div className="flex w-full h-screen mt-3">
      <div className="w-[70%] h-[70%]">
        <iframe
          className="w-full h-full p-2"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <CommentsContainer />
      </div>
      <div className="w-[30%]">
        <div className="mt-2 w-full flex flex-col h-[55%] border-2 border-blue-500 rounded-lg overflow-y-scroll">
          <LiveChat />
        </div>
        <InputLiveChat />
        <div className="w-full flex flex-col">
          {likedMovies?.map((movie) => (
              <DataModified  key={movie?.id} info = {movie}/ >
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;
