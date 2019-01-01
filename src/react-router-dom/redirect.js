import React, {Component} from 'react';
import { Consumer} from './context'

export default class Redirect extends Component {
  constructor () {
    super (...arguments);
  }

  render () {
    return (
      <Consumer>
        {state => {
          let { history }= state;
          history.push(this.props.to)
          return null
        }}
      </Consumer>
    );
  }
}
