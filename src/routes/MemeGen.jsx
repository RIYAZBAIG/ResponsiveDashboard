import React, { useEffect, useState } from 'react';
import MemeList from './MemeList';
// import { getAllMemes } from '../Components/Memes';
import { Link } from 'react-router-dom';
import { getAllMemes } from './memes';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
const MemeGen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 

  useEffect(() => {
    console.log(data);
    getAllMemes()
      .then((memes) => setData(memes.data.memes))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }



  


  return (
    <div  style={{display:"flex", marginLeft:"-150px", marginTop:"-220px"}} >

      
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px', marginRight:"50px" }}>
      {data.map((el) => (
        <MemeList key={el.id} img={el.url}  title={el.name} />
        
        ))}
        </div>
    </div>
  );
}

export default MemeGen;
