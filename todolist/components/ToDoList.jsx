import React from 'react';
import $ from 'jquery';

import ToDoHeader from './ToDoHeader.jsx';
import ToDoContent from './ToDoContent.jsx';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			aToDo: []
		};
	}
	addItem(para) {
		this.state.aToDo.push(para);
		this.setState({ // 必须使用setState 改变状态，不能直接使用this.state.aToDo = ...
			aToDo: this.state.aToDo
		});
	}
	deleteItem(index) {
		this.state.aToDo.splice(index,1);
		this.setState({
			aToDo: this.state.aToDo
		});
	}
	render() {
		return (
			<div>
				<ToDoHeader addItem={this.addItem.bind(this)} />
				<ToDoContent todos={this.state.aToDo} deleteItem={this.deleteItem.bind(this)} />
			</div>
		);
	}
}

export default ToDoList;