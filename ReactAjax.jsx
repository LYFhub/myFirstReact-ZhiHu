import React from 'react';
import $ from 'jquery';

var UserGist = React.createClass ({
	getInitialState: function () {
	    return {
	        username: '',
	        lastGistUrl: ''
	    };
	},

	componentDidMount: function () {
		this.serverRequest = $.get(this.props.source, function (result) {
			var lastGist = result[0];
			this.setState({
				username: lastGist.owner.login,
				lastGistUrl: lastGist.html_url
			});
		}.bind(this));
	},

	componentWillUnmount: function () {
		this.serverRequest.abort;
	},

	render: function () {
		return (
			<div>
				用户 {this.state.username} 最新的Gist地址:
				<a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
			</div>
		);
	}
});

export default UserGist;