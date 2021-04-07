import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useTheme} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import BackupIcon from '@material-ui/icons/Backup';
import Box from '@material-ui/core/Box';


// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    form: {
        padding: '0.2rem'
    },
    formInput: {
        padding: '1rem'
    },
    foto: {
        padding: '0.7rem'
    },

}))

const HomeFormCompany = () => {
    const classes = useStyles()
    const theme = useTheme();
    return (
        <form noValidate autoComplete='off'>
            <Grid container className={classes.form}>
                {/*tip autorizat*/}
                <Grid item xs={12} lg={3} className={classes.formInput}>
                    <Typography variant='h6' align='justify'>Tip autorizat*</Typography>
                </Grid>
                <Grid item xs={12} lg={9}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{marginTop: '0.9rem'}}
                        size='large'
                    >Firma</Button>
                </Grid>
                {/*======Nume=====*/}
                <Grid item xs={12} lg={3} className={classes.formInput}>
                    <Typography variant='h6' align='justify'>Nume</Typography>
                </Grid>
                <Grid item xs={12} lg={9} className={classes.form}>
                    <TextField
                        fullWidth
                        label="firma"
                        variant='outlined'
                        color='secondary'
                        required
                    >
                    </TextField>
                </Grid>
                {/*========Cod======*/}
                {/*<Paper elevation={3} variant="outlined" style={{padding:"1rem"}}>fdsfdsfsdf</Paper>*/}
                <Grid item xs={12} lg={3} className={classes.formInput}>
                    <Typography variant='h6' align='justify'>Cod</Typography>
                </Grid>
                <Grid item xs={12} lg={9} className={classes.form}>
                    <TextField
                        fullWidth
                        label="firma"
                        variant='outlined'
                        color='secondary'
                        required>
                    </TextField>
                </Grid>
                {/*=========Descriere=====*/}
                <Grid item xs={12} lg={3} className={classes.formInput}>
                    <Typography variant='h6' className={classes.form} align='justify'>Descriere</Typography>
                </Grid>
                <Grid item xs={12} lg={9}>
                    <TextField
                        fullWidth
                        label="firma"
                        variant='outlined'
                        color='secondary'
                        multiline
                        rows={5}
                        required
                        className={classes.form}
                    >
                    </TextField>
                </Grid>
                {/*========Adresa======*/}
                <Grid item xs={12} lg={3} className={classes.formInput}>
                    <Typography variant='h6' className={classes.form} align='justify'>Adresa *</Typography>
                </Grid>
                <Grid item xs={12} lg={9}>
                    <TextField
                        fullWidth
                        label="firma"
                        variant='outlined'
                        color='secondary'
                        multiline
                        rows={3}
                        required
                        className={classes.form}
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
                    {/*<Card className={classes.root}>*/}
                    {/*    <CardActionArea>*/}
                    {/*        <CardMedia*/}
                    {/*            className={classes.media}*/}
                    {/*            image="/static/images/cards/contemplative-reptile.jpg"*/}
                    {/*            title="Contemplative Reptile"*/}
                    {/*        />*/}
                    {/*        <CardContent>*/}
                    {/*            <Typography gutterBottom variant="h5" component="h2">*/}
                    {/*                Lizard*/}
                    {/*            </Typography>*/}
                    {/*            <Typography variant="body2" color="textSecondary" component="p">*/}
                    {/*                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging*/}
                    {/*                across all continents except Antarctica*/}
                    {/*            </Typography>*/}
                    {/*        </CardContent>*/}
                    {/*    </CardActionArea>*/}
                    {/*    <CardActions>*/}
                    {/*        <Button size="small" color="primary">*/}
                    {/*            Share*/}
                    {/*        </Button>*/}
                    {/*        <Button size="small" color="primary">*/}
                    {/*            Learn More*/}
                    {/*        </Button>*/}
                    {/*    </CardActions>*/}
                    {/*</Card>*/}

                </Grid>
                <Grid item xs={6} className={classes.foto}>

                    <Fab color="primary" aria-label="add">
                        <BackupIcon/>
                    </Fab>

                </Grid>
            </Grid>
        </form>
    )
}
export default HomeFormCompany;