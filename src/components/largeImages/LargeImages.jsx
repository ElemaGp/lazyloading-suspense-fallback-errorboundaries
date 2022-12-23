import "./largeImages.css"
import React from 'react'
import {data} from "../../Images"

const LargeImages = () => {
  return (
    <div className="largeImagesContainer">
      {data.map((largeimage)=>(
        <div className="eachImage" key={largeimage.id}>
            <img src={largeimage.image} alt="anImage" />
        </div>
      )
      )}
    </div>
  )
}

export default LargeImages
