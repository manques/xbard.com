import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import LandingPage from '../home/boxes/landingBox';
import ServicesBox from '../home/boxes/servicesBox';
import Future from '../home/boxes/future';
import Information from '../home/boxes/information';


const useStyles = makeStyles(theme => ({
    home: {
        width: "100%"
    }
}));

export default function Home() {
    const classes = useStyles();

    return (
        <Grid container
               direction="column"
               className={classes.home}
               alignItems="center">
            {/* first landing page landing box */}
            <Grid item
                  className={classes.home}>
              <LandingPage />
            </Grid>
             {/* 2nd box */}
             <Grid item style={{width: "100%"}}>
                <ServicesBox />
             </Grid>
             {/* 3rd future box */}
             <Grid item style={{width: "100%"}}>
                 <Future />
             </Grid>
             {/* 4th information box */}
             <Grid item style={{width: "100%"}}>
                <Information />
             </Grid>
        </Grid>
    );
}