import React from 'react';

var Content = React.createClass({
	render: function () {
		return (
			<div>
				<input type='text' value={this.props.contentValue} onChange={this.props.contentChange}/>
				<h3>{this.props.contentValue}</h3>
			</div>
		);
	}
});

var FormContent = React.createClass({
	getInitialState: function () {
		return {
			value: 'Hello China'
		};
	},

	handleChange: function (event) {
		this.setState({
			value: event.target.value
		});
	},

	render: function() {
		var value = this.state.value;
		return (
			<div>
				<Content contentValue={value} contentChange={this.handleChange}>
				</Content>
			</div>
		);
	}
});

export default FormContent;