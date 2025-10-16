import axios from "axios";
import { useState } from "react";
function App(){
  const [name,setName]=useState("VCE")

  return(
    <div>
      {name}
      <br/>
      <button onClick={()=>setName(";dag")} className="border outline-2">Change</button>
    </div>
  )
}

export default App;


  