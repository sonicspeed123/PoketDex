import React from 'react';
import Filter from './Filter';
import List from './List';
import PokeInfo from './PokeInfo';

class Dexter extends React.Component{
	constructor(props){
		super(props);
		this.setFilter = this.setFilter.bind(this);
		this.filteredPoke = this.filteredPoke.bind(this);
		//database of pokemon

		}

		setFilter(filter) {
			this.setState({ filter });

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


	filteredPoke() {
		switch(this.state.filter[0]) {
			case 'grass':
				this.state.pokemon.forEach(function(crntVal, i, arr){
					if(type1 === 'grass' || type2 === 'grass'){
					return filteredPoke.append(crntVal)	
					}
				});
		}
	}

	render(){
	  		return(
	  			<div>
	 			//pokeinfo wll render individually selected pokemon

	 					<PokeInfo />
	 			//list will render a flitered/unfiltered list of pokemon
	 					<List />
	 			//filter will set setting for filter function for list
	 					<Filter setFilter={this.setFilter currentFilter={this.state.filter}} />
	  			</div>
			)

	}
}

export default Dexter;
