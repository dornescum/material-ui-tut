import React from 'react';
import JudeteTop from "./JuteteTop";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme)=>({

}))
const Judete= () =>{
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <JudeteTop/>
                </Grid>
            </Grid>
        </div>)
}
export default Judete;