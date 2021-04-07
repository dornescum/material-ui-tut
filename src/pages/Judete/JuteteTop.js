import React from 'react';
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import Grid from "@material-ui/core/Grid";

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
        <Paper className={classes.root} elevation={5}>
            <Typography variant='h1' align='left' className={classes.title} gutterBottom> Date generale</Typography>
            <Typography paragraph align='left' className={classes.para}> Modificati datele firmei / PFA, astfel incat potentialii clienti sa-si formeze o imagine cat mai corecta despre dumneavoastra.
            </Typography>
            <Typography paragraph align='left' className={classes.para}> Luati in considerare faptul ca majoritatea campurilor vor fi incluse ca si criterii de selectie in formularul <a href="">Cauta firma</a> . Deci, este important ca gradul de completare al informatiilor sa fie cat mai ridicat.
            </Typography>
        </Paper>
      )
}
export default JudeteTop;