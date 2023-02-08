import React from 'react'
import '../../Components/Common/ImageBanner.css'

const ImageBanner = ({ title }) => {
  return (
    <>
      <div className="bg-images">
        {title}
      </div>
    </>
  )
}

export default ImageBanner
