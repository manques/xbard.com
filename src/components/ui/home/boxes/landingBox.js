import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import animation from '../../../../assets/animation/animation.png';

const useStyles = makeStyles(theme => ({
    landing: {
        width: '100%',
        backgroundImage: "linear-gradient(to right, rgba(255, 0, 0, 0.2), rgba(0, 255, 0, 0.2))",
        padding: "5% 0"
    }, 
    info: {
        width: "60%",
        padding: "5%"
    },
    title: {
        fontSize: "2.5rem",
        fontFamily: "raleway",
        lineHeight: "130%",
        fontWeight: 700,    
        marginBottom: "1rem",
        color: "#00b0ff",
        textShadow: "2px 2px 4px #000000",
        [theme.breakpoints.down("md")]: {
        fontSize: "2rem"
        }, 
        [theme.breakpoints.down("sm")]:{
            fontSize: "1.5rem"
        },
        [theme.breakpoints.between("xs", "sm")]: {
            fontSize: "1.4rem"
        },
        textAlign: "center"
    },
    animation: {
        width: "40%",
        padding: "2rem"
    },
    contactButton: {
        color: "white",
        borderRadius: "5rem",
        margin: "0.5rem",
        "&:hover": {
            backgroundColor: theme.palette.primary.light
        }
    },
    servicesButton: {
        color: theme.typography.primary,
        borderRadius: "5rem",
        margin: "0.5rem"
    },
    buttons: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
    },
    animationBox: {
        maxWidth: "100%",
        maxHeight: "10rem",
        display: "flex",
        justifyContent: "center"
    }
}));


export default function LandingBox() {
    const classes = useStyles();
    return (
        <Grid container
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.landing}>
              {/* box info */}
              <Grid item xs={12} sm={6}
                    className={classes.info}>
                <Grid container 
                        direction="column"
                        alignItems="center">
                    <Grid item
                          className={classes.title}>
                        Find Beautiful Design Development Application
                    </Grid>
                    <Grid item
                          className={classes.buttons}>
                        <Button variant="contained"
                                color="primary"
                                className={classes.contactButton}>
                            Contact Us  
                        </Button>
                        <Button variant="outlined"
                                color="primary"
                                className={classes.servicesButton}>
                            Services  
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            {/* box animation */}
            <Grid item xs={12} md={6}
                  className={classes.animationBox}>
                      <img alt="animation" 
                           src={animation}
                           className={classes.animationBox} />
            </Grid>
        </Grid>
    );
} 