import React, { useState } from 'react';
import Draggable from "react-draggable"
const Text = () => {
    const [editmode,setEditmode] = useState(false);
    const [val,setVal] = useState("Duuble Click to Edit")

  return (
    <div>
        <Draggable>

    {
        editmode ? (
            <input  onDoubleClick={(e)=> setEditmode(false)}  value={val} onChange={(e)=>setVal(e.target.value)} />
        ):(
            <h1 onDoubleClick={(e)=>setEditmode(true)} >{val}</h1>
        )
    }
        </Draggable>
    </div>
  );
}

export default Text;
