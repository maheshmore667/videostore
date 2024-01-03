import React from 'react'

const SidebarOptions = ({altlabel, imgSrc, label}) => {
  return (
    <div className="px-3 py-1 flex hover:bg-slate-200 rounded-md">
        <img
          className="h-8 w-10 mr-2"
          alt={altlabel}
          src={imgSrc}
        />
        <span className="flex flex-wrap content-center">{label}</span>
      </div>
  )
}

export default SidebarOptions
