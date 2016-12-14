import React from 'react';

var StateAndProps = React.createClass({
	getInitialState: function() {  // 此处函数的返回使用大括号 {}，而render 函数的返回使用小括号()
		return {
			name: "liyunfei",
			site: "http://baidu.com",
			text: "个人网站"
		};
	},

	render: function() {
		return (
			<div>
				<Name name = {this.state.name} />
				<Link site = {this.state.site} text = {this.state.text} />
			</div>
		);
	}
});

var Name = React.createClass({
	render: function() {
		return (
			<h1>{this.props.name}</h1>
		);
	}
});

var Link = React.createClass({
	propTypes: {
    	text: React.PropTypes.string.isRequired,
    },

	render: function() {
		return (
			<a href={this.props.site} >
				{this.props.text}
			</a>
		);
	}
});

export default StateAndProps;