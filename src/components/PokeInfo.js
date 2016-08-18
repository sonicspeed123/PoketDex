import React from 'react';

class PokeInfo extends React.Component{
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

export default PokeInfo;