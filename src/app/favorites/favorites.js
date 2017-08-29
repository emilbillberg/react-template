import React, { Component } from 'react';

class Favorites extends Component {
  render() {
    const list = [
      {name: 'SSK', id: 1},
      {name: 'Linköping', id: 2},
      {name: 'Djurgården', id: 3},
    ]

    return (
      <div>
        <h1>Favorites</h1>
        <ul>
        { list.map(item => <li key={ item.id }>{ item.name }</li>) }
        </ul>
      </div>
    );
  }
}

export default Favorites;
