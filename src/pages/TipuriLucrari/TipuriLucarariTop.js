import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
}));


const TipuriLucrariTop= () =>{
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading} variant='h5'>Tipuri de lucrari</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Alegeti din lista de mai jos tipurile de lucrari prestate.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default TipuriLucrariTop;