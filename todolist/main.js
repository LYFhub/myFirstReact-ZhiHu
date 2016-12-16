import React from 'react';
import ReactDom from 'react-dom';

import ToDoHeader from './components/ToDoHeader.jsx';
import ToDoList from './components/ToDoList.jsx';

// ReactDom.render(<ToDoHeader />, document.getElementById('app'));
ReactDom.render(<ToDoList />, document.getElementById('app'));