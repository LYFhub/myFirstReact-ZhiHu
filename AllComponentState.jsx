import React from 'react';

var AllComStateBtn = React.createClass({
	getInitialState: function () {
	    return {
	          data : 0
	    };
	},

	setNewNumber: function () {
		this.setState({
			data : this.state.data + 1
		});
	},

	render: function () {
		return (
			<div>
				<button onClick={this.setNewNumber}>INCREMENT</button>
				<Content myNumber={this.state.data}></Content>
			</div>
		);
	}
});

var Content = React.createClass({
	componentWillMount: function () {
		console.log('component will mount');
	},

	componentDidMount: function () {
		console.log('component did mount');
	},

	componentWillReceiveProps: function (nextProps) {
		console.log('component will receive props');
	},

	shouldComponentUpdate: function (nextProps, nextState) {
		return true;     
	},

	componentWillUpdate: function (nextProps, nextState) {
		console.log('component will update');
	},

	componentDidUpdate: function (prevProps, prevState) {
		console.log('component did update');    
	},

	componentWillUnmount: function () {
		console.log('component will unmount');
	},

	render: function () {
		return (
			<div>
				<h2>{this.props.myNumber}</h2>
			</div>
		);
	}
});

export default AllComStateBtn;