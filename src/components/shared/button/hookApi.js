import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
// import { withTheme } from '@material-ui/styles';


const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #EF6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, 0.3)',
        color: 'white',
        height: 48,
        padding: '0 30px'
    }
});

export default function HookApi() {
    const classes = useStyles();
    return (        
        <Button className={classes.root}>
            hook
        </Button>
    );
}