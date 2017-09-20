import * as React from 'react';
import * as CSSModules from 'react-css-modules';
import Button from '../shared/button/button.js';
import styles from './home.css';

export interface OwnProps {
  count: number;
  onIncrement: () => void;
}

class Home extends React.Component<OwnProps> {
  render() {
    const { onIncrement, count } = this.props;
    return (
      <div>
        <h1>Home!</h1>
        <div>Count: { count }</div>
        <Button onClick={ onIncrement }>Increment</Button>
      </div>
    );
  }
}

export default CSSModules(Home, styles);
