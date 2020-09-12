import  React , { Fragment,  useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../../assets/logo.png';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: 
        true,
        threshold: 0,
        target: window ? window() : undefined
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}

const useStyles = makeStyles( theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '0em',
        [theme.breakpoints.down("md")]:{
            marginBottom: "0em",
        },
        [theme.breakpoints.down("sm")]: {
            marginBottom: "0em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "0.5em"
        }
    },
    logo: {
        height: '4em',
        [theme.breakpoints.down("md")]: {
            height: '3.5em'
        },
        [theme.breakpoints.down("sm")]: {
            height: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "2.5em"
        }
    },
    logoContainer: {
        padding: 0,
        height: "100%",
        margin: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: 'auto',
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
        color: "white"
    },
    button: {
        ...theme.typography.price,
        borderRadius: "50px",
        margin: "0 10px",
        background: "radial-gradient(red, yellow)",
        height: "45px"
    },
    menu: {
     backgroundColor: theme.palette.primary.main,
     color: "white",
     borderRadius: "0px"
    },
    menuItem : {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover":{
            opacity: 1
        }
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        width: "40px",
        height: "40px"
    },
    drawer: {
        backgroundColor: theme.palette.primary.main
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    },
    drawerPrice: {
        background: "radial-gradient(red, yellow)"
    },
    drawerItemSelected: {
        opacity: 1
    },
    selectedPrice: {
        opacity: 1
    },
    price: {
        opacity: 0.7
    },
    appbar: {
        zIndex: theme.zIndex.modal+1
    }
}));

function Header(props){
    const classes = useStyles();
    const [price, setPrice] = useState(0);
    const iso = process.browser && /ipad|iphone|ipod/.test(navigator.userAgent);
     // menu initial state
     const [anchorEl, setAnchorEl] = useState(null);
     const [openMenu, setOpenMenu] = useState(false);
     // drawer
     const [openDrawer, setOpenDrawer] = useState(false);
    const handleChange = (event, newValue) => {
        props.setValue(newValue);
    }
    // menu options
    const menuOptions = [
        { name: "Services", link: "/services", activateIndex: 3, selectedIndex: 0},
        { name: "Software", link: "/software", activateIndex: 3, selectedIndex: 1 },
        { name: "Mobile Apps", link: "/mobileApps", activateIndex: 3, selectedIndex: 2}
    ];
    // routes 
    const routes = [
        { name: "Home" , link: "/", activateIndex: 0 },
        { name: "About" , link: "/about", activateIndex: 1},
        { name: "Future" , link: "/future", activateIndex: 2},
        { 
            name: "Services", 
            link: "/services", 
            activateIndex: 3,
            ariaControls: anchorEl ?  "simple-menu" : undefined,
            ariaHaspopup: anchorEl ? "true" : undefined, 
            onMouseOver: event => handleClick(event)
        },
        { name: "Contact Us" , link: "/contact", activateIndex: 4}
    ];
    // sub-menu index
    const handleMenuItemClick = (event, index) => {
        console.log(index);
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(index);
    }

    // menu event change
    // open
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    }
    // close
    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
    }
    useEffect( () => {
        if(window.location.pathname === "/price"){
            setPrice(1);
        }
    }, [price]);
    useEffect(() => {
        
        // sub menu
        [...menuOptions, ...routes].forEach(route => {
            switch(window.location.pathname){
                case `{route.link}`:
                    if(props.value !== route.activateIndex){
                        props.setValue(route.activateIndex);
                        if(route.selectedIndex && route.selectedIndex !== props.selectedIndex){
                            props.setSelectedIndex(route.selectedIndex);
                        }
                    }
                break;
                default: 
                break;
            }
        });
        
    }, [props.value, props.selectedIndex, menuOptions, routes, props]);
    // media query responsive
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const tabs = (
        <Fragment>
            <Tabs className={classes.tabContainer}
                  onChange={handleChange}
                  value={props.value}
                  indicatorColor="primary">
                  {routes.map((item, index) => (
                     
                        <Tab className={classes.tab}
                            key={item.name}
                            label={item.name} 
                            component={Link}
                            to={item.link} 
                            aria-controls={item.ariaControls}
                            aria-haspopup={item.ariaHaspopup} 
                            onMouseOver={item.onMouseOver} />
                  )
                  )}
            </Tabs>
            <Button variant="contained" 
                    color="secondary"
                    className={price === 1 ? [classes.button, classes.selectedPrice].join(" ")
                               : [classes.button, classes.price].join(" ")}
                    component={Link}
                    selected={price === 1}
                    to="/price">
                    Price
            </Button>
            <Menu   id="simple-menu"
                    anchorEl={anchorEl}
                    open={openMenu}
                    keepMounted
                    onClose={handleClose}
                    MenuListProps={{onMouseLeave: handleClose}}
                    classes={{paper: classes.menu}} 
                    elevation={0}>
                    {
                        menuOptions.map((item, index) => (
                            <MenuItem key={item.name}
                                        onClick={(event) => {
                                          handleMenuItemClick(event, index);
                                          handleChange(event, 3);
                                        }}
                                        component={Link}
                                        to={item.link}
                                        classes={{root: classes.menuItem}}
                                        selected={index === props.selectedIndex && props.value === 3}>
                                {item.name}
                            </MenuItem>
                        ))
                    }       

            </Menu>
        </Fragment>
    );
    

    const drawer = (
        <Fragment>
            <SwipeableDrawer disableBackdropTransition={!iso}
                             disableDiscovery={iso}
                             open={openDrawer}
                             onOpen={() => setOpenDrawer(true)}
                             onClose={() => setOpenDrawer(false)}
                             classes={{paper: classes.drawer}}>
                                <div className={classes.toolbarMargin} />
                                <List disablePadding>
                                    {   
                                        [...routes].map((item, index) => (
                                            <ListItem component={Link}
                                                      key={item.name}
                                                      to={item.link}
                                                      divider
                                                      button
                                                      onClick={ () => {
                                                          setOpenDrawer(false);
                                                          props.setValue(item.activateIndex);
                                                      }}
                                                      className={
                                                          props.value === item.activateIndex
                                                          ? [classes.drawerItem, classes.drawerItemSelected].join(" ") 
                                                          : classes.drawerItem
                                                      }
                                                      selected={props.value === item.activateIndex}>
                                                <ListItemText disableTypography>
                                                    {item.name}
                                                </ListItemText>
                                            </ListItem>
                                        ))
                                    }
                                    <ListItem component={Link}
                                              to="/price"
                                              divider
                                              button
                                              onClick={() => {setOpenDrawer(false); setPrice(1)}}
                                              className={price === 1 
                                                ? [classes.drawerItem, classes.drawerItemSelected, classes.drawerPrice].join(" ") 
                                                : [classes.drawerItem, classes.drawerPrice].join(" ")}
                                              selected={price === 1}>
                                                  <ListItemText disableTypography>
                                                      Price
                                                  </ListItemText>
                                    </ListItem>
                                </List>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}
                        disableRipple
                        className={classes.drawerIconContainer}>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </Fragment>
    );

    return (
        <Fragment>
            <ElevationScroll>
                <AppBar position="fixed" 
                        color="primary"
                        className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button component={Link}
                                to="/"
                                disableRipple
                                className={classes.logoContainer}
                                onClick={handleChange}>
                         <img className={classes.logo} alt="xbard" src={logo} />
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </Fragment>
    );
}

export default Header;
