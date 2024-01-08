import React, { useEffect, useState } from 'react'
import ButtonList from './ButtonList'
import { YOUTUBE_VIDEOS_URL } from '../Utils/Constants';
import MovieCard from './MovieCard';

const VideoContainer = () => {
  const [movies, setMovies] = useState(null)
  useEffect(()=>{
    getAllVideos();
    // eslint-disable-next-line
  }, [])

  const getAllVideos = async() =>{
    const data = await fetch(YOUTUBE_VIDEOS_URL);
    const response = await data?.json();
    setMovies(response?.items);
  }

  return (
    <div className="w-[85%]">
     <ButtonList />
     <div className="m-2 flex flex-wrap justify-center">
      {
        movies?.map((movie)=> <MovieCard key={movie?.id} info = {movie}/>)
      }
     
     </div>
     
    </div>
  )
}

export default VideoContainer
