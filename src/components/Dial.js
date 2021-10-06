import React from 'react'
import LogoReel from './LogoReel'
import carrot from './images/carrot.png'

const Dial = ({reelPosition,shiftUp,shiftDown}) => {

    return (

        <div>
            <div className="DialBG"/>

            <div className='dial'>
                
                <form>
                
                    <button type="button" className='upArrow'>
                        <img src={carrot} className='carrot' style={{filter: reelPosition === 0 ? 'invert(10%)' :'invert(75%)'}} alt='up arrow' onClick={shiftUp}/>
                    </button> 

                    <div className="spacer"></div>

                    <LogoReel id="LogoReel" reelPosition={reelPosition}/>

                    <button type="button" className='downArrow'>
                        <img src={carrot} className='carrot'  style={{filter: reelPosition === -68 ? 'invert(10%)' :'invert(75%)'}} alt='down arrow' onClick={shiftDown}/>
                    </button> 
                    
                </form>   
                 
            </div>
        </div>

        
    )
}

export default Dial