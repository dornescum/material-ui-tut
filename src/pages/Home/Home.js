import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core";
import {useTheme} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import HomeTop from "./HomeTop";
import HomeFormCompany from "./HomeFormCompany";
// import Create from "../Create";


const drawerWith = 240;
const useStyles = makeStyles((theme) => ({

    // container: {
    //     [theme.breakpoints.up('xs')]: {
    //         fontSize: 11,
    //         // margin: " 0 35px",
    //         // padding:"5px 40px"
    //         padding: theme.spacing(11)
    //
    //     },
    //     [theme.breakpoints.up('sm')]: {
    //         fontSize: 18,
    //         // margin: " 0 45px",
    //         // padding:"5px 50px",
    //         padding: theme.spacing(1)
    //
    //     },
    //     [theme.breakpoints.up('md')]: {
    //         fontSize: 18,
    //         // margin: " 0 45px",
    //         // padding:"5px 50px"
    //         padding: theme.spacing(1)
    //
    //     },
    //     [theme.breakpoints.up('lg')]: {
    //         fontSize: 28,
    //         padding: theme.spacing(10)
    //         // margin: " 0 10px",
    //         // padding:"5px 50px"
    //     },
    //
    // },
    // title: {
    //     display: 'flex',
    //     justifyContent: "flex-start",
    //     padding: '0.1rem 2rem',
    //     borderBottom: '1px solid var(--grey-2)',
    //     fontWeight: 'bold',
    //     // backgroundColor: "#9ab973",
    //     [theme.breakpoints.up('xs')]: {
    //         fontSize: 11
    //     },
    //     [theme.breakpoints.up('sm')]: {
    //         fontSize: 19
    //     },
    //     [theme.breakpoints.up('md')]: {
    //         fontSize: 22
    //     },
    //     [theme.breakpoints.up('lg')]: {
    //         fontSize: 24
    //     },
    //     // transition: "all .3s ease",
    //     // "&:hover":{
    //     //     backgroundColor:"red",
    //     //     fontSize:71
    //     // }
    // },
    // field: {
    //     marginTop: '1rem',
    //     marginBottom: '1rem',
    //     display: 'block'
    // },
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        // margin: "1rem",
        // padding: "60px 50px",
        [theme.breakpoints.down('xs')]: {
            // padding: '3rem 0 0.1rem 4rem',
            paddingRight: theme.spacing(0),
            marginRight: theme.spacing(0)
        },
        [theme.breakpoints.up('sm')]: {
            // padding: '3rem 0.5rem 0.1rem 4rem',
            // margin: '0 0.1rem 0 0.2rem'
            paddingRight: theme.spacing(0),
            marginRight: theme.spacing(0)
        },
        [theme.breakpoints.up('md')]: {
            // padding: '60px 10px 1px 55px',
            padding: '3rem 0.5rem 0.1rem 4rem',
            margin: '0 0.1rem 0 0.2rem'
        },
        [theme.breakpoints.up('lg')]: {
            // padding: '60px 5px 5px 50px',
            // margin: '1rem'
            paddingRight: theme.spacing(0),
            marginLeft: theme.spacing(-2)
        },
        [theme.breakpoints.up('xl')]: {
            // padding: '60px 5px 5px 50px',
            // margin: '1rem'
            paddingRight: theme.spacing(0),
            marginLeft: theme.spacing(0)
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    margin: {
        margin: theme.spacing(1),
    },
    form: {
        padding: '0.7rem'
    },
}))

export default function Home() {
    const classes = useStyles()
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <Grid container spacing={0} alignItems='center'>
                <Grid item xs={false} sm={4} md={2} xl={1} >

                </Grid>
                <Grid item xs={12} sm={8} md={10} xl={11}>
                    {/*<Paper className={classes.paper}>*/}
                        <HomeTop/>
                        <HomeFormCompany/>
                        {/*<Create />*/}
                    {/*</Paper>*/}
                </Grid>
            </Grid>
        </div>
    )
}

