import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Button } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "",
        padding: "2rem",
        color: "white"
    },

    timeline: {
        position: "center",
        padding: "2rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&after": {
            content: "''",
            display: "table",
            clear: "both"
        }
        // [theme.breakpoint.up("md")]: {
        //     padding: "2rem",
        //     "&:before": {
        //         left: "calc(50%- 1px)",
        //     right: "auto"    
        //     }
        // }
    }
}))

    const Contact = () => {
        const classes = useStyles();
        return (
            <>
                <Navbar />
                <Box component="header" className={classes.mainContainer}>
                    <Typography variant="h4" align="center">
                        <b> Do you want to collaborate? Looking for a freelancer?  </b>
                    </Typography>
                    <>
                    </>
                    <Box component="div" className={classes.timeline}>
                        <Typography variant="h4" align="center">
                            Sent an email to:
                            &nbsp; 
                            <u> 
                            <b>mnc634@utexas.edu</b>
                            </u>
                        </Typography>
                    <Box component="header" className={classes.timeline}>
                            <Typography variant="h4" align="center">
                                <b>
                                Or:
                                </b> 
                            </Typography>
                            <Typography variant="h4" align="center" color="white">
                                <p>Visit my </p>
                                    <Button variant="contained" color="primary" href="https://www.linkedin.com/in/mario-nicol%C3%A1s-castro-villarreal-78169335/">
                                    <b>LinkedIn</b>
                                    </Button>
                                &nbsp;
                                    <Button variant="contained" color="primary" href="https://github.com/mncastro">
                                    <b>Github Profile</b>
                                </Button>
                                &nbsp;
                                    <Button variant="contained" color="primary" href="https://drive.google.com/uc?export=download&id=1eur2GDNStqo7tAmDjdUxgpq2d7fOfBXQ">
                                    <b>Download My CV</b>
                                    </Button>
                            </Typography>
                        </Box>
                </Box>
                </Box>
            </>
        )
    }

    export default Contact



