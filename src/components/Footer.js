import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { BottomNavigation, BottomNavigationAction} from "@material-ui/core"
import LinkedIn from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";


const useStyles = makeStyles({
root: {
"& .MuiBottomNavigationAction-root": {
    minWidth: 0,
    maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "white",
            "&:hover": {
                fill: "tomato",
                fontSize: "1.8rem",
            },
        }
    },
});
const Footer = () => {
    const classes = useStyles();
    return (
        <BottomNavigation width="auto" style={{background: "#233"}}>
            <BottomNavigationAction
            className={classes.root}
                style={{padding: 0}}
                icon={<LinkedIn/>}/>
                
            <BottomNavigationAction
            className={classes.root}
                style={{padding: 0}}
                icon={<GitHub/>}/>
            
        </BottomNavigation>
    )
}

export default Footer;
