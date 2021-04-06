import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
// import '../../index.css'
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {

        backgroundColor: 'var(--grey-2)',
        borderRadius: "var(--radius-2)",
        [theme.breakpoints.up('xs')]: {
            paddingTop: theme.spacing(7),
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        [theme.breakpoints.up('sm')]: {
            // padding:'1rem .8rem'
        },
        [theme.breakpoints.up('md')]: {
            // padding:'1.4rem'
            paddingTop: theme.spacing(3),
            marginLeft: theme.spacing(1)

        },
        [theme.breakpoints.up('lg')]: {
            // padding:'1rem 1.3rem'
            // padding: theme.spacing(10)
            paddingTop: theme.spacing(5),
        },
        [theme.breakpoints.up('xl')]: {
            // padding:'1rem 1.3rem'
            // padding: theme.spacing(10)
            paddingTop: theme.spacing(5),
           marginLeft: theme.spacing(2)
        },
    },
    title: {
        // display: 'flex',
        // justifyContent: "flex-start",
        // padding: '0.3rem 0',
        borderBottom: '1px solid var(--grey-2)',
        fontWeight: 'bold',
        // backgroundColor: "#9ab973",
        [theme.breakpoints.up('xs')]: {
            fontSize: 15
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 19
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 22
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 29,
            padding: theme.spacing(1),

        },
        // transition: "all .3s ease",
        // "&:hover":{
        //     backgroundColor:"red",
        //     fontSize:71
        // }
    },
    para: {
        fontSize: '1.2rem',
        [theme.breakpoints.up('xs')]: {
            fontSize: 14,
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 19
        },
        // [theme.breakpoints.up('md')]: {
        //     fontSize: 22
        // },
        // [theme.breakpoints.up('lg')]: {
        //     fontSize: 29
        // },
    }
}))


const HomeTop = () => {
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
};
export default HomeTop;