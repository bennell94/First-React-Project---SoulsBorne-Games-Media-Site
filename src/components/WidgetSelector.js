import React from 'react'

const WidgetSelector = ({widgetSelection,selectLore,selectGameplay,selectMedia}) => {
    return (
        <div className='wHolder'>
           <button className={widgetSelection===1 ? 'selectedWidget':'widget'} onClick={selectLore}>
                {widgetSelection === 1 ? "Return" : "Lore"}
            </button>  
            <button className={widgetSelection===2 ? 'selectedWidget':'widget'} onClick={selectGameplay}>
                {widgetSelection === 2 ? "Return" : "Gameplay"}
            </button>  
            <button className={widgetSelection===3 ? 'selectedWidget':'widget'} onClick={selectMedia}>
                {widgetSelection === 3 ? "Return" : "Media"}   
            </button>  
        </div>
    )
}


export default WidgetSelector