import './Navbar.css';

import React from 'react';

// REACT ROUTER
import { useNavigate } from 'react-router-dom';

// MENÚ DESPLEGABLE
import { Menubar } from 'primereact/menubar';

function Navbar() {
    // Constante para manejar navegación de rutas
    const navigate = useNavigate();

    // Items de menú
    const items = [
        {
            label: 'Inicio', icon: 'pi pi-fw pi-home', command: () => { navigate('/') }
        },
        {
            label: 'Populares', icon: 'pi pi-heart', command: () => { navigate('/popular') }
        },
        // Menú desplegable -> categorías de instrumentos
        {
            label: 'Instrumentos', icon: 'pi pi-bars', items: [
                {
                    label: 'Instrumentos de aire', className: 'i-menu-desplegable', command: () => { navigate('/categoria') }
                },
                {
                    label: 'Instrumendos de cuerda', className: 'i-menu-desplegable', command: () => { navigate('/categoria') }
                },
                {
                    label: 'Instrumentos de percusión', className: 'i-menu-desplegable', command: () => { navigate('/categoria') }
                },
                {
                    label: 'Instrumentos Midli', className: 'i-menu-desplegable', command: () => { navigate('/categoria') }
                }
            ]
        },
        {
            label: 'Admin', icon: 'pi pi-user', command: () => { navigate('/admin') }
        }
    ];

    return (
        <div className="navbar">
            <Menubar model={items} />
        </div>
    )
}

export default Navbar;