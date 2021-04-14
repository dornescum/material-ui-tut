import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        border: " 1px solid #ccc",
        borderRadius: "var(--radius)",
        marginTop: theme.spacing(2)
    },
    formControl: {
        margin: theme.spacing(3),
    },
    btn:{
        margin: theme.spacing(1)
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
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
    formCounty:{
        padding: '0.5rem .1rem',
        [theme.breakpoints.up('xs')]: {
            paddingTop: theme.spacing(0),
        },
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(1),
        },
    },
    formMain:{
        padding: theme.spacing(1)
    }
}));
const judete = [
    {
        value: '1',
        label: 'Alba',
    },
    {
        value: '2',
        label: 'Arad',
    },
    {
        value: '3',
        label: 'Arges',
    },
    {
        value: '4',
        label: 'Bacau',
    },
];


const DateFiscaleMain =(event)=>{
    const classes = useStyles();
    const [judet, setJudet] = React.useState('');

    const handleChange = (event) => {
        setJudet(event.target.value);
    };

    return(
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                        {/*------------------*/}
                        <form noValidate autoComplete='off' className={classes.formMain}>
                            <Grid container className={classes.form}>

                                {/*======Nume CUI=====*/}
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="Nume"
                                        variant='outlined'
                                        color='secondary'
                                        required
                                    >
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="CUI"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                {/*======registru judet=====*/}
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="Nr Registru Comert "
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} lg={6} className={classes.formCounty}>
                                    <TextField
                                        id="outlined-select-currency-native"
                                        select
                                        label="Judet"
                                        fullWidth
                                        value={judet}
                                        onChange={handleChange}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="outlined"
                                    >
                                        {judete.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
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

                                {/*========localitate Telefon =====*/}
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="Localitate"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="Telefon"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>

                                {/*========Fax email=====*/}
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="Fax"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                {/*======banca iban=======*/}
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="Banca"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} lg={6} className={classes.form}>
                                    <TextField
                                        fullWidth
                                        label="IBAN"
                                        variant='outlined'
                                        color='secondary'
                                        required>
                                    </TextField>
                                </Grid>
                                {/*=====icons=======*/}

                            </Grid>
                        </form>
                        {/*------------------*/}
                </Grid>

                <Grid item align='center' xs={12}>
                    <Button variant="contained" color="primary" component="span" startIcon={<SaveIcon />}  className={classes.btn}>
                        Salvare
                    </Button>
                </Grid>
            </Grid>
        </div>
    )
}
export default DateFiscaleMain;