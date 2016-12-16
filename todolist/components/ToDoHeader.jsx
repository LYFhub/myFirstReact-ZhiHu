import React from 'react';
import $ from 'jquery';

class ToDoHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
	}
	// addItem(para) {
	// 	var item = document.createElement('p');
	// 	item.innerHTML = para;
	// 	$('#itemList').after(item);
	// }
	keyUp(e) {
		// keyCode 13 是键盘上固定的回车键
		if (e.keyCode == 13) {
			this.props.addItem(e.target.value);
			e.target.value = '';
		}
	}
	render() {
		return (
			<div>
				<input type="text" placeholder="请输入你需要完成的任务，按回车确认" 
					onKeyUp={this.keyUp.bind(this)} />
			</div>
		);
	}
}

export default ToDoHeader;