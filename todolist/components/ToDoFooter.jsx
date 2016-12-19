import React from 'react';

class ToDoFooter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isAllChecked: true
		};
	}
	render() {
		return (
			<div>
				<label>
					<input type='checkbox' onChange={this.props.selectAll.bind(this)} checked={this.props.isAllChecked}/>
					<span>已经完成{this.props.doneNum}/{this.props.allNum}</span>
					<button onClick={this.props.deleteAll.bind(this)}>删除全部</button>
				</label>
			</div>
		);
	}
}

export default ToDoFooter;