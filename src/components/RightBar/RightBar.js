import React from 'react';
import { makeStyles } from '@mui/styles';
import { createTheme, Container, Typography, Link, AvatarGroup, Avatar, Card, IconButton, CardMedia } from '@mui/material';
import {Close} from '@mui/icons-material';

const defaultTheme = createTheme();

const useStyles = makeStyles(
    (theme) => {
        return {
            Container: {
                position: "sticky",
                top: 0,
                paddingTop: theme.spacing(10),
            },
            title: {
                fontSize: 16,
                fontWeight: "600 !important",
                color: "#555",
            },
            link: {
                marginRight: "5px !important",
                color: "#555",
                cursor: "pointer",
            },
            avatarGroup: {
                display: "inline-flex",
                // [theme.breakpoints("sm")]: {
                //     max: 3,
                // },
            },
            card: {
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(2),
            },
            cardHeader: {
                fontSize:"16px !important",
                display: 'flex',
                alignItem: 'center',
                justifyContent: "space-between",
                padding: theme.spacing(2),
            },
            cardMedia: {
                height: 100,
            }
        };
    },
    { defaultTheme },
);
const RightBar = () => {
    const classes = useStyles();
    return (
        <>
        <Container className={classes.Container}>
            <Typography className={classes.title} >
                Online Friends
            </Typography>
            <AvatarGroup sx={{display: 'inline-flex'}} max={6}>
                <Avatar atl="Mamunur Rashid" src="https://mui.com/static/images/avatar/1.jgp" />
                <Avatar atl="Mamunur Rashid" src="https://mui.com/static/images/avatar/2.jgp" />
                <Avatar atl="Mamunur Rashid" src="https://mui.com/static/images/avatar/3.jgp" />
                <Avatar atl="Mamunur Rashid" src="https://mui.com/static/images/avatar/4.jgp" />
                <Avatar atl="Mamunur Rashid" src="https://mui.com/static/images/avatar/5.jgp" />
                <Avatar atl="Mamunur Rashid" src="https://mui.com/static/images/avatar/6.jgp" />
                <Avatar atl="Mamunur Rashid" src="https://mui.com/static/images/avatar/7.jgp" />
                <Avatar atl="Mamunur Rashid" src="https://mui.com/static/images/avatar/8.jgp" />
                <Avatar atl="Mamunur Rashid" src="https://mui.com/static/images/avatar/9.jgp" />
            </AvatarGroup>
            <Card className={classes.card}>
                <div className={classes.cardHeader}>
                    <div>
                        <Typography className={classes.title}>Hot Deal</Typography>
                        <Typography variant="body2">02 September 2022</Typography>
                    </div>
                    <IconButton><Close /></IconButton>
                    
                </div>
                <CardMedia className={classes.cardMedia} image="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" title="Natural" />
                
            </Card>
            <Typography className={classes.title} >
                Categories
            </Typography>
            <Link className={classes.link} variant="body2">
                Pivacy
            </Link>
            <Link className={classes.link} variant="body2">
                Terms
            </Link>
            <Link className={classes.link} variant="body2">
                Support
            </Link>
            <br />
            <Link className={classes.link} variant="body2">
                Sports
            </Link>
            <Link className={classes.link} variant="body2">
                Travel
            </Link>
            <Link className={classes.link} variant="body2">
                Movies
            </Link>
            <Link className={classes.link} variant="body2">
                Intertaiment
            </Link>
            <Link className={classes.link} variant="body2">
                Songs
            </Link>
        </Container>
        </>
    );
};

export default RightBar;