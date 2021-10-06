import Dial from "./components/Dial.js";
import Body from "./components/Body.js";
import WidgetSelector from "./components/WidgetSelector.js";
import {useState} from 'react'


function App() {
  let [reelPosition,changePosition] = useState(0);
  let [widgetSelection,selectWidget] = useState(0);

  const increment = 34

  const shiftUp = () => {
      if (reelPosition < 0) {
      changePosition(reelPosition += increment)
      selectWidget(widgetSelection=0)
      }
  }

  const shiftDown = () => {
      if (reelPosition > (-2*increment)) {
      changePosition(reelPosition -= increment)
      selectWidget(widgetSelection=0)
      }
  }

  const selectLore = () => {
    if (widgetSelection !== 1) {
      selectWidget(widgetSelection = 1) } else {selectWidget(widgetSelection=0)}
  }

  const selectGameplay = () => {
    if (widgetSelection !== 2) {
      selectWidget(widgetSelection = 2) } else {selectWidget(widgetSelection=0)}
  }

  const selectMedia = () => {
    if (widgetSelection !== 3) {
      selectWidget(widgetSelection = 3) } else {selectWidget(widgetSelection=0)}
  }
  
  return (
    <section className="Contents">
      <div className="DialBox">
        <Dial reelPosition={reelPosition} shiftUp={shiftUp} shiftDown={shiftDown} />
      </div>
      <div className="MainBody">
        <Body reelPosition={reelPosition} widgetSelection={widgetSelection}/>
        
      </div>
        <WidgetSelector widgetSelection={widgetSelection} selectLore={selectLore} selectGameplay={selectGameplay} selectMedia={selectMedia}/>
    </section>
  );
}

export default App;
