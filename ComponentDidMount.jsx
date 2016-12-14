import React from 'react';

var ChangeOpacity = React.createClass({
	getInitialState: function() {
	    return {
	          opacity : 1
	    };
	},

	componentDidMount: function() {
		this.timer = setInterval(function () {
			var opacity = this.state.opacity;
			opacity-=0.05;
			if (opacity < 0.1) {
				opacity = 1;
			}
			this.setState({
				opacity : opacity
			});
		}.bind(this), 100);
	},

	render: function(){
		return (
			<div style={{opacity: this.state.opacity,color:'red'}} >
				<h1>Hello {this.props.name}</h1>
			</div>
		);
	}
});

export default ChangeOpacity;