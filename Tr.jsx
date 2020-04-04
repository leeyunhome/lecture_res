import React from 'react';
import Td from './Td';

const Tr = ({ rowData }) => {
    return (
        <tr>
            {Array(rowData.length).fill().map((td) => (<td>{''}</td>))}
        </tr>
    );
};

export default Tr;