import React from 'react';
import Navbar from './Navbar';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import project1 from "../images/burger-app-demo.png";
import project2 from "../images/covid-search.png";
import project3 from "../images/dentapp-demo.png";
import project4 from "../images/budget-tracker-demo.png";
import project5 from "../images/tracker-demo-1.png";
import project6 from "../images/weather-api.png";
import project7 from "../images/omeka-exhibit-bilingual.png";

const useStyles = makeStyles({
    MainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"
    }
})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.MainContainer}>
            <Navbar />
            <Grid container justify="center">
                {/* Here's Project One */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img"
                            alt="Project 1"
                            height="140"
                            image={project1}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Express Burger App
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                This is a simple web application that presents the user with a list of burgers that they can choose to eat. The user can also add additional burger names through an input box or delete the existing burgers from the list.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href="https://github.com/mncastro/Burger-Express-App"
                                    size="small"
                                    color="primary">
                                    Code
                                </Button>
                                <Button
                                    href="https://secure-ravine-98051.herokuapp.com/"
                                    size="small"
                                    color="primary">
                                    Demo
                                </Button>
                            </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>
                {/* Here's Project Two */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img"
                            alt="Project 2"
                            height="140"
                            image={project2}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Mexico City's Safe Covid Search
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                ​A tool that retrieves Mexico's government's current numbers of positive COVID-19 cases and hospitalization rates of each municipality/city in Mexico City (September 2020). The application creates an estimated percentage of cases that the user can use to know the level of risk and "precaution" needed in each area.​
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href="https://github.com/ibmug/proyecto_1"
                                    size="small"
                                    color="primary">
                                    Code
                                </Button>
                                <Button
                                    href="https://ibmug.github.io/proyecto_1/"
                                    size="small"
                                    color="primary">
                                    Demo
                                </Button>
                            </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>
            </Grid>
            {/* Start of new grid */}
            <Grid container justify="center">
                {/* Here's Project Three */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img"
                            alt="Project 3"
                            height="140"
                            image={project3}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    DentAPPointment
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                ​DentApp is a web application that can help dentists and other medical specialists install a simple server-based appointment system for their clinics or private offices.​
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href="https://github.com/jpineda30/Project-2"
                                    size="small"
                                    color="primary">
                                    Code
                                </Button>
                                <Button
                                    href="https://protected-sands-23388.herokuapp.com/"
                                    size="small"
                                    color="primary">
                                    Demo
                                </Button>
                            </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>
                {/* Here's project 4 inside same grid */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img"
                            alt="Project 4"
                            height="140"
                            image={project4}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Online Budget Tracker 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                ​Progressive Web Application (PWA) where the user can register income and deduct expenses from their monthly budget. The application displays the stats of currennt expenses in a chart. As a PWA, the application is fully functional online and offline.​
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href="https://github.com/mncastro/budget-tracker-offline"
                                    size="small"
                                    color="primary">
                                    Code
                                </Button>
                                <Button
                                    href="https://vast-woodland-94625.herokuapp.com/"
                                    size="small"
                                    color="primary">
                                    Demo
                                </Button>
                            </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>
            </Grid>
            <Grid container justify="center">
                {/* Here's Project 5 inside new grid */}
            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img"
                            alt="Project 5"
                            height="140"
                            image={project5}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Mongo Fitness Tracker
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                ​Fitness Tracker is a web application where the user can register resistance and/or cardio workout routines and keep track of their exercises statistics. The application displays the stats of the current exercise and displays them through a variety of visual tools, such as piecharts and linecharts..
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href="https://github.com/mncastro/mongo-workout-tracker"
                                    size="small"
                                    color="primary">
                                    Code
                                </Button>
                                <Button
                                    href="https://pacific-thicket-69674.herokuapp.com/?id=602c546145fdee00150df40d"
                                    size="small"
                                    color="primary">
                                    Demo
                                </Button>
                            </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>
                {/* Here's project 6 inside same grid */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img"
                            alt="Project 6"
                            height="140"
                            image={project6}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Weather Dashboard 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                ​A simple Weather Dashboard that allows the user to search for a city's current weather.​
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href="https://github.com/mncastro/06-Weather-Dashboard"
                                    size="small"
                                    color="primary">
                                    Code
                                </Button>
                                <Button
                                    href="https://mncastro.github.io/06-Weather-Dashboard/"
                                    size="small"
                                    color="primary">
                                    Demo
                                </Button>
                            </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>
            </Grid>
            <Grid container justify="center">

            <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img"
                            alt="Project 7"
                                height="80"
                                width="100"
                            image={project7}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Omeka Online Exhibit (UT Austin) 
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                I coordinated and assembled this bilingual online exhibit for the Benson Latin American Collection in The University of Texas at Austin using the humanities webpage tool OMEKA. Undergrad students curated the materials and label descriptions. All of them form part of the Benson Collection’s treasure trove of rare documents, a collection unlike any other in the world.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    href="https://latinamericanviews.omeka.net/exhibits/show/latin-america-19th-century"
                                    size="small"
                                    color="primary">
                                    Visit Exhibit
                                </Button>
                            </CardActions>
                    </CardActionArea>
                </Card>
                </Grid>
                </Grid>
        </Box>    
    )
}

export default Portfolio