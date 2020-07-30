import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar";


const useStyles = makeStyles( theme => ({
    mainContainer: {
        background: "#233",
        maxwidth: "5rem"
    },
    timeLine:{
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        // "&:before":{
        //     content: "''",
        //     position: "absolute",
        //     height: "100%",
        //     border: "1px solid green",
        //     right: "40px",
        //     top : 0
        // },
        // "$:after":{
        //     content: "''",
        //     display: "table",
        //     clear: "both"
        //},

        // [theme.breakpoints.up("md")]:{
        //     padding: "2rem",
        //     "&:before": {
        //         left: "calc(50% - 1px)",
        //         right: "auto"
        //     }
        // }
        //look on 2b 3min in
    },
    timeLineYear: {
        textAlign: "center",
        maxwidth: "9.375rem",
        margin: "0 3rem 0auto",
        fontSize: "1.8rem",
        background: "#8559da",
        color: "white",
        lineHeight: 1,
        padding: "0.5 rem 0 1rem",
        "&:before":{
            display: "none"
        },
        // [theme.breakpoints.up("md")]{
        //     textAlign:"center",
        //     margin: "0 auto",
        //     "&:nth-of-type(2n)": {
        //         float: "none",
        //         margin: "0 auto"
        //     },
        //     "&:nth-of-type(2n)before": {
        //         display: "none"
        //     }
        // }
    }
}));


// should be  <Box component="header"  className={classes.mainContainer}> below
const Resume = () => {
    const classes = useStyles();
    return( 
    <>
    <Navbar />
    <Box component="header" className={classes.mainContainer}>
        <Typography variant="h3" align = "center">
            Working Experience
        </Typography>
         <Box component ="div" className ={classes.timeLine}>
            <Typography variant="h5" className={classes.timeLineYear} align ="center" >
            <h1>2020</h1>
            <h2>Rutgers Full Stack Coding Bootcamp</h2>
            </Typography>
        </Box>
        <Box component ="div" className ={classes.timeLine}>
            <Typography variant="h5" className={classes.timeLineYear} align ="center" >
                <h1>2019-2017</h1>
                <h2>Investors Bank </h2>
                <h3>Risk Management Operations Manager</h3>
            </Typography>
        </Box>
    </Box>
    </>
    );
};

export default Resume;