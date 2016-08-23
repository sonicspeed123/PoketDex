import React from 'react';
import Filter from './Filter';

class PokeInfo extends React.Component{
	constructor(props) {
		super(props);
	}
//take currently selected pokemon
	render() {
		let {id, name, description, type1, type2, bodyType, abilities} = this.props.currentMon;
    return (
    	<div>
	    	<img className='col' src={"../src/images/"+ id +".jpg"} alt={name} />
	    	<p className='col'>{name}</p>
	    	<p className='col'>{description}</p>
	    	<p className='col'>{type1}/{type2}</p>
	    	<p className='col'>{bodyType}</p>
	    	<p className='col'>{abilities}</p>
    	</div>
    )
	}
}

class PokeInfo extentds React.component{
 	constructor(props){
 		super(props);
 	}
 //take currently selected pokemon


 	render() {
     let { currentMon } = this.props;

     return (<div></div>)
 	}
 //find pic
 //find description
 //find type and abilies

 //render pic in div
 //render des in div
 //render type and abil in div

export default PokeInfo;
