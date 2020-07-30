import React from 'react';
import Navbar from './Navbar';
import {Link} from 'react-router-dom';
import Header from './Header';
import Particles from 'react-particles-js';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    particlesCanva: {
        position: "absolute",
        opacity: "0.5"
    }
})

const Home = () => {
    const classes = useStyles()
    return (
    <>        
        <Navbar/>
        <Header/>
        <Particles 
        canvasClassName={classes.particlesCanva}
            params={{
                particles:{
                    number:{
                        value: 45,
                        density: {
                            enable: false,
                            value_area: 900
                        }
                    },
                    shape: {
                        type: "star",
                        stroke: {
                            width: 1,
                            color: "yellow"
                        }
                    },
                    size: {
                        value: 6,
                        random: true, 
                        anim: {
                            enable: true, 
                            speed: 8,
                            size_min: 0.1,
                            sync: true
                        }
                    },
                    opacity: {
                        value: 1,
                        random: true, 
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    }
                }
            }}
        />
    </>  
    );
};

export default Home;