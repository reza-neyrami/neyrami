import React, { Component } from 'react';

import '../Styles/App.css';
import '../Styles/bootstrap.css';

export default class User extends Component {
	onremove = () => {
		this.props.onremove(this.props.id);
	};
	render() {
		return (
			<div>
				<ul>
					<li className="panel panel-body">{this.props.name}</li>
					<li className="panel panel-body">{this.props.age}</li>
					<li className="panel panel-body">{this.props.id}</li>
				</ul>
				<button onClick={this.onremove} className="botem btn button">
					x
				</button>
			</div>
		);
	}
}
