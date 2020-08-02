import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar";




const useStyles = makeStyles( theme => ({
    mainContainer: {
        background: "#efebe9",
        maxwidth: "5rem",
        opacity: "60%"
    },

    timeLineYear: {
        textAlign: "center",
        fontSize: "1rem",
        background: "#c5cae9",
        color: "#283593",
        lineHeight: 1,
    }
}));

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
            <Typography variant="h3" className={classes.timeLineYear} align ="center" >
            <h1>2020</h1>
            <h2>Rutgers</h2>
            <h3>Full Stack Coding Bootcamp</h3>
            </Typography>
            <Typography variant="h3" className={classes.timeLineYear} align ="center" >
                <h1>2019</h1>
                <h2>Investors Bank</h2>
                <h3>Risk Management Operations Manager</h3>
            </Typography>
            <Typography variant="h3" className={classes.timeLineYear} align ="center" >
                <h1>2017</h1>
                <h2>Investors Bank</h2>
                <h3>Internal Loan Review Coordinator</h3>
            </Typography>
            <Typography variant="h3" className={classes.timeLineYear} align ="center" >
            </Typography>
        </Box>
    </Box>
    </>
    );
};

export default Resume;