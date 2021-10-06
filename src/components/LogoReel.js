import React from 'react';
import eldenringlogo from './images/eldenringlogo.png';
import bloodbornelogo from './images/bloodbornelogo.png';
import darksoulsbonfire from './images/darksoulsbonfire.png';

const LogoReel = ({reelPosition}) => {

    var ctrans = 'translate(0px,'+reelPosition+'%)';
    var css = {
	 transform: ctrans 
    }
		

    return (
        <div className="reel" style= {css} >
            <img className="logo" src={darksoulsbonfire}  alt="Dark Souls"/>
            <img className="logo" src={bloodbornelogo} style={{width:'45%', height:'45%', filter:'invert(100%)', marginTop:'65%'}} alt="bloodborne"/>
            <img className="logo" src={eldenringlogo} style={{width:'105%', marginTop:'75%'}}alt="elden ring"/>
        </div>


    )
}

export default LogoReel