import React from 'react'

const Button = ({name}) => {
  return (
    <div className="mx-1 bg-gray-200 hover:bg-black px-4 py-1 rounded-lg text-black hover:text-white">
      <button>{name}</button>
    </div>
  )
}

export default Button
