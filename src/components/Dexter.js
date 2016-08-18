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
		]}
	}

	render(){
		return(
			<div>
			</div>
			)
	}
}

export default Dexter;