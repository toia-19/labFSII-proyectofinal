import './Table.css';

// REACT
import React from 'react';

// MUI - TABLA
import Table from '@mui/material/Table';

import TableBody from '@mui/material/TableBody';

import TableCell from '@mui/material/TableCell';

import TableContainer from '@mui/material/TableContainer';

import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';

// BOTONES
import Tooltip from '@mui/material/Tooltip';

import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';

import EditIcon from '@mui/icons-material/Edit';

import AddBoxIcon from '@mui/icons-material/AddBox';

import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';

import Modal from '@mui/material/Modal';

// COLORES
import { yellow } from '@mui/material/colors';

import { red } from '@mui/material/colors';

import { green } from '@mui/material/colors';

// TABLA
function createData(title, subTitle, image, content, price, actions) {
    return { title, subTitle, image, content, price, actions };
}

// MODAL
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function CustomTable() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const rows = [
        createData('Xilófono', 'Instrumento de aire', <img src='https://d1aeri3ty3izns.cloudfront.net/media/10/102273/1200/preview.jpg' alt='Xilófono' class='img-table' />, 'Instrumento de percusión idiófono formado por barras de madera que emiten notas afinadas.', 28000),
        createData('Redoblante', 'Instrumento de percusión', <img src='https://definicion.de/wp-content/uploads/2014/01/redoblante.jpg' alt='Redoblante' class='img-table' />, 'Tambor con bordón que se golpea con una baqueta. Se usa en bandas militares y orquestas, y su sonido depende de la tensión de los parches y el material de la bordonera.', 38000),
        createData('Violín', 'Instrumento de cuerda', <img src='https://th.bing.com/th/id/R.07eac50dd4bef48266f0f0ec2ae95011?rik=PS9AH15KSXV40Q&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2ff%2ff4%2fGerman%2c_maple_Violin.JPG&ehk=%2fkZJpKmWHUsjz370ACgGeDTaq8UMDDaaG5VeVXbY3PY%3d&risl=&pid=ImgRaw&r=0' alt='Violín' class='img-table' />, 'instrumento musical de cuerda y arco originario de Italia', 70000),
        createData('Guitarra', 'Instrumento de cuerda', <img src='https://th.bing.com/th/id/OIP.krc0dZ0OFzKJYnN4CqOn3QHaHa?rs=1&pid=ImgDetMain' alt='Guitarra' class='img-table' />, 'Instrumento de cuerda pulsada, compuesto de una caja de resonancia, un mástil sobre el que va adosado el diapasón o trastero', 65000),
        createData('Adaptador', 'Midi', <img src='https://thumbs4.static-thomann.de/thumb/thumb300x/pics/cms/image/guide/en/midi_interfaces/0027_soundblasterkabel.jpg' alt='Adaptador' class='img-table' />, 'Cable MIDI estándar. Puerto Joystick.', 10000),
    ];


    return (
        <div className="Table">
            {/* TABLA */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell class="row" align="center">Título</TableCell>
                            <TableCell class="row" align="center">Subtítulo</TableCell>
                            <TableCell class="row" align="center">Imagen</TableCell>
                            <TableCell class="row" align="center">Descripción</TableCell>
                            <TableCell class="row" align="center">Precio</TableCell>
                            <TableCell class="row" align="center">Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell class="row" component="th" scope="row">{row.title}</TableCell>
                                <TableCell class="row" align="center">{row.subTitle}</TableCell>
                                <TableCell class="row" align="center">{row.image}</TableCell>
                                <TableCell class="row" align="center">{row.content}</TableCell>
                                <TableCell class="row" align="center">${row.price}</TableCell>

                                <TableCell class="row" align="center">
                                    <Tooltip title="Editar" class="btn-edit">
                                        <IconButton>
                                            <EditIcon sx={{ color: yellow[500] }} />
                                        </IconButton>
                                    </Tooltip>

                                    <Tooltip title="Eliminar" class="btn-delete">
                                        <IconButton>
                                            <DeleteIcon sx={{ color: red[600] }} />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Tooltip title="Agregar" className="btn-add">
                Agregar nuevo ítem
                <IconButton onClick={handleOpen}>
                    <AddBoxIcon sx={{ color: green[400] }} />
                </IconButton>
            </Tooltip>


            {/* MODAL */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        <h1>Agregar nuevo ítem</h1>
                    </Typography>

                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className='i-item'>
                            <label>Ingrese título:</label>
                            <input type="text" id="title"/>
                        </div>

                        <div className='i-item'>
                            <label>Ingrese subtítulo:</label>
                            <input type="text" id="subTitle"/>
                        </div>

                        <div className='i-item'>
                            <label>Ingrese una imagen:</label>
                            <input type="file" accept="image/*" id="image"/>
                        </div>

                        <div className='i-item'>
                            <label>Ingrese una descripción:</label>
                            <input type="text" id="content"/>
                        </div>

                        <div className='i-item'>
                            <label>Ingrese precio:</label>
                            <input type="number" id="price"/>
                        </div>
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
};

export default CustomTable;