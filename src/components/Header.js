import React from 'react';
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
import Typed from "react-typed";
import avatar from "../profile-pic.jpg"

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "#00e5ff"
    },
    subtitle: {
        color: "#1de9b6",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Picture Profile" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Welcome to Mario Castro's Portfolio"]} typeSpeed={45} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Academic Researcher", "Translator", "Web Developer", "Teacher"]}
                    typeSpeed={45}
                    backSpeed={55}
                    loop
                />
            </Typography>
        </Box>
    );
};

export default Header