import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom'
import Logo from './Logo'
import HomeIcon from "@material-ui/icons/Home";
import SportsFootballIcon from '@material-ui/icons/SportsFootball';
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import Send from '@material-ui/icons/Send';
import categoryData from '../../assets/data/categoryData'

import './TopNav.css'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function TopNav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu className='topnav-products-menu'
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
        {categoryData.map(item => {
            return <Link to={`/${item.urlName}/subcategories`}>
                        <MenuItem onClick={handleMenuClose}>{item.name}</MenuItem>
                    </Link>
        })}
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu className='topnav-products-menu-mobile'
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to='/'>
            <IconButton aria-label="Home" color="inherit">
                <HomeIcon />
            </IconButton>
        </Link>
        <Link to='/'>
            <p>Home</p>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="Products"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <SportsFootballIcon />
        </IconButton>
        <p>Products</p>
      </MenuItem>
      <MenuItem>
      <Link to='/catalogs'>
        <IconButton aria-label="Catalogs" color="inherit">
            <ImportContactsIcon />
        </IconButton>
      </Link>
      <Link to='/catalogs'>
        <p>Catalogs</p>
      </Link>
      </MenuItem>
      <MenuItem>
      <Link to='/contact'>
        <IconButton aria-label="Contact" color="inherit">
            <Send />
        </IconButton>
      </Link>
      <Link to='/contact'>
        <p>Contact</p>
      </Link>
      </MenuItem>
      <MenuItem>
      <Link to='/search'>
        <IconButton aria-label="Search" color="inherit">
            <SearchIcon />
        </IconButton>
      </Link>
      <Link to='/search'>
        <p>Search</p>
      </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={`${classes.grow} topnav-div`}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
              <Link to="/">
                <Logo />
              </Link>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Quick Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to='/'>
                <IconButton aria-label="Home" color="inherit">
                    <HomeIcon />
                </IconButton>
            </Link>
                <IconButton
                  edge="false"
                  aria-label="Products"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <SportsFootballIcon />
                </IconButton>
            <Link to='/catalogs'>
                <IconButton aria-label="Catalogs" color="inherit">
                    <ImportContactsIcon />
                </IconButton>
            </Link>
            <Link to='/contact'>
                <IconButton aria-label="Catalogs" color="inherit">
                    <Send />
                </IconButton>
            </Link>
            <Link to='/search'>
                <IconButton aria-label="Catalogs" color="inherit" edge='end'>
                    <SearchIcon />
                </IconButton>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
