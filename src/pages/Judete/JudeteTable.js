import React from 'react';
import {makeStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(0),

        [theme.breakpoints.down('xs')]: {

            paddingRight: theme.spacing(0),
            marginRight: theme.spacing(0)
        },
        [theme.breakpoints.up('sm')]: {

            paddingRight: theme.spacing(0),
            marginRight: theme.spacing(0)
        },
        [theme.breakpoints.up('md')]: {
            padding: '3rem 0.5rem 0.1rem 4rem',
            margin: '0 0.1rem 0 0.2rem'
        },
        [theme.breakpoints.up('lg')]: {
            paddingRight: theme.spacing(0),
            marginLeft: theme.spacing(-2)
        },
        [theme.breakpoints.up('xl')]: {
            paddingRight: theme.spacing(0),
            marginLeft: theme.spacing(0)
        },
    },
}))

const JudeteTop = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}></Grid>
            </Grid>
        </div>)
}
export default JudeteTop;