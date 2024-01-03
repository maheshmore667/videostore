import React from 'react'
import Sidebar from './Sidebar'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className="grid grid-cols-12">
        <div className="col-span-2">
            <Sidebar />
        </div>
        <div className="col-span-10">
            <VideoContainer />
        </div>
      
    </div>
  )
}

export default MainContainer
