import React from 'react'
import {useState} from 'react'
import ReactPlayer from "react-player"
import { SliderDataDS,SliderDataBB, SliderDataER } from './SliderData.js'
import ImageSlider from './ImageSlider.js'

const Media = ({reelPosition}) => {
    let [mediaSelection,setMediaSelection] = useState(1)

const selectTrailer = () => {
    if (mediaSelection !== 1) {
        setMediaSelection(mediaSelection = 1) } 
  }

  const selectScreenshots = () => {
    if (mediaSelection !== 2) {
        setMediaSelection(mediaSelection = 2) }
  }


if (mediaSelection === 1) {   
    return (
        <div >
            <button className="mediaButton" onClick={selectTrailer}>Trailer</button>
            <button className="mediaButton" onClick={selectScreenshots}>Screenshots</button>
            <div className="mediaBox">
            <ReactPlayer 
                            url={reelPosition === -34 ? "https://www.youtube.com/watch?v=2Crk_GpxGQE" : reelPosition === 0 ? "https://www.youtube.com/watch?v=cWBwFhUv1-8" : reelPosition === -68 ? "https://www.youtube.com/watch?v=E3Huy2cdih0" : "https://www.youtube.com/watch?v=2kr7KDCsIws"}
                            controls
                            className = "react-player"
                            width='90%'
                            height='90%'
                            style = {{position:'absolute',left:'5%',top:'5%'}}
            />
            </div>
        </div>
    )
} else if (mediaSelection === 2) {
    return(
        <div >
            <button className="mediaButton" onClick={selectTrailer}>Trailer</button>
            <button className="mediaButton" onClick={selectScreenshots}>Screenshots</button>
            <div style={{marginTop:'3%'}}>
            <ImageSlider className = "image-slider" slides={reelPosition === 0 ? SliderDataDS : reelPosition === -34 ? SliderDataBB : SliderDataER }/>
            </div>
        </div>


    )

}

}

export default Media