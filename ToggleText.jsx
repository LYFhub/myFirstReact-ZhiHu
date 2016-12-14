import React from 'react';

var ToggleText = React.createClass({
	getInitialState: function() {
	    return {
	          liked: false
	    };
	},

	handleClick: function(event){
		this.setState({liked: !this.state.liked});
	},

	render: function() {
		var text = this.state.liked ? '喜欢' : '不喜欢';
		return (
			<h2 onClick={this.handleClick}>你 {text} 我, 点我切换状态</h2>
		);
	}
});

export default ToggleText;