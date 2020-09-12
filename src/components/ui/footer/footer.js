import React from 'react';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

import footerBackgroundImage from '../../../assets/footerBackgroundStyle.png';
import facebook from  '../../../assets/social-icon/facebook.png';
import instagram from '../../../assets/social-icon/instagram.png';
import twitter from '../../../assets/social-icon/twitter.png';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundImage: `url(${footerBackgroundImage})`,
        backgroundColor: theme.palette.common.green,
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        width: "100%",
        marginTop: "0.8rem",
        position: "relative",
        zIndex: theme.zIndex.modal+ 1,
    },
    grid: {
        width: "100%"
    },
    gridItem: {
        margin: "2em"
    },
    link: {
        fontFamily: "Arial",
        fontSize: "0.8rem",
        fontWeight: "bold",
        color: "white",
        textDecoration: "none",
        "&:hover": {
            color: "gray"
        }
    },
    iconImage: {
        width:  "100%",
        height: "100%",
        borderRadius: "2px"
    },
    icon: {
        width: "2em",
        height: "2em",
        margin: "1em",
        boxShadow: "0px 2px 4px white",
        backgroundColor: "white",
        "&:hover": {
            boxShadow: "0px 4px 8px white"
        }
    }

}));

export default function Footer(props) {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Hidden smDown>
            <Grid container
                  direction="row"
                  justify="center"
                  spacing={3}
                  className={classes.grid}>
                {/* home */}
                <Grid item
                      className={classes.gridItem}>
                    <Grid container
                          direction="column"
                          spacing={1}>
                        <Grid item
                              className={classes.link}
                              component={Link}
                              to="/"
                              onClick={() => {props.setValue(0)}}>
                                  Home
                        </Grid>
                        <Grid item
                              className={classes.link}
                              component={Link}
                              to="/"
                              onClick={() => {props.setValue(0)}}>
                                  Home
                        </Grid>
                        <Grid item
                              className={classes.link}
                              component={Link}
                              to="/"
                              onClick={() => {props.setValue(0)}}>
                                  Home
                        </Grid>
                        <Grid item
                              className={classes.link}
                              component={Link}
                              to="/"
                              onClick={() => {props.setValue(0)}}>
                                  Home
                        </Grid>
                    </Grid>
                </Grid>
                {/* services */}
                <Grid item
                      className={classes.gridItem}>
                    <Grid container
                           direction="column"
                           spacing={1}>
                        <Grid item
                              className={classes.link}
                              component={Link}
                              to="/services"
                              onClick={() => {props.setValue(3); props.setSelectedIndex(0)}}>
                                  SEO
                        </Grid>
                        <Grid item
                              className={classes.link}
                              component={Link}
                              to="/services"
                              onClick={() => {props.setValue(3); props.setSelectedIndex(0)}}>
                                  SEO
                        </Grid>
                        <Grid item
                              className={classes.link}
                              component={Link}
                              to="/services"
                              onClick={() => {props.setValue(3); props.setSelectedIndex(0)}}>
                                  SEO
                        </Grid>
                        <Grid item
                              className={classes.link}
                              component={Link}
                              to="/services"
                              onClick={() => {props.setValue(3); props.setSelectedIndex(0)}}>
                                  SEO
                        </Grid>
                    </Grid>
                </Grid>
                {/* info */}
                <Grid item
                      className={classes.gridItem}>
                    <Grid container
                           direction="column"
                           spacing={1}>
                        <Grid item
                              className={classes.link}
                              component={Link}
                              to="/services"
                              onClick={() => {props.setValue(3); props.setSelectedIndex(0)}}>
                                Digital marketing
                        </Grid>
                        <Grid item
                              className={classes.link}
                              component={Link}
                              to="/services"
                              onClick={() => {props.setValue(3); props.setSelectedIndex(0)}}>
                                Digital marketing
                        </Grid>
                        <Grid item
                              className={classes.link}
                              component={Link}
                              to="/services"
                              onClick={() => {props.setValue(3); props.setSelectedIndex(0)}}>
                                Digital marketing
                        </Grid>
                        <Grid item
                              className={classes.link}
                              component={Link}
                              to="/services"
                              onClick={() => {props.setValue(3); props.setSelectedIndex(0)}}>
                                Digital marketing
                        </Grid>
                    </Grid>
                </Grid>
                {/* conatct */}
                <Grid item
                      className={classes.gridItem}>
                    <Grid container
                           direction="column"
                           spacing={1}>
                        <Grid item 
                              className={classes.link}
                              component={Link}
                              to="/services"
                              onClick={() => {props.setValue(3); props.setSelectedIndex(0)}}>
                            Services
                        </Grid>
                        <Grid item className={classes.link}
                              component={Link}
                              to="/mobileApps"
                              onClick={() => {props.setValue(3); props.setSelectedIndex(1)}}>
                            Mobile Apps
                        </Grid>
                        <Grid item className={classes.link}
                              component={Link}
                              to="/software"
                              onClick={() => {props.setValue(3); props.setSelectedIndex(2)}}>
                            software
                        </Grid>
                        <Grid item className={classes.link}
                              component={Link}
                              to="/software"
                              onClick={() => {props.setValue(3); props.setSelectedIndex(0)}}>
                            website development
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Hidden>
            {/* social icon */}
            <Grid container
                  justify="center"
                  className={classes.iconContainer}>
                      <Grid item className={classes.icon}
                                 component={"a"}
                                 href="https://www.facebook.com"
                                 rel="noopener noreferrer"
                                 target="_blank">
                          <img src={facebook} 
                                alt="facebook"
                                className={classes.iconImage} />
                      </Grid>
                      <Grid item className={classes.icon}
                                 component={"a"}
                                 href="https://www.instagram.com"
                                 rel="noopener noreferrer"
                                 target="_blank">
                          <img src={instagram} 
                                alt="instagram"
                                className={classes.iconImage} />
                      </Grid>
                      <Grid item className={classes.icon}
                                 component={"a"}
                                 href="https://www.twitter.com"
                                 rel="noopener noreferrer"
                                 target="_blank">
                          <img src={twitter} 
                                alt="twitter"
                                className={classes.iconImage} />
                      </Grid>
            </Grid>
        </footer>
    );
}