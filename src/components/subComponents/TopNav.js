import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom'
import Logo from './Logo'
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
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
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

  const handleProductsMenuOpen = (event) => {
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
            <p>HOME</p>
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProductsMenuOpen}>
        <p
        aria-label="Products"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true">
            PRODUCTS
        </p>
      </MenuItem>
      <MenuItem>
      <Link to='/catalogs'>
        <p>CATALOGS</p>
      </Link>
      </MenuItem>
      <MenuItem>
      <Link to='/contact'>
        <p>CONTACT</p>
      </Link>
      </MenuItem>
      <MenuItem>
      <Link to='/search'>
        <p>SEARCH</p>
      </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={`${classes.grow} topnav-div`}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
              <Link className='topnav-logo' to="/">
                <Logo />
              </Link>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to='/'>
                    <p className='topnav-typography'>HOME</p>
            </Link>
                  <p className='topnav-typography' 
                    aria-label='Products' 
                    aria-controls={menuId} 
                    aria-haspopup='true' 
                    onClick={handleProductsMenuOpen}>
                      PRODUCTS
                    </p>
            <Link to='/catalogs'>
                    <p className='topnav-typography'>CATALOGS</p>
            </Link>
            <Link to='/contact'>
                    <p className='topnav-typography'>CONTACT</p>
            </Link>
            <Link to='/search'>
                <SearchIcon className='topnav-icon' />
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
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
