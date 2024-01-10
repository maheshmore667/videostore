import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ info }) => {
  const thumbnailUrl = info?.snippet?.thumbnails?.medium?.url;
  const title = info?.snippet?.title;
  const channelTitle = info?.snippet?.channelTitle;
  const viewCount = info?.statistics?.viewCount;
  const publishedTime = info?.snippet.publishedBefore;
  return (
         <div className="w-[90%] flex rounded-lg bg-blue-100 hover:bg-blue-200 m-3">
        <Link to={`/watch?v=${info?.id}`} className="flex flex-col">
          <img alt="thumbnail" src={thumbnailUrl} />
          <label className="font-bold text-md mt-3 pl-2">{title}</label>
          <label className="text-sm text-gray-500 pl-2">{channelTitle}</label>
          <label className="text-sm text-gray-500 pl-2">
            {viewCount + " " + publishedTime}
          </label>
        </Link>
      </div>
  );
};

export const DataModified = ({ info }) =>{
const viewCount = info?.statistics?.viewCount;
const dateString = info?.snippet.publishedAt;
const targetDate = new Date(dateString);

const currentDate = new Date();
const timeDifference = currentDate - targetDate;


const seconds = Math.floor(timeDifference / 1000);
const minutes = Math.floor(seconds / 60);
const hours = Math.floor(minutes / 60);
let days = hours/24;
days = parseInt(days)
 
info.snippet.publishedBefore = days >0 ? `${days} days ago` : `${hours} hours ago`
  if(viewCount?.length > 3){
    info.statistics.viewCount = `${viewCount?.substr(0,3)}k views`
  } else {
    info.statistics.viewCount = `${viewCount} views`
  }
  return <MovieCard info={info}/>
}

export default MovieCard;
