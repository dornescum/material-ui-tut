import React from 'react';
// import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    makeStyles,
    Radio,
    RadioGroup,
    IconButton,
} from "@material-ui/core";
import TextField from '@material-ui/core/TextField'
// import {useMediaQuery} from "@material-ui/core";
// import {useTheme} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import HomeTop from "../pages/Home/Home";
import Box from "@material-ui/core/Box";
import Fab from "@material-ui/core/Fab";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import BackupIcon from "@material-ui/icons/Backup";
// import HomeFormCompany from "../pages/Home/HomeFormCompany";


// const drawerWith = 240;
const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
        padding: theme.spacing(1),

        [theme.breakpoints.down('xs')]: {
            paddingRight: theme.spacing(0),
            paddingTop: theme.spacing(2),
            paddingLeft: theme.spacing(1),

            // marginLeft: theme.spacing(2)
        },
        [theme.breakpoints.up('xs')]: {
            paddingRight: theme.spacing(0),
            paddingLeft: theme.spacing(0),
        },
        // [theme.breakpoints.up('md')]: {
        //     // padding: '60px 10px 1px 55px',
        //     padding: '3rem 0.5rem 0.1rem 4rem',
        //     margin: '0 0.1rem 0 0.2rem'
        // },
        [theme.breakpoints.up('lg')]: {
            paddingRight: theme.spacing(0),
            paddingTop: theme.spacing(1),
            paddingLeft: theme.spacing(1),
        },
        [theme.breakpoints.up('xl')]: {
            paddingRight: theme.spacing(0),
            paddingTop: theme.spacing(1),
            paddingLeft: theme.spacing(2),
        },
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    margin: {
        margin: theme.spacing(0),
    },
    // form: {
    //     padding: '0.7rem'
    // },
    form: {
        padding: '0.5rem .1rem',
        // padding: theme.spacing(1),
        [theme.breakpoints.up('xs')]: {
            paddingTop: theme.spacing(0),
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(1),
        },
    },
    formBig: {
        padding: '0.5rem .1rem',
        // [theme.breakpoints.up('sm')]: {
            // paddingTop: theme.spacing(1),
            // paddingTop: 3,
            // paddingBottom: 3,
            // paddingLeft: theme.spacing(1),
            // paddingRight: theme.spacing(1),


        // },
    },
    formInput: {
        padding: '1rem .5rem'
        // padding: '.1rem'
    },
    firma: {
        backgroundColor: "var(--mc-color)",
        color: "white",
        padding: '1rem .5rem',
        "&:hover": {
            backgroundColor: "var(--blueMain)",
            transition: "all 1s ease",
        }
    },
    foto: {
        padding: '0.7rem'
    },
    input: {
        display: 'none',
    },
}))
export default function Create() {
    const classes = useStyles()
    // const theme = useTheme();

    return (
        <div className={classes.root}>
            <Grid container spacing={1} alignItems='center'>
                {/*<Grid item />*/}
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        {/*<HomeTop/>*/}
                        {/*------------------*/}
                        <form noValidate autoComplete='off'>
                            <Grid container className={classes.form}>
                                {/*tip autorizat*/}
                                <Grid item xs={12} lg={3} className={classes.formInput}>
                                    <Typography variant='subtitle1' align='center'>Tip autorizat*</Typography>
                                </Grid>
                                <Grid item xs={12} lg={9} className={classes.firma}>
                                    <Typography variant='subtitle1' align='center'>Firma</Typography>
                                </Grid>
                                {/*======Nume=====*/}
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="nume"
                                        variant='outlined'
                                        color='secondary'
                                        required
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="numele firmei"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                {/*======cod=====*/}
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="Cod"
                                        variant='outlined'
                                        color='secondary'
                                        required
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="numele firmei"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                {/*=========Descriere=====*/}
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="descriere"
                                        variant='outlined'
                                        color='secondary'
                                        multiline
                                        rows={5}
                                        required
                                        className={classes.formBig}
                                    >
                                    </TextField>
                                </Grid>
                                {/*========Adresa======*/}
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="adresa"
                                        variant='outlined'
                                        color='secondary'
                                        multiline
                                        rows={5}
                                        required
                                        className={classes.formBig}
                                    >
                                    </TextField>
                                </Grid>
                                {/*========Telefon email=====*/}
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="telefon"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="fax"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                {/*========website email=====*/}
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="website"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="email"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                {/*======categoria seria=======*/}
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="categoria /clasa"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="seria"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                {/*=====icons=======*/}
                                <Grid item xs={6} className={classes.foto}>
                                    {/*<Box display={{xs: 'none', sm: 'block'}}>*/}
                                    {/*    <Fab color="primary" aria-label="add">*/}
                                    {/*        <PhotoCameraIcon/>*/}
                                    {/*    </Fab>*/}
                                    {/*</Box>*/}
                                    <input accept="image/*" className={classes.input} id="icon-button-file"
                                           type="file"/>
                                    <label htmlFor="icon-button-file">
                                        <IconButton color="primary" aria-label="upload picture" component="span">
                                            <PhotoCamera fontSize="large"/>
                                        </IconButton>
                                    </label>


                                </Grid>
                                <Grid item xs={6} className={classes.foto}>

                                    {/*<Fab color="primary" aria-label="add">*/}
                                    {/*    <BackupIcon/>*/}
                                    {/*</Fab>*/}

                                    <input
                                        accept="image/*"
                                        className={classes.input}
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" color="primary" component="span">
                                            Upload
                                        </Button>
                                    </label>

                                </Grid>
                            </Grid>
                        </form>
                        {/*------------------*/}
                    </Paper>
                </Grid>
                {/*<Grid item xs={false} md={2}/>*/}
            </Grid>
        </div>
    )
}

