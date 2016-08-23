// list of pokemon
import React from 'react';
import Filter from './Filter';

class List extends React.Component {
	render () {
		let pokemon = this.props.pokemon.map( (Pokemon) => {
			return (<li>{pokemon}</li>)		
		});
			return (
				<ul style={{ listStyle: 'none', borderStyle: 'solid'}}>
				this is a filtered list
				{pokemon}
				</ul>
			)
	}
}

export default List;