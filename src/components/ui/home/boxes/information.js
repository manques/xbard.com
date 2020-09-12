import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles  = makeStyles(theme => ({
    root: {
        width: "100%",
        backgroundImage: "radial-gradient(rgba(0, 255, 0, 0.2), rgba(0, 0, 255, 0.2))",
        height: "400px"
    },
    item: {
        padding: "2rem",
    },
    title: {
        color: theme.palette.primary.main
        
    },
    button: {
        ...theme.typography.button
    }
}));

export default function Information() {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width: 600px)');
    const contentInfo = [
        {
            title: "About Us",
            subTitle: "Know about company",
            align: "flex-start",
            textAlign: "left"
        },
        {
            title: "Contact Us",
            subTitle: "Quick contact us",
            align: "flex-end",
            textAlign: "right"
        }
    ];
    const infoRender = contentInfo.map((item, index) => (
        <Grid item className={classes.item} 
                   style={{textAlign: !matches ? "center" : item.textAlign }}
                   key={`${index}.${item.title}`}>
            <Typography variant="h3" className={classes.title}>{item.title}</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>{item.subTitle}</Typography>
            <Grid container
                justify={matches ? item.align : "center"}>
                <Grid item>
                    <Button variant="outlined"
                            className={classes.button}>
                        read more
                        <ArrowForwardIcon />
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    ));
    return (
        <Grid container
              className={classes.root}
              direction={matches ? "row" : "column"}
              justify={matches ? "space-between": "center"}
              alignItems="center">
            {infoRender}
        </Grid>
    );
}