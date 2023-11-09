import React, { useState, createRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
// import Text from "../Components/Text";
import Text from "./Text";
import { exportComponentAsJPEG } from 'react-component-export-image';
const Edit = () => {
    const [params] = useSearchParams();
    const [count,setCount] = useState(0);
    const urlValue = (params.get("url"));
    console.log(urlValue);
   

    const addText =()=>{
        setCount (count+1);

    }
  const memeRef = createRef();

    return (
        <div style={{marginLeft:"300px"}} >

        <div ref={memeRef} >
            <img src={params.get("url")} width="250px" height="250px" />
            {
                Array(count).fill(0).map(e => <Text/>)
            }
        </div>
        <Button onClick={addText} style={{marginLeft:"45px"}}  >Add text</Button>
        <Button onClick={() => exportComponentAsJPEG(memeRef)} color="success"  style={{marginLeft:"45px"}} >
         Export As JPEG
       </Button>
        </div>
    );
}

export default Edit;
