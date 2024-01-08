import React from 'react'

const MovieCard = ({info}) => {
    const thumbnailUrl = info?.snippet?.thumbnails?.medium?.url
    const title = info?.snippet?.title
    const channelTitle = info?.snippet?.channelTitle
    const viewCount = info?.statistics?.viewCount
    const publishedTime = info?.snippet.publishedAt
  return (
    <div className="w-[28%] flex flex-col rounded-lg bg-blue-100 hover:bg-blue-200 m-3">
      <img alt="thumbnail" src={thumbnailUrl} />
      <label className="font-bold text-md mt-3 pl-2">{title}</label>
      <label className="text-sm text-gray-500 pl-2">{channelTitle}</label>
      <label className="text-sm text-gray-500 pl-2">{viewCount+" " +publishedTime }</label>
    </div>
  )
}

export default MovieCard
