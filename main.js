import React from 'react';
import ReactDom from 'react-dom';
 
import App from './App.jsx';
import Ul from './Ul.jsx';
import Website from './Website.jsx';
import ToggleText from './ToggleText.jsx';
import StateAndProps from './StateAndProps.jsx';
import SetState from './SetState.jsx';
import ComponentDidMount from './ComponentDidMount.jsx';
import AllComStateBtn from './AllComponentState.jsx';
import UserGist from './ReactAjax.jsx';
import FormEvent from './FormEvent.jsx';
import FormContent from './FormContent.jsx';

var appStyle = {
	fontSize: 16,
	color: '#ff00ff'
};
var helloStyle = {
	color: '#08f'
};

var HelloMessage = React.createClass ({
	getDefaultProps: function() {  // 为props 设置默认值，也可以直接在ReactDom.render 函数中指定
		return {
			said: "I am in ShangHai !"
		}
	},
	render: function() {
		return (
			<h1 style={helloStyle}>Hello World, {this.props.said}</h1>
		);
	}
});

{/*var WebSite = React.createClass({
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
})*/}



{/*ReactDom.render(<App />, document.getElementById('app'));
ReactDom.render(<Ul />, document.getElementById('ultest'));
ReactDom.render(<h1 style = {appStyle}>zhengzhou university of light industry </h1>, document.getElementById('color'));*/}
{/*ReactDom.render(<HelloMessage said="I`m YunFei,How are you?"/>, document.getElementById('hello'));*/}
ReactDom.render(<HelloMessage />, document.getElementById('hello'));
ReactDom.render(<Website name="LYF" site="Zhengzhou university of light industry" />, document.getElementById('siteInfo'));
ReactDom.render(<ToggleText />, document.getElementById('toggleText'));
ReactDom.render(<StateAndProps />, document.getElementById('stateAndProps'));
ReactDom.render(<SetState />, document.getElementById('setState'));
ReactDom.render(<ComponentDidMount name = 'Avanade' />, document.getElementById('comDidMount'));
ReactDom.render(<div><AllComStateBtn /></div>, document.getElementById('allComState'));
ReactDom.render(<UserGist source='https://api.github.com/users/octocat/gists' />, document.getElementById('userGist'));
ReactDom.render(<FormEvent />, document.getElementById('formEvent'));
ReactDom.render(<div><FormContent /></div>, document.getElementById('formContent'));