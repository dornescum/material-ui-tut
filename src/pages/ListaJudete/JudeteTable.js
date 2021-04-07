import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }
function createData(number, license, county, from, to, subscription, status, addCounty) {
    return { number, license, county, from, to, subscription, status, addCounty };
}

const rows = [
    createData(1, 'Pro', 'Normandia', '14.11.2020', '13.11.2021', '0.00 Ron', 'Activ', 'Prelungire'),
    createData(2, 'Pro', 'Normandia', '14.11.2020', '13.11.2021', '0.00 Ron', 'Activ', 'Prelungire'),
    createData(3, 'Standard', 'Normandia', '14.11.2020', '13.11.2021', '0.00 Ron', 'Activ', 'Prelungire'),
    createData(4, 'Pro', 'Normandia', '14.11.2020', '13.11.2021', '0.00 Ron', 'Activ', 'Prelungire'),
];

export default function JudeteTable() {
    const classes = useStyles();

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
                        <TableCell>Adauga Judet</TableCell>
                        {/*align="right"*/}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.number}>
                            <TableCell component="th" scope="row">
                                {row.number}
                            </TableCell>
                            <TableCell color='primary'>{row.license}</TableCell>
                            <TableCell>{row.county}</TableCell>
                            <TableCell>{row.from}</TableCell>
                            <TableCell>{row.to}</TableCell>
                            <TableCell>{row.subscription}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.addCounty}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}