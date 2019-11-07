import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './componnet/Redux';
class Index extends Component {
	render() {
		return (
			<div>
				<App />
			</div>
		);
	}
}

export default Index;
if (document.getElementById('index')) {
	ReactDOM.render(<Index />, document.getElementById('index'));
}
