import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
  render() {
    const list = [
      {name: 'SSK', id: 1},
      {name: 'Linköping', id: 2},
      {name: 'Djurgården', id: 3},
    ]

    return (
      <div>
        <h1>Teams</h1>
        <ul>
        { list.map((item) => {
          return <li key={ item.id }>
            <Link to="/teams/detail/">{ item.name }</Link>
          </li>
        }) }
        </ul>
      </div>
    );
  }
}

export default List;
