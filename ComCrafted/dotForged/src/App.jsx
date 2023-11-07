import { BuilderElement, Panel } from './Components/ServerUI/Builder'
import { useState } from "react";

function App() {
  return (<>
  
    <Panel>
      <BuilderElement type="Stuff"/>
      <BuilderElement type="Stuff"/>
      <BuilderElement type="Stuff"/>
      <BuilderElement type="Stuff"/>
      <BuilderElement type="Stuff"/>
    </Panel>

  </>)
}

export default App;
