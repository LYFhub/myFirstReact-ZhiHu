import React from 'react';
import $ from 'jquery';

import ToDoHeader from './ToDoHeader.jsx';
import ToDoContent from './ToDoContent.jsx';
import ToDoFooter from './ToDoFooter.jsx';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			aToDo: [],
			isChecked: [],
			isAllChecked: false
		};
	}
	componentDidUpdate() {
		
	}
	addItem(para) {
		this.state.aToDo.push(para);
		this.setState({ // 必须使用setState 改变状态，不能直接使用this.state.aToDo = ...
			aToDo: this.state.aToDo
		});
	}
	deleteItem(index) {
		this.state.aToDo.splice(index,1); // 从数组中从index开始删除一个item
		this.setState({
			aToDo: this.state.aToDo
		});
	}
	deleteAll() {
		this.setState({
			aToDo: []
		});
	}
	selectAll() {
		
	}
	selectItem(e) {
		let oTemObj = {
			id: e.target.id,
			ischecked: e.target.checked
		};
		if(e.target.checked){
			this.state.isChecked.push(oTemObj);
		} else {
			this.state.isChecked.pop();
		}
		
		this.setState({
			isChecked: this.state.isChecked
		});
		if (this.state.aToDo.length == this.state.isChecked.length) {
			this.setState({
				isAllChecked: true
			});
		}else {
			this.setState({
				isAllChecked: false
			});
		}
	}
	render() {
		return (
			<div>
				<ToDoHeader addItem={this.addItem.bind(this)} />
				<ToDoContent todos={this.state.aToDo} deleteItem={this.deleteItem.bind(this)}
					selectItem={this.selectItem.bind(this)} isDone={this.state.isDone}/>
				<ToDoFooter deleteAll={this.deleteAll.bind(this)} selectAll={this.selectAll.bind(this)} 
					allNum={this.state.aToDo.length} doneNum={this.state.isChecked.length} 
					isAllChecked={this.state.isAllChecked}/>
			</div>
		);
	}
}

export default ToDoList;