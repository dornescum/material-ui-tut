import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from '@material-ui/icons/Save';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

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
   }
}));

export default function TipuriLucrariMain() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        c1: true,
        c2: true,
        c3: true,
        c4: true,
        c5: true,
        c6: true,
        c7: true,
        c8: true,
        c9: true,
        c10: true,
        c11: true,
        c12: true,
        c13: true,
        c14: true,
        c15: true,
    });

    const handleChange = (event) => {
        setState({...state, [event.target.name]: event.target.checked});
    };

    const {c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15} = state;
    const error = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15].filter((v) => v).length !== 2;

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c1} onChange={handleChange} name="c1" color="primary"/> }
                                label="cadastru și intabulare apartament"

                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c2} onChange={handleChange} name="c2" color="primary"/>}
                                label="cadastru și intabulare apartament"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c3} onChange={handleChange} name="c3" color="primary"/>}
                                label="cadastru și intabulare apartament"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c4} onChange={handleChange} name="c4" color="primary"/>}
                                label="cadastru și intabulare apartament"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c5} onChange={handleChange} name="c5" color="primary"/>}
                                label="cadastru și intabulare apartament"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c6} onChange={handleChange} name="c6" color="primary"/>}
                                label="cadastru și intabulare apartament"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c7} onChange={handleChange} name="c7" color="primary"/>}
                                label="cadastru și intabulare apartament"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c8} onChange={handleChange} name="c8" color="primary"/>}
                                label="cadastru și intabulare apartament"
                            />
                        </FormGroup>


                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c9} onChange={handleChange} name="c9" color="primary"/>}
                                label="cadastru și intabulare apartament"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c10} onChange={handleChange} name="c10" color="primary" />}
                                label="cadastru și intabulare apartament"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c11} onChange={handleChange} name="c11" color="primary" />}
                                label="cadastru și intabulare apartament"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c12} onChange={handleChange} name="c12" color="primary" />}
                                label="cadastru și intabulare apartament"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c13} onChange={handleChange} name="c13" color="primary" />}
                                label="cadastru și intabulare apartament"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c14} onChange={handleChange} name="c14" color="primary" />}
                                label="cadastru și intabulare apartament"
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={c15} onChange={handleChange} name="c15" color="primary" />}
                                label="cadastru și intabulare apartament"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
                <Grid item align='center' xs={12}>
                    <Button variant="contained" color="primary" component="span" startIcon={<SaveIcon />}  className={classes.btn}>
                        Salvare
                    </Button>
                    <Button variant="contained" color="primary" component="span" startIcon={<RotateLeftIcon />}  className={classes.btn}>
                        Resetare
                    </Button>
                </Grid>

            </Grid>
        </div>
    );
}
