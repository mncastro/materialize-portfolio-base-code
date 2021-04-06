import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import LeftMenu from "@material-ui/core/Drawer" 
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import avatar from "../profile-pic.jpg"

const useStyles = makeStyles(theme => ({
    navSlideContainer: {
        width: 250,
        background: "#212121",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "05rem auto",
        width: theme.spacing(18),
        height: theme.spacing(18)
    },
    color: {
        color:  "#b2ebf2"
    }
}));

const barItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath:"/portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact",
        listPath: "/contact"
    }
]

function Navbar() {
    const [state, setState] = useState({
        left: false
    })

    const toggleBar = (slider, open) => () => {
        setState({...state, [slider]:open})
    }
    const classes = useStyles()
    const sideList = slider => (
        <Box className={classes.navSlideContainer} component="div" onClick={toggleBar(slider, false)}>
                <Avatar className={classes.avatar} src={avatar} alt="Profile Picture" />
                <Divider />
                <List>
                    {barItems.map((lsItem, key)=>(
                    <ListItem button key={key} component={Link} to={lsItem.listPath} >
                            <ListItemIcon className={classes.color}>
                              {lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.color} primary={lsItem.listText} />
                        </ListItem>
                    ))}
                </List>
            </Box>
    )
    return (
        <>
            <Box component="div">
            </Box>
        <Box component="nav">
            <AppBar position="static" style={{background: "#212121"}}>
                <Toolbar>
                    <IconButton onClick={toggleBar("left", true)}>
                    <ArrowBack style={{color: "white"}} />
                    </IconButton>
                    <Typography variant="h5">
                            Mario Castro's Portfolio
                </Typography>
                        <LeftMenu anchor="right" open={state.left}
                        onClose={toggleBar("left", false)}>
                        {sideList("left")}
                        </LeftMenu>
                </Toolbar>
            </AppBar>
        </Box>
        </>    
    )
}

export default Navbar
