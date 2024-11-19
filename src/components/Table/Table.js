import './Table.css';

// REACT
import React from 'react';

// MUI
import Table from '@mui/material/Table';

import TableBody from '@mui/material/TableBody';

import TableCell from '@mui/material/TableCell';

import TableContainer from '@mui/material/TableContainer';

import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';

function createData(title, subTitle, image, content, price) {
    return { title, subTitle, image, content, price };
}

function CustomTable() {

    const rows = [
        createData('Xilófono', 'Instrumento de aire', <img src='' alt='Adaptador'/>, '', 28000),
        createData('Redoblante', 'Instrumento de percusión', <img src='' alt='Adaptador'/>, '', 38000),
        createData('Violín', 'Instrumento de cuerda', <img src='' alt='Adaptador'/>, '', 70000),
        createData('Guitarra', 'Instrumento de cuerda', <img src='' alt='Adaptador'/>, '', 65000),
        createData('Adaptador', 'Midi', <img src='../../Images/CableMIDIestándar_PuertoJoystick.png' alt='Adaptador'/>, 'Cable MIDI estándar. Puerto Joystick.', 10000),
    ];

    return (
        <div className="Table">
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Título</TableCell>
                            <TableCell align="right">Subtítulo</TableCell>
                            <TableCell align="right">Imagen</TableCell>
                            <TableCell align="right">Descripción</TableCell>
                            <TableCell align="right">Precio</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.title}</TableCell>
                                <TableCell align="right">{row.subTitle}</TableCell>
                                <TableCell align="right">{row.image}</TableCell>
                                <TableCell align="right">{row.content}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
};

export default CustomTable;