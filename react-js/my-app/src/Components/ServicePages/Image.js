import React, { useState } from 'react'
import './Services.css'
import { ImageData } from '../ServicePages/ImageData'

const Image = () => {

    const [mainImage, setMainImage] = useState(ImageData[0]);
    return (
        <>

            <div className="img-container">
                <div> <img src={mainImage.url} alt="" /></div>
            </div>

            <div className="hover-container">
                {ImageData.map((curElm, index) => {
                    return (
                        <div className='ser-imag'>
                            <img src={curElm.url} key={index} onClick={() => setMainImage(curElm)} alt=""/>
                        </div>
                    )
                })};
            </div>
        </>
    )
}

export default Image
