import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MessageEditor from "./MesageEditor";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // padding: theme.spacing(10),
        margin: "1rem",
        padding: "60px 50px",
        [theme.breakpoints.down('xs')]: {
            // padding: '3rem 0 0.1rem 4rem',
            paddingRight: theme.spacing(0),
            marginRight: theme.spacing(0)
        },
        // [theme.breakpoints.up('sm')]: {
        //     // padding: '3rem 0.5rem 0.1rem 4rem',
        //     // margin: '0 0.1rem 0 0.2rem'
        //     paddingRight: theme.spacing(0),
        //     marginRight: theme.spacing(0)
        // },
        // [theme.breakpoints.up('md')]: {
        //     // padding: '60px 10px 1px 55px',
        //     // padding: '3rem 0.5rem 0.1rem 4rem',
        //     // margin: '0 0.1rem 0 0.2rem'
        //     paddingRight: theme.spacing(0),
        //     marginRight: theme.spacing(0)
        // },
        // [theme.breakpoints.up('lg')]: {
        //     // padding: '60px 5px 5px 50px',
        //     // margin: '1rem'
        //     paddingRight: theme.spacing(0),
        //     marginRight: theme.spacing(0)
        // },

    },
    title: {
        padding: '.5rem .1rem 1rem 1rem',
        borderBottom: '1px solid var(--grey-2)',
        fontWeight: 'bold',
        [theme.breakpoints.up('xs')]: {
            fontSize: 11
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 19
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 22
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 24
        },
    },
    buttons:{
        padding:'.5rem 1rem',
        margin:'1rem'
    }
}))


export default function DespreFirma1() {
    const classes = useStyles()
    const theme = useTheme();

    return (
        <Grid container direction='column' className={classes.root}>

            <Grid item container>
                <Grid item xs={1} sm={2}/>
                <Grid item xs={8}>

                    <Typography variant='h6' className={classes.title}>
                        Despre firma
                    </Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cum ea maiores non quibusdam.
                        Accusantium deserunt eos laudantium quae vero?
                    </Typography>
                    <MessageEditor/>
                    <Button variant='contained' color='primary' className={classes.buttons}>Salvare </Button>
                    <Button variant='contained' color='default' className={classes.buttons}>Resetare</Button>
                </Grid>
                <Grid item xs={1} sm={2}/>

            </Grid>
        </Grid>
    )
}
