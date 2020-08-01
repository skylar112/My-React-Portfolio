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
import project1 from "../images/background2.jpg";
import project2 from "../images/pj2.jpg";
import project3 from "../images/pj3.jpg";
import project4 from "../images/pj4.jpg";

const useStyles = makeStyles({
  mainContainer: {
    background: "#233",
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
                  Project 1
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Project 1 is awesome, better than project 0
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
                  Project 2
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Project 2 is awesome, better than project 1
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
                image={project3}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 3
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Project 3 is awesome, better than project 1
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
                alt="Project 2"
                height="140"
                image={project4}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Project 4
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Project 4 is awesome, better than project 1
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
