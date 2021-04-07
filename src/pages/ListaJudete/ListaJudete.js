import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from "@material-ui/core/Container";
// dialog
// import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Paper} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {useTheme} from '@material-ui/core/styles';
import JudeteTable from "../ListaJudete/JudeteTable";

const useStyles = makeStyles((theme)=>({

    root: {
        flexGrow: 1,
        paddingTop: theme.spacing(1),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(0),
        // margin: "1rem",
        // padding: "60px",
        [theme.breakpoints.up('xs')]: {
            paddingRight: theme.spacing(0),
            marginRight: theme.spacing(0),
            marginLeft: theme.spacing(1),
        },
        [theme.breakpoints.up('sm')]: {
            paddingRight: theme.spacing(0),
            marginRight: theme.spacing(0),
            marginLeft: theme.spacing(18),
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: theme.spacing(0),
            marginRight: theme.spacing(0),
            marginLeft: theme.spacing(12),
        },
        [theme.breakpoints.up('lg')]: {
          padding: theme.spacing(0),
            margin: theme.spacing(0),
        },
        [theme.breakpoints.up('xl')]: {
          padding: theme.spacing(1),
            marginLeft: theme.spacing(12)

        },
    },
    title: {
        padding: '5rem .1rem 1rem 1rem',
        borderBottom: '1px solid var(--grey-2)',
        fontWeight: 'bold',
        [theme.breakpoints.up('xs')]: {
            fontSize: 18
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: 19
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 22
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 29
        },
    },
    para:{
        padding: theme.spacing(1)
    },
    paper: {
        paddingTop: theme.spacing(2),
        // paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

export default function ListaJudete() {
    const classes = useStyles();
// dialog
    return (
        <Grid  className={classes.root }>
            <Grid  container alignItems='center'>

            <Grid item xs={false} sm={2} xl={1}/>
            <Grid item  xs={12} sm={10} xl={11} className={classes.paper}>
                <Paper elevation={5}  style={{marginBottom:"1rem"}}>
                    <Typography variant='h1' className={classes.title}>
                        Lista judete
                    </Typography>
                    <Typography  className={classes.para}>
                                    dsdasdasd ad asd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet et excepturi nisi odit reprehenderit repudiandae vero? A amet architecto delectus doloribus expedita fuga illum ipsa itaque iure, laborum magni maxime modi natus necessitatibus nihil omnis optio reprehenderit sunt tenetur ullam? Aliquam aliquid aspernatur autem consectetur consequatur dolorem dolores eius,
                    </Typography>
                     <Typography  className={classes.para}>
                        dsdasdasd ad asd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet et excepturi nisi odit reprehenderit repudiandae vero? A amet architecto delectus doloribus expedita fuga illum ipsa itaque iure, laborum magni maxime modi natus necessitatibus nihil omnis optio reprehenderit sunt tenetur ullam? Aliquam aliquid aspernatur autem consectetur consequatur dolorem dolores eius,
                    </Typography>
  <Typography  className={classes.para}>
                        dsdasdasd ad asd Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet et excepturi nisi odit reprehenderit repudiandae vero? <a
      href="#" style={{color:'primary'}}>dsadasdas adasd asd</a>,
                    </Typography>

                </Paper>
                <JudeteTable />

            </Grid>

            </Grid>
        </Grid>


    );
}
