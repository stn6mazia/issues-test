import React from "react";
import ReactDOM from 'react-dom';
import './index.scss';
import TodoList from './TodoList';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

var destnation = document.querySelector('#content');

ReactDOM.render(
    <div>
        <TodoList/>
    </div>,
    destnation
);