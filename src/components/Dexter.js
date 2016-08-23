//Main background for pokedex
import React from 'react';
//will style later
import Filter from './Filter';
import List from './List';
import PokeInfo from './PokeInfo';


class Dexter extends React.Component{
	constructor(props){
		super(props);
		//database of pokemon
		this.state = {pokemon: [
			{
				id: 1,
				name: 'Bulbasaur',
				description: "this is bulba",
				type1: 'grass',
				type2: 'poison',
				bodyType: 'quad',
				abilities: ['Overgrow','Chlorophyll']
			},
			{
				id: 2,
				name: 'Ivysaur',
				description: "this is Ivy",
				type1: 'grass',
				type2: 'poison',
				bodyType: 'quad',
				abilities: ['Overgrow','Chlorophyll']
			},
			{
				id: 3,
				name: 'Venusaur',
				description: "this is venu",
				type1: 'grass',
				type2: 'poison',
				bodyType: 'quad',
				abilities: ['Overgrow','Chlorophyll']
			}
		], filteredPoke:[], filter:[]}
	}


	render(){
		return(
			<div className='row'>
				<PokeInfo currentMon={this.state.pokemon[2]} />
{			<List pokemon={this.state.pokemon} />
//				<Filter />
}
			</div>
			)
	}
}

export default Dexter;