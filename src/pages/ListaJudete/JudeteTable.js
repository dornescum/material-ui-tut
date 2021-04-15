import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
// import Trophy from '../../utils/svg/trophy.svg'
import buton from '../../style/index.css'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    Button:{
        backgroundColor:"var(--clr-pro)",
        color:"var(--white)",
        padding:".3rem .5rem",
        width:"7rem",
        "&:hover":{
            backgroundColor:"var(--mc-color)",
        }
    },
    btnPro:{
        backgroundColor:"var(--clr-pro)",
        color:"var(--white)",
        padding:".3rem .5rem",
        width:"7rem",
        "&:hover":{
            backgroundColor:"var(--mc-color)",
        }
    },
    btnStandard:{
        backgroundColor:"var(--mc-color)",
        color:"var(--white)",
        padding:".3rem .5rem",
        width:"7rem",
        "&:hover":{
            backgroundColor:"var(--blue-hover)",
        }
    },
    btnCounty:{
        backgroundColor:"var(--mc-color)",
        fontSize:12,
        color:"var(--white)",
        padding:".3rem .5rem",
        width:"7rem",
        "&:hover":{
            backgroundColor:"var(--blue-hover)",
        }
    },

});

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }
function createData(number, license, county, from, to, subscription, status, addCounty,) {
    let licenseClass ='';
    // if(license ==='Pro'){
    //     licenseClass='classes.btnPro'
    // }
    return { number, license, county, from, to, subscription, status, addCounty, licenseClass };
}

const rows = [
    createData(1, 'Pro', 'Normandia', '14.11.2020', '13.11.2021', '0.00 Ron', 'Activ', 'Prelungire'),
    createData(2, 'Pro', 'Normandia', '14.11.2020', '13.11.2021', '0.00 Ron', 'Activ', 'Prelungire'),
    createData(3, 'Standard', 'Normandia', '14.11.2020', '13.11.2021', '0.00 Ron', 'Activ', 'Prelungire'),
    createData(4, 'Pro', 'Normandia', '14.11.2020', '13.11.2021', '0.00 Ron', 'Activ', 'Prelungire'),
];

export default function JudeteTable() {
    const classes = useStyles();
    const [standard, setStandard]=useState(true);
    if (rows.license === 'Pro'){
       // rows.license.style.backgroundColor="red";
       rows.license.classList.add('buton')
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nr. Crt.</TableCell>
                        <TableCell>Tip de abonament</TableCell>
                        <TableCell>Judet</TableCell>
                        <TableCell>De la</TableCell>
                        <TableCell>Pana la</TableCell>
                        <TableCell>Valoare abonament</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>
                            <Button className={classes.btnCounty}>
                            Adauga Judet
                            </Button>
                            </TableCell>
                        {/*align="right"*/}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.number}>
                            <TableCell component="th" scope="row">
                                {row.number}
                            </TableCell>
                            <TableCell color="primary">
                                <Button className={classes.btnCounty }>
                                {row.license}
                                </Button>
                            </TableCell>
                            <TableCell>
                                    {row.county}
                                </TableCell>
                            <TableCell>{row.from}</TableCell>
                            <TableCell>{row.to}</TableCell>
                            <TableCell>{row.subscription}</TableCell>
                            <TableCell>
                                <Button className={classes.btnStandard}>
                                {row.status}
                                </Button>
                                </TableCell>
                            <TableCell>
                                <Button className={classes.btnStandard}>
                                {row.addCounty}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}