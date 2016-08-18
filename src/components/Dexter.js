//Main background for pokedex
import React from 'react';
//will style later

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
			<div>
			//pokeinfo wll render individually selected pokemon
				<PokeInfo />
			//list will render a flitered/unfiltered list of pokemon	
				<List />
			//filter will set setting for filter function for list
				<Filter />
			</div>
			)
	}
}

export default Dexter;