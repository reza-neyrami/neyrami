import React from 'react';

export default class NewItem extends React.Component {
	state = { value: '' };

	updateValue = (evt) => {
		this.setState({ value: evt.target.value });
		console.log(evt.target.value);
	};

	addNewItem = () => {
		this.props.onAdd(this.state.value);
		this.setState({ value: '' });
	};

	render() {
		return (
			<div className="form">
				<input
					type="text"
					placeholder="add a new item..."
					value={this.state.value}
					onChange={this.updateValue}
					onBlur={this.addNewItem}
				/>
			</div>
		);
	}
}
