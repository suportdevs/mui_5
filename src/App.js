import * as React from 'react';
import './App.css';
import Navber from './components/Navber/Navber';
import Welcome from './components/Welcome/Welcome';
import LeftBar from './components/LeftBar/LeftBar';
import AddItems from './components/AddItems/AddItems';
import Feed from './components/Feed/Feed';
import RightBar from './components/RightBar/RightBar';
import { Grid } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const defaultTheme = createTheme();

const useStyles = makeStyles(
  (theme) => {
    return {
      RightBar: {
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
    };
  },
  { defaultTheme },
);

function App() {
  const classes = useStyles();
  return (
    <>
      {/* <Navber></Navber> */}
      <Welcome></Welcome>
      <Grid container>
        <Grid item sm={3} xs={2}>
            <LeftBar></LeftBar>
        </Grid>
        <Grid item sm={6} xs={10}>
            <Feed></Feed>
        </Grid>
        <Grid item sm={3} className={classes.RightBar}>
            <RightBar></RightBar>
        </Grid>
        
      </Grid>
      <AddItems/>
    </>
  );
}

export default App;
