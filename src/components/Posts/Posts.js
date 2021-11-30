import { Comment, MoreVert, Share, ThumbUp } from '@mui/icons-material';
import { Avatar, Card, CardHeader, IconButton, CardMedia, CardContent, Typography, CardActions, createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const defaultTheme = createTheme();

const useStyes = makeStyles(
    (theme) => {
        return {
            card: {
                marginBottom: theme.spacing(5),
            },
            cardMedia: {
                height: 250,
                fontSize: "25px !important",
                [theme.breakpoints.down('sm')]: {
                    height: 150,
                },
            },
            cardActions: {
                display: "flex",
                justifyContent: "space-between",
            },
            postIcons: {
                fontSize: "16px !important",
            }
        };
    },
    { defaultTheme },
);

const Posts = () => {
    const classes = useStyes();
    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    <Avatar>R</Avatar>
                }
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
                title="Md. Mamunur Rashid"
                subheader="September 14, 2016"
            />
            <CardMedia className={classes.cardMedia} image="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg" title="Natural" />
            <CardContent>
                <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maiores modi suscipit atque praesentium beatae nostrum iure cum odit. Eum quae doloremque fugiat cupiditate numquam cum maxime, unde quidem ullam.</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <IconButton className={classes.postIcons}>
                    <ThumbUp className={classes.postIcons} /> Like
                </IconButton>
                <IconButton className={classes.postIcons}>
                    <Comment className={classes.postIcons} /> Comments
                </IconButton>
                <IconButton className={classes.postIcons}>
                    <Share className={classes.postIcons} /> Share
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Posts;