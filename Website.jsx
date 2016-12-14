import React from 'react';

var Website = React.createClass({
	render: function() {
		return (
			<div>
				<Name name={this.props.name} />
				<Link site={this.props.site} />
			</div>
		);
	}
});

var Name = React.createClass({
	render: function(){
		return (
			<h1>{this.props.name}</h1>
		);
	}
});

var Link = React.createClass({
	render: function() {
		return (
			<h2>{this.props.site}</h2>
		);
	}
});


export default Website;