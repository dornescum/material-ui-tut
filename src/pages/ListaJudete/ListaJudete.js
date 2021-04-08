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
          paddingLeft: theme.spacing(1),
            marginLeft: theme.spacing(2),
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
        paddingLeft: theme.spacing(2),
        paddingBottom:theme.spacing(1)
    },
    paper: {
        paddingTop: theme.spacing(2),
        // paddingLeft: theme.spacing(12),
        paddingRight: theme.spacing(2),
        // textAlign: 'center',
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
                        Aceasta este lista de judete curente in care va desfasurati activitatea. Un judet este echivalentul unui abonament, iar acestea pot fi de 3 tipuri: Free, Standard si Pro.

                    </Typography>
                     <Typography  className={classes.para}>
                         Fiecare autorizat are dreptul la un singur abonament de tip Free. In momentul in care se doreste trecerea la abonament de tip Standard sau Pro, atunci abonamentul Free trebuie anulat.
                     </Typography>
                     <Typography  className={classes.para}>
                         Un autorizat poate detine mai multe abonamente de tip Standard si Pro atata timp cat sunt pe judete diferite. Trebuie mentionat, ca abonamentele Pro sunt unice pe judet.
                     </Typography>

  <Typography  className={classes.para}>
      Pentru mai multe detalii si preturi consultati <a href="#" style={{color:'var(--mc-color)'}}> lista de prezentare a abonamentelor . </a>
                    </Typography>

                </Paper>
                <JudeteTable />

            </Grid>

            </Grid>
        </Grid>


    );
}
