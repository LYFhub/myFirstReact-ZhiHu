import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

class ContentItem extends React.Component {
	constructor(props) {
		super(props);
		
	}
	// 删除item事件
	handleClickDelete(e) {
		this.props.deleteItem(this.props.key);
	}
	// 鼠标移入事件
	handleMouseOver() {
		ReactDom.findDOMNode(this).style.background = '#ccc';
		ReactDom.findDOMNode(this.refs.delButton).style.display = 'inline-block';
	}
	// 鼠标移出事件
	handleMouseOut() {
		ReactDom.findDOMNode(this).style.background = '#fff';
		ReactDom.findDOMNode(this.refs.delButton).style.display = 'none';
	}
	render() {
		return (
			<li onMouseOver={this.handleMouseOver.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
				<input type='checkbox' />
				<span>{this.props.text}</span>
				<button ref="delButton" onClick={this.handleClickDelete.bind(this)}>删除</button>
			</li>
		);
	}
}

class ToDoContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
	}
	render() {
		if (this.props.todos.length == 0) {
			return (
				<div className="todo-empty">没有待办任务</div>
			);
		} else {
			return (
				<ul className="todo-main">
					{
						this.props.todos.map((todo,index) => {
							// {...this.props} 用来传递ToDoList中ToDoContent的todos属性和delete方法。
							return <ContentItem key={index} text={todo}  {...this.props}/>
						})
						//Each child in an array or iterator should have a unique "key" prop. Check the render method of `ToDoContent`. See https://fb.me/react-warning-keys for more information.
					}
				</ul>
			);
		}
	}
}

export default ToDoContent;