import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from "@material-ui/icons/Home";
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Send from '@material-ui/icons/Send';
import SearchIcon from '@material-ui/icons/Search';
import Logo from "./subComponents/Logo"
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from "react-router-dom"

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      background: theme.palette.secondary,
    }),
    borderBottom: "4px red solid",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 30,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#242D33",
    border: "none",
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(8),
    },
    backgroundColor: "#242D33",
    border: "none",
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navLinks = {
    textDecoration: "none",
    color: "white"
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
      color="primary"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <Link to="/">
              <Logo />
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        color="secondary"
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <CloseIcon color={"white"} />}
          </IconButton>
        </div>
        <List>
          <Tooltip title='Home' placement='right'>
            <Link to="/" style={navLinks} title="Home" onClick={handleDrawerClose}>
              <ListItem button key={"Home"}>
                  <ListItemIcon>
                    <HomeIcon style={{color: "white"}} />
                  </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItem>
            </Link>
          </Tooltip>
          <Tooltip title='Products' placement='right'>
            <Link to="/categories" style={navLinks} title="Products" onClick={handleDrawerClose}>
              <ListItem button key={"Products"}>
                  <ListItemIcon>
                    <SportsFootballIcon style={{color: "white"}} />
                  </ListItemIcon>
                <ListItemText primary={"Products"} />
              </ListItem>
            </Link>
          </Tooltip>
          <Tooltip title='Catalogs' placement='right'>
            <Link to="/catalogs" style={navLinks} title="Catalogs" onClick={handleDrawerClose}>
              <ListItem button key={"Catalogs"}>
                  <ListItemIcon>
                    <ImportContactsIcon style={{color: "white"}} />
                  </ListItemIcon>
                <ListItemText primary={"Catalogs"} />
              </ListItem>
            </Link>
          </Tooltip>
          <Tooltip title='Contact' placement='right'>
            <Link to="/contact" style={navLinks} title="Contact" onClick={handleDrawerClose}>
              <ListItem button key={"Contact"}>
                  <ListItemIcon>
                    <Send style={{color: "white"}} />
                  </ListItemIcon>
                <ListItemText primary={"Contact"} />
              </ListItem>
            </Link>
        </Tooltip>
        <Tooltip title='Search' placement='right'>
          <Link to="/search" style={navLinks} title="Search" onClick={handleDrawerClose}>
            <ListItem button key={"Search"}>
                <ListItemIcon>
                  <SearchIcon style={{color: "white"}} />
                </ListItemIcon>
              <ListItemText primary={"Search"} />
            </ListItem>
          </Link>
        </Tooltip>
        </List>
      </Drawer>
    </div>
  );
}

export default MiniDrawer