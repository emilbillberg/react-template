import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
  render() {
    const { match } = this.props

    return (
      <div>
        <h1>Tickets {this.props.counter} </h1>
        <Link to={ `${ match.path }/detail` }>Detail</Link>
      </div>
    );
  }
}

export default List;
