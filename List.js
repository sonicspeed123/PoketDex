// list of pokemon
import React from 'react';
import Dexter from './Dexter';

class List extends React.Component {
  render() {
    let pokemon = this.props.pokemon.map( (pokemon) => {
      return (
        <Pokemon
        key={pokemon}.id} {...item}
        onClickCheck={this.props.onClickCheck}
        />
      );
    });
    return (
      <ul style={{ ListStyle: 'none' }}>
        {pokemon}
      </ul>
    )
  }
}

export default List;
