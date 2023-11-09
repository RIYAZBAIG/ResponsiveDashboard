import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card,Button } from "react-bootstrap";
const MemeList = (props) => {
  const [memes, setMemes] = useState([]);
  const navigate = useNavigate();

  return (
    <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <Card style={{width: "18rem", margin:"255px", marginBottom:"10px"}} >
        <Card.Img variant='top' src={props.img} height="250px" width="250px" />
        <Card.Body >
          <Card.Title>{props.title}</Card.Title> 
          
          <Button variant="primary" onClick={e => navigate(`/edit?url=${props.img}`)} > edit</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MemeList;
