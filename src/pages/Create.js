import React from 'react';
import {makeStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import Button from "@material-ui/core/Button"; // Import Sun Editor's CSS File



// const drawerWith = 240;
const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        // padding: theme.spacing(1),

        [theme.breakpoints.down('xs')]: {
            paddingRight: theme.spacing(2),
            paddingTop: theme.spacing(12),
            paddingLeft: theme.spacing(2),
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(1),
            width: "265px"
        },
        [theme.breakpoints.up('xs')]: {
            paddingRight: theme.spacing(0),
            paddingLeft: theme.spacing(0),
        },
        [theme.breakpoints.up('sm')]: {
            paddingRight: theme.spacing(2),
            paddingTop: theme.spacing(15),
            paddingLeft: theme.spacing(12),
            marginLeft: theme.spacing(20)
        },
        [theme.breakpoints.up('md')]: {
            paddingRight: theme.spacing(1),
            paddingTop: theme.spacing(15),
            paddingLeft: theme.spacing(1),
            marginLeft: theme.spacing(1)
        },
        [theme.breakpoints.up('lg')]: {
            paddingRight: theme.spacing(2),
            paddingTop: theme.spacing(15),
            paddingLeft: theme.spacing(17),
            marginLeft: theme.spacing(15)

        },
        [theme.breakpoints.up('xl')]: {
            // paddingRight: theme.spacing(0),
            // paddingTop: theme.spacing(1),
            // paddingLeft: theme.spacing(2),
        },
    },
    buttons:{
        padding:'.5rem 1rem',
        margin:'1rem'
    }

}))
export default function Create() {
    const classes = useStyles()


    return (
        <div className={classes.root}>
            <Grid container spacing={1} alignItems='center'>

                <Grid item xs={12}>
                    <SunEditor />
                </Grid>
                <Button variant='contained' color='primary' className={classes.buttons}>Salvare </Button>

            </Grid>
        </div>
    )
}

