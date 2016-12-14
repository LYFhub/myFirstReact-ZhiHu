import React from 'react';

var SetState = React.createClass({
	getInitialState: function(){
		return {
			clickCount: 0
		};
	},

	handleClick: function(){
		this.setState(function(state){
			return {
				clickCount: state.clickCount + 1
			};
		});
	},

	render: function(){
		return (
			<h1 onClick={this.handleClick} >点击我，点击次数为：{this.state.clickCount} </h1>
		);
	}
});

export default SetState;