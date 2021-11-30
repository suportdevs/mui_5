import { Container } from '@mui/material';
import Posts from '../Posts/Posts';
import React from 'react';
import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const defaultTheme = createTheme();

const useStyles = makeStyles(
    (theme) => {
        return {
            Container: {
                paddingTop: theme.spacing(10),
            }
        };
    },
    { defaultTheme },
);
const Feed = () => {
    const classes = useStyles();
    return (
        <Container className={classes.Container}>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
        </Container>
    );
};

export default Feed;