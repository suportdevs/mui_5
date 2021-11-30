import React from 'react';
import { Container, Typography} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Android, Bookmark, Camera, Home, List, Logout, Person, PlayCircle, Settings, Storefront } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

const defaultTheme = createTheme();

const useStyles = makeStyles(
    (theme) => {
        return {
            container: {
                height: "100vh",
                position: "sticky",
                top: 0,
                paddingTop: theme.spacing(10),
                [theme.breakpoints.up("sm")]: {
                    borderRight: "1px solid #e9e9e9",
                },
                [theme.breakpoints.down("sm")]: {
                    backgroundColor: theme.palette.primary.main,
                }
            },
            item: {
                display: 'flex',
                alignItems: 'center',
                marginBottom: theme.spacing(3),
                color: "#555555",
                [theme.breakpoints.up("sm")]: {
                    cursor: "pointer",
                },
                [theme.breakpoints.down("sm")]: {
                    color: "#fff",
                    marginBottom: theme.spacing(2),
                    textAlign: "center",
                    margin: "0 auto",
                }
            },
            icon: {
                [theme.breakpoints.up("sm")]: {
                    fontSize: "17px !important",
                },
            },
            text: {
                // fontSize: "15px !important",
                fontWeight: "600 !important",
                paddingLeft: theme.spacing(1),
                [theme.breakpoints.down("sm")]: {
                    display: "none",
                },
            }
        };
    },
    { defaultTheme },
);

const LeftBar = () => {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon}/>
                <Typography className={classes.text}>HomePage</Typography>
            </div>
            <div className={classes.item}>
                <Person className={classes.icon}/>
                <Typography className={classes.text}>Friends</Typography>
            </div>
            <div className={classes.item}>
                <List className={classes.icon}/>
                <Typography className={classes.text}>Lists</Typography>
            </div>
            <div className={classes.item}>
                <Camera className={classes.icon}/>
                <Typography className={classes.text}>Carema</Typography>
            </div>
            <div className={classes.item}>
                <PlayCircle className={classes.icon}/>
                <Typography className={classes.text}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <Android className={classes.icon}/>
                <Typography className={classes.text}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon}/>
                <Typography className={classes.text}>Collections</Typography>
            </div>
            <div className={classes.item}>
                <Storefront className={classes.icon}/>
                <Typography className={classes.text}>MarketPlace</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon}/>
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <Logout className={classes.icon}/>
                <Typography className={classes.text}>Log Out</Typography>
            </div>
        </Container>
    );
};

export default LeftBar;