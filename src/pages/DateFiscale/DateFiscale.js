import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import DateFiscaleTop from './DateFiscaleTop';
import DateFiscaleMain from "./DateFiscaleMain";

const useStyles = makeStyles((theme)=>({
    root: {
        // flexGrow: 1,
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(1),
        marginTop: theme.spacing(4),
        // marginRight: theme.spacing(10),

        [theme.breakpoints.up('xs')]: {
            paddingRight: theme.spacing(0),
            paddingLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            marginLeft: theme.spacing(0),

        },
        [theme.breakpoints.up('sm')]: {
            paddingRight: theme.spacing(0),
            paddingLeft: theme.spacing(6),
            marginRight: theme.spacing(0),
            marginLeft: theme.spacing(10),
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: theme.spacing(0),
            paddingLeft: theme.spacing(6),
            marginRight: theme.spacing(0),
            marginLeft: theme.spacing(10),
        },
        [theme.breakpoints.up('lg')]: {
            paddingRight: theme.spacing(0),
            paddingLeft: theme.spacing(8),
            marginRight: theme.spacing(0),
            marginLeft: theme.spacing(12),
        },
        [theme.breakpoints.up('xl')]: {
            paddingRight: theme.spacing(0),
            paddingLeft: theme.spacing(8),
            marginRight: theme.spacing(0),
            marginLeft: theme.spacing(10),
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}))

const DateFiscale= () =>{
    const classes = useStyles();


    return (  <Grid  className={classes.root }>
        <Grid  container alignItems='center'>

            <Grid item xs={false} sm={2} xl={1}/>
            <Grid item  xs={12} sm={10} xl={11} className={classes.root}>


                <DateFiscaleTop/>
                <DateFiscaleMain />




            </Grid>

        </Grid>
    </Grid>)
}
export default DateFiscale;