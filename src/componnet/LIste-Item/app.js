import React from 'react';
import ReactDOM from 'react-dom';
import NewItem from './componnet/NewItem';
import ItemList from './componnet/ItemList';

import './Styles/App.css';
import './Styles/bootstrap.css';

export default class App extends React.Component {
	state = {
		items: [ 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6' ]
	};

	addItem = (newItem) => {
		this.setState({ items: [ ...this.state.items, newItem ] });
	};

	render() {
		return (
			<div>
				<ItemList items={this.state.items} />
				<NewItem onAdd={this.addItem} />
			</div>
		);
	}
}
if (document.getElementById('index')) {
	ReactDOM.render(<App />, document.getElementById('index'));
}
