import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root'

import  TickTacToe from './TicTacToe';

const Hot = hot(TickTacToe);

ReactDom.render(<Hot />, document.querySelector('#root'));