import React from 'react'
import Button from './Button'

const ButtonList = () => {
    const buttonArray = ["All", "Mixes", "Javascript", "Stock Market", "Live", "Java", "Data Structures", "Podcasts", "Mantras", "Cars", "Cricket", "Code", "Techie"]
  return (
    <div className="flex mt-2 w-full mx-2">
        {
            buttonArray?.map((buttonName) => <Button key={buttonName} name={buttonName}/> )
        }
    </div>
  )
}

export default ButtonList
