import React, {Component} from 'react';
import { Consumer} from './context'
import classnames from 'classnames'

import './link.css';


export default class Link extends Component {
  constructor () {
    super (...arguments);
  }

  render () {
  

    return (
      <Consumer>
        {state => {
          let { to = '', children} = this.props;
          let { history }= state;
          const style = {
            display: 'inline-block',
            margin: '10px',
          };
          
          const className =   classnames({ 'activeLink':state.location.pathname === to })
          return (
            <a
             className={ className }
              style={style}
              onClick={e => {
                e.preventDefault();
                history.push(to);
              }}
            >
              {children}
            </a>
          );
        }}
      </Consumer>
    );
  }
}
