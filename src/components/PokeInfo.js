import React from 'react';

class PokeInfo extends React.Component{
//take currently selected pokemon
	render() {
		let {id, name, description, type1, type2, bodyType, abilities} = this.props.currentMon;
    return (
    	<div style={{backgroundColor: '#c7b28a'}} className='row col'>
	    	<div className='col s3'>
		    	<p className=''>{name}</p>
			    <p className=''>{type1}/{type2}</p>
		    	<p className=''>{bodyType}</p>
		    	<p className=''>{abilities}</p>
		    </div>
    		<div className='col'>
		    	<img src={`../src/images/${id}.jpg`} alt={name} />
	    	</div>
		    <div className='col s3'>
		    	<p className=''>{description}</p>
		    </div>
    	</div>
    )
	}
}

export default PokeInfo;