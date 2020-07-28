import React from 'react';
import {Typography, Avatar, Grid, Box} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typed from "react-typed";
import avatar from "../images/color-profile.jpg";

//Inline CSS
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(35),
        height: theme.spacing(35),
        margin: theme.spacing(2),
    },

    title:{
        color: "white"
    },
    
    subtitle:{
        color: "tomato",
        marginBottom: "3rem",
           
    },
    typedContainer:{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))
const Header = () => {
    const classes =useStyles()
    return (
    <Box className={classes.typedContainer}>
        <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Chu Lin"/>
        </Grid>
        <Typography className={classes.title} variant="H1">
        <Typed strings={["Chu Lin"]} typeSpeed={280} />
        
        </Typography>
        <br/>
        <Typography className={classes.subtitle} variant="H3">
        <Typed 
            strings={["Web Design", "Web Development", "All Around Hustler"]} 
            typeSpeed={40}
            backSpeed={90}
            loop
        />
        </Typography>
    </Box>
    );
};

export default Header;