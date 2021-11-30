import * as React from 'react';
import { useState }from 'react';
import { AppBar, Toolbar, Typography, InputBase, Badge, Avatar } from '@mui/material';
import { Search, Mail, Notifications, Cancel } from '@mui/icons-material';
import { createTheme, alpha } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) => {

    return {
      root:{
        fontWeight: "bold !important",
      },
      Toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      Search: {
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        [theme.breakpoints.down('sm')]: {
          display: (props) => (props.open ? 'flex' : 'none'),
          width: '75%',
        },

      },
      searchItems: {
        marginLeft: theme.spacing(1),
      },

      AppBarIcons: {
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          display: (props) => (props.open ? 'none' : 'flex'),
        },
      },
      AppBarRightIcons: {
        marginRight: theme.spacing(2),
      },
      searchBtn: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: "none !important",
        },
      },
      searchCancelBtn: {
        [theme.breakpoints.up('sm')]: {
          display: "none !important",
          right: 0,
        }
      }
    };
  },
  { defaultTheme },
);

const Welcome = () => {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
      <AppBar position="fixed">
        <Toolbar className={classes.Toolbar}>
          <Typography className={classes.root} variant="h5">LOGO</Typography>
          <div className={classes.Search}>
            <Search className={classes.searchItems} />
            <InputBase className={classes.searchItems} placeholder="Search..." />
            <Cancel className={classes.searchCancelBtn} onClick={()=>setOpen(false)} />
          </div>
          <div className={classes.AppBarIcons}>
            <Search className={classes.searchBtn} onClick={()=>setOpen(true)}/>
            <Badge className={classes.AppBarRightIcons} badgeContent={4} color="secondary">
              <Mail />
            </Badge>
            <Badge className={classes.AppBarRightIcons} badgeContent={5} color="secondary">
              <Notifications />
            </Badge>
            <Avatar>M</Avatar>
          </div>
        </Toolbar>
      </AppBar>
  );
};
export default Welcome;