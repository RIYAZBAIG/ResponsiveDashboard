import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Grid, Button, CardContent } from '@mui/material';
import Rating from '@mui/material/Rating';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,

} from "@material-tailwind/react";
const Products = () => {

    const [data, setData] = useState([]);







    const getData = async () => {
        const result = await axios.get("https://fakestoreapi.com/products");
        console.log(result.data);
        setData(result.data)
    }
    console.log("result", data);

    useEffect(() => {
        getData();
    }, []);
    return (
        
        <div style={{marginLeft:"300px"}} >
            <Grid container spacing={2}>
                {data.map((item) => (
                    <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
                        <Card style={{ height: '100%', width: '100%' }}>
                            <CardHeader title="Card Title" subheader="Card Subtitle" />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary">
                                    Id: {item.id}, <br />
                                    Title: {item.title}
                                </Typography>
                                <img src={item.image} alt={`Item ${item.id}`} style={{ width: '50%' }} />
                                <Typography variant="body2" color="textSecondary">
                                    ID: {item.id}, <br />
                                    Title: {item.title}
                                    <Rating name={`rating-${item.id}`} value={3} readOnly max={5} />
                                </Typography>

                            </CardContent>
                            <CardFooter>
            
                                <Button variant='contained' color='success' style={{ padding: "5px", borderRadius: "5px" }} >Read more</Button>
                            </CardFooter>
                        </Card>
                    </Grid>
                ))}
            </Grid>


        </div>
    );
}

export default Products;
