import React, {Component} from 'react';
import { Consumer} from './context'
const pathToRegexp = require('path-to-regexp');


class Route extends Component {
  constructor () {
    super (...arguments)
    this.state = {}
  }

  render () {

    let { path:componentPath, component: Component, exact=false } = this.props;

    return (
      <Consumer>
        {state => { 
          let reg= pathToRegexp(componentPath,[],{end:exact })
          let pathname = state.location.pathname

          if (reg.test(pathname)) {
            return <Component {...state} />;
          }
          return null;
        }}
      </Consumer>
    );
  }
}

export default Route;
