import React from 'react';

var HelloMessage = React.createClass({
	getInitialState: function () {
		return {
			word: 'Hello Yunfei'
		};
	},

	handleChange: function (event) {
		this.setState({word: event.target.value});
	},

	render: function () {
		var inputValue = this.state.word;
		return (
			<div>
				<input type='text' onChange={this.handleChange} value={inputValue}/>
				<h4>{inputValue}</h4>
			</div>
		);
	}
});

export default HelloMessage;