import React from 'react';
import { SortableContainer, SortableElement, SortableHandle, arrayMove } from 'react-sortable-hoc';

const DragHandle = SortableHandle(() => <span className="handle">&#x2261;</span>);

const SortableItem = SortableElement(({ value }) => (
	<li>
		<DragHandle />
		{value}
	</li>
));

const SortableList = SortableContainer(({ items }) => {
	return <ul>{items.map((value, index) => <SortableItem key={`item-${index}`} index={index} value={value} />)}</ul>;
});

export default class ItemList extends React.Component {
	state = {
		items: this.props.items
	};
	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState({
			items: arrayMove(this.state.items, oldIndex, newIndex)
		});
	};

	render() {
		return <SortableList items={this.props.items} onSortEnd={this.onSortEnd} />;
	}
}
