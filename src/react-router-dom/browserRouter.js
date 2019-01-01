import React, {Component} from 'react';
import {Provider} from './context';

class browserRouter extends Component {
  constructor () {
    super (...arguments);
    this.state = {
      location: {
        pathname: window.location.pathname ,
        hash: window.location.hash,
      },
      history:{
        push :(to)=>{
          this.pushState(null,null,to)  
          // window.location.pathname = to;
        }
      },
      queue:[]      
    };
    this.pushState = this.pushState.bind(this)
  }


  pushState = (state="",title="",path="")=>{
       let queue  = this.state.queue
       let {location}  = this.state 
       let historyInfo ={state,title,path}
       queue.push( historyInfo)

       this.setState({
        ...this.state,
        location:{
          ...location,
          pathname:path,
        },
        queue,
      })
      window.history.pushState(historyInfo,title,path)
  }

  componentDidMount () {
    let {location}  = this.state 

    window.addEventListener('popstate',(e)=>{
      this.setState({
        ...this.state,
        location:{
          ...location,
          pathname:e.state.path,
        },
        queue:this.state.queue,
      })

    })

  }

  render () {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

export default browserRouter;
