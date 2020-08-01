import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import Navbar from "./Navbar";
import project1 from "../images/pj1.jpg";
import project2 from "../images/pj2.jpg";
import project3 from "../images/pj3.jpg";
import project4 from "../images/pj4.jpg";


const useStyles = makeStyles({
  mainContainer: {
    background: "#546e7a",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem",
    margin: "5rem",
  },
});
const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Navbar />
      <Grid container justify="center">
        {/* Project 1 */}
        <Grid item xs={12} sm={8} sm={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                height="140"
                image={project1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Random Password Generator
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Follow the alert prompts, and it will generate a password. 
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Action Go!
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
         {/* Project 2 */}
         <Grid item xs={12} sm={8} sm={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 2"
                height="140"
                image={project2}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Recipe and Videos
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This application uses a search function to return relevant recipes and videos for the user inputted dish.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Action Go!
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/* Project 3 */}
        <Grid item xs={12} sm={8} sm={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 3"
                height="140"
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Family Guy Burger App
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This is a full stack application utilizing mySQL, Node, to demonstrate CRUD functions. The user can create burgers, update the burger or delete it.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Action Go!
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
        {/* Project 4 */}
        <Grid item xs={12} sm={8} sm={6}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 4"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  NBA Team Builder
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This application allows the user to input players and compare their key metrics and stats.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Action Go!
                </Button>
              </CardActions>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Portfolio;
