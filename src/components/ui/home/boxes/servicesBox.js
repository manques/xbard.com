    import React from 'react';
    import { makeStyles } from '@material-ui/core/styles';
    import Grid from '@material-ui/core/Grid';
    import Typography from '@material-ui/core/Typography';
    import Button from '@material-ui/core/Button';
    import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
    import useMediaQuery from '@material-ui/core/useMediaQuery';

    import software from '../../../../assets/services/software.png';
    import website from '../../../../assets/services/website.png';
    import digitalMarketing from  '../../../../assets/services/digital-marketing.png';

    const useStyles = makeStyles(theme => ({
        services: {
            width: "100%",
            backgroundImage: "linear-gradient(45deg, rgba(255, 255, 0, 0.4),  rgba(51, 102, 255, 0.4))",
            height: "auto",
            borderTop: "1rem dotted rgba(255, 0, 102, 0.5)",
            boxSizing: "border",
            padding: "2rem 0"
        },
        servicesTitle: {
            width: "auto",
            color: theme.typography.primary.main,
            textAlign: "center",
            padding: "1rem",
            textShadow: "1px 2px 2px #000000"
        },
        boxTitle: {
            color: theme.typography.primary.main,
            padding: "0.5rem 0"
        },
        button: {
            marginTop: "0.5rem",
            borderRadius: "5rem",
            borderColor: theme.typography.primary.main,
            color: theme.typography.primary.main
        },
        iconImage: {
        width: "auto",
        maxWidth: "100%",
        height: "10rem",
        maxHeight: "auto",
        margin: "0.5rem"
        },
        servicesItems: {
            width: "100%"
        },
        subTitle: {
            padding: "0.5rem 0"
        }
    }));

    export default function ServicesBox(){
        const classes = useStyles();
        const matches = useMediaQuery('(min-width: 600px)');
        const servicesBox = [
            { 
                title: "software development",
                subtitle1: "asss asdasdas asdasdas adsadasd",
                subtitle2: "adasdasdaada asdasd asdasd asddas asddasdasd",
                icon: software,
                align: "flex-start",
                textAlign: "left"
            },
            { 
                title: "website development",
                subtitle1: "asss asdasdas asdasdas adsadasd",
                subtitle2: "adasdasdaada asdasd asdasd asddas asddasdasd",
                icon: website,
                align: "flex-end",
                textAlign: "right"
            },
            { 
                title: "Digital marketing",
                subtitle1: "asss asdasdas asdasdas adsadasd",
                subtitle2: "adasdasdaada asdasd asdasd asddas asddasdasd",
                icon: digitalMarketing,
                align: "flex-start",
                textAlign: "left"
            }
        ];

        const servicesRender = servicesBox.map((item, index) => (
                    <Grid container
                        key={`${index}.${item.title}`}
                        direction={ matches ? "row" : "column"}
                        justify={matches ? item.align : "center"}
                        alignItems="center"
                        className="servicesItem">
                        <Grid item style={{textAlign: matches ? item.textAlign : "center", padding: "2rem"}}>
                            <Typography variant="h3"
                                        className={classes.boxTitle}
                                        >
                                 {item.title}
                            </Typography>
                            <Typography variant="subtitle1"
                                        className={classes.subTitle}>
                                {item.subtitle1}
                            </Typography>
                            <Typography variant="subtitle2"
                                        className={classes.subTitle}>
                                {item.subtitle2}
                            </Typography>
                            <Button variant="outlined"
                                    className={classes.button}
                                    color="default"
                                    endIcon={<ArrowForwardIcon />}>
                                learn more
                            </Button>
                        </Grid>
                        <Grid item>
                            <img src={item.icon} alt={item.title}
                                className={classes.iconImage}
                                />
                        </Grid>
                    </Grid>
        ));
        return(
            <Grid container 
                className={classes.services}
                direction="row"
                >
                {/* title */}
                <Grid item xs={12} sm={12}>
                    <Typography variant="h2" className={classes.servicesTitle}>
                        SERVICES
                    </Typography>
                </Grid>
                {/* services one */}
                <Grid item xs={12} sm={12}>
                    {/* container */}
                    {servicesRender}
                </Grid>
            </Grid>
        );
    }