import React from 'react';
import {Typography, Button, Grid, Box} from "@material-ui/core";
import Navbar from "./Navbar";


const Contact = () => {
    return (
        <Box component="div">
             <Navbar />
            <Grid container justify="center">
                <Box component="form">
                    <Typography variant="h5" style={{color: "tomato", textAlign: "center", textTransform: "uppercase"}}> 
                    Contact Information                   
                    </Typography>
                    <Typography variant="h5" style={{color: "tomato", textAlign: "center" }}> 
                    email: ChunnanLin7@gmail.com
                    </Typography>
                    <Typography variant="h5" style={{color: "tomato", textAlign: "center"}}> 
                    mobile: (908) 507-4105
                    </Typography>
                    
                </Box>
            </Grid>
        </Box>
       
    )
};

export default Contact;
