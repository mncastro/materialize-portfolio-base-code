import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Particles from "react-particles-js";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles({
    particlesBackground: {
        position: "absolute"
    }
})

const Home = () => {

    const classes = useStyles() 

    return (
        <div>
            <Navbar />
            <Header/>
            <Particles
                canvasClassName={classes.particles}
                params={{
                    "particles": {
                        "number": {
                            "value": 70
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
            />
        </div>
    )
}

export default Home
