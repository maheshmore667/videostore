import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../Utils/Store/Slices/navSlice';

const Watch = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(closeSideBar());
        // eslint-disable-next-line
    }, [])

  return (
    <div>
      Watch Page
    </div>
  )
}

export default Watch
