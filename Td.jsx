import React, { useCallback, useEffect, useRef } from 'react';
import { CLICK_CELL } from './TicTacToe';

const Td = ({ rowIndex, cellIndex, dispatch, cellData }) => {
    console.log('td rendered');

    const ref = useRef([]);
    useEffect(() => {
        console.log(rowIndex === ref.current[0], cellIndex === ref.current[1], dispatch === ref.current[2], cellData === ref.current[3]);
        ref.current = [rowIndex, cellIndex, dispatch, cellData];
    }, [rowIndex, cellIndex, dispatch, cellIndex]);

    const onClickTd = useCallback(() => {
        console.log(rowIndex, cellIndex);
        if (cellData) {
            return;
        }
        dispatch({type: CLICK_CELL, row: rowIndex, cell: cellIndex });
        // dispatch({type: CHANGE_TURN});
    }, [cellData]);

    return (
        <td onClick={onClickTd}>{cellData}</td>
    )
};

export default Td;