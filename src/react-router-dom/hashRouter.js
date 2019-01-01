import React, {Component} from 'react';
import {Provider} from './context';

class HashRouter extends Component {
  constructor () {
    super (...arguments);
    this.state = {
      location: {
        pathname: window.location.hash.slice(1),
        hash: window.location.hash,
      },
      history:{
        push(to){
            window.location.hash = to
        }
      }
    };
  }

  componentDidMount () {
    let location  = this.state
    window.addEventListener ('hashchange',  (e)=> {
      this.setState ({
        location: {
          ...location,
          hash:window.location.hash,
          pathname: window.location.hash.slice (1) || '',
        },
      });
    });
  }

  render () {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

export default HashRouter;
