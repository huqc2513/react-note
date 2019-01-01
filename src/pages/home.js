import React, { Component } from 'react';

import UserAdd from './userAdd'
import UserList from './userList'
import { Route , Link } from '../react-router-dom';




export default  class Main extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  render() {
    return (
      <div className="App">
          home
         <br/>

         <div style={{display:'flex'}}>
         <ul style={{flex:'1'}}>
              <li><Link to='/home/userList'>用户列表</Link></li>
              <li> <Link to='/home/userAdd'>用户添加</Link> </li>
            </ul>
            <div style={{flex:'5'}}>
              <Route path='/home/userList' component={UserList}></Route>
              <Route path='/home/userAdd' component={UserAdd} ></Route>
            </div>
  
         </div>
         
      </div>
    );
  }
}

