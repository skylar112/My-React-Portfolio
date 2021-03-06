import React, {useState} from "react";
//importing from materialize
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
//below allows menu to slide 
import Footer from "./Footer";
import MobileMenuSlider from "@material-ui/core/Drawer"
//import elements from materialize
import {
  AppBar,
  Toolbar,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
} from "@material-ui/core";

//import more elements from materialize
import {
  ArrowBack, //arrow next to portfolio in navbar
  AssignmentInd,
  Home,
  Apps,
}
 from "@material-ui/icons";
import avatar from "../images/color-profile.jpg";

//css styles
const useStyles = makeStyles((theme) => ({
  menuSliderContainer: {
    width: 200,
    background: "#B0E0E6",
    height: "100%",
  },
  //avatar below is for profile picture
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(19),
    height: theme.spacing(19 ),
  },
  //CSS for icon and icon description 
  listItem:{
    color: "pastel grey"
  }
}));

//button structure
const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    listPath: "/"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume",
    listPath: "/Resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio",
    listPath: "/Portfolio"
  },
  {
    listIcon: <Apps />,
    listText: "Contact",
    listPath: "/Contact"
  },
  
];


//Navbar
const Navbar = () => {
  const [state, setState] = useState ({
    right: false
  });
  
  const toggleSlider = ((slider, open) => () => {
    setState({ ...state, [slider]: open });
  });

  const classes = useStyles();

  const sideList = slider =>(
    <Box 
    className={classes.menuSliderContainer} 
    component="div"
    onClick={toggleSlider(slider, false)}
    >
    <Avatar className={classes.avatar} src={avatar} alt="Chu" />
    <Divider />
    <List>
      {menuItems.map((lsItem, key) =>(
        
        <ListItem button key={key} component={Link} to={lsItem.listPath}>
          <ListItemIcon className={classes.listItem} >{lsItem.listIcon}</ListItemIcon>
          <ListItemText 
          className={classes.listItem}
          primary={lsItem.listText}/> 
        </ListItem>
      ))}
    </List>
  </Box>
  )
  return (
    <>
     
      <Box component="nav">
        <AppBar position="static" style={{ background: "#708091" }}>
          <Toolbar>
            <IconButton onClick={toggleSlider("right", true)}>
              <ArrowBack style={{ color: "#222" }} />
            </IconButton>
            <Typography variant="h5">
              Menu
            </Typography>
            <MobileMenuSlider 
              anchor="left" 
              open={state.right}
              onClose={toggleSlider("right", false)}
              >
              {sideList("right")}
              <Footer/>                            
            </MobileMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
