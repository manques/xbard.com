import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';

import repeat from '../../../../assets/future/repeat.png';
import v8 from '../../../../assets/future/v8.png';
import ai from '../../../../assets/future/ai.png';
import security from '../../../../assets/future/security.png';

const useStyles = makeStyles(theme => ({
    future: {
        width: "100%",
        height: "auto",
        backgroundImage: `url(${repeat})`,
        backgroundSize: "2rem 2rem",
        backgroundRepeat: "repeat",
        opacity: 1
    },
    pageTitle: {
        color: theme.typography.primary.main,
        textShadow: "1px 2px 2px #000000",
        padding: "2rem"
    },
    pageTitleDesign: {
        background: "white", 
        padding: "0.5rem", 
        borderRadius: "1rem"
    },
    card: {
        // boxShodow: "2px 4px 8px #000000"
        width: "100%",
        maxWidth: "300px"
    },
    media: {
        boxSizing: "border-box",
        height: "10rem",
        width: "auto",
        // maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        color: theme.typography.primary.main
    },
    cardActions: {
      display: "felx",
      justifyContent: "center" 
    },
    fab: {
        color: "white",
        padding: "0 4rem"
    },
    cardContainer: {
        display: "flex",
        justifyContent: "center",
        padding: "2rem"
    }
}));


export default function Future() {
    const classes = useStyles();
    const futureContent = [
        {
            title: "V8",
            image: v8
        },
        {
            title: "AI",
            image: ai
        },
        {
            title: "Security",
            image: security
        }
    ];

    const contentRender = futureContent.map( (item, index) => (
                    <Grid item xs={12} sm={4}
                          className={classes.cardContainer}
                          key={`${index}. ${item.title}`}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media}>
                                        <img src={item.image} alt="v8" 
                                             style={{height: "10rem", width: "auto", marginTop: "0.5rem"}}/>
                                </CardMedia>
                                <CardContent className={classes.content}>
                                    <Typography variant="h4"
                                                className={classes.title}>
                                        {item.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.cardActions}>
                                <Fab variant="extended"
                                     size="small"
                                     color="primary"
                                     aria-label="learn more"
                                     className={classes.fab}>
                                    read more
                                </Fab>
                            </CardActions>
                        </Card>
                    </Grid>
    ));

    return (
        <Grid container
              className={classes.future}
              direction="column"
              alignItems="center"
              style={{width: "100%"}}>
                <Grid item>
                    <Typography variant="h2"
                                className={classes.pageTitle}>
                        <span className={classes.pageTitleDesign}>FUTURE</span>
                    </Typography>
                </Grid>
                <Grid item style={{width: "100%"}}>
                    <Grid container
                          direction="row"
                          justify="center"
                          alignItems="center">
                      {contentRender}
                    </Grid>
                </Grid>
        </Grid>
    );
}
