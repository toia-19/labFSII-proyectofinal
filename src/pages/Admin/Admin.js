import React from 'react';

import './Admin.css';

// COMPONENTE
import Table from '../../components/Table/Table';

function Admin () {
    return(
        <div className='Admin'>
            <h1 className='titulo'>Administrador</h1>

            <Table/>
        </div>
    );
}

export default Admin;