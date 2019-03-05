import React, {Component} from 'react';
import UserAdd from './userAdd';
import UserList from './userList';
import {Route, Link} from '../react-router-dom';
import './app.css';
import {Button, Select} from 'antd';

const Option = Select.Option;

export default class Main extends Component {
  constructor (props) {
    super (props);

    this.state = {
      data: [
        {value: 1, label: 'name'},
        {value: 13, label: 'name'},
        {value: 14, label: 'name'},
        {value: 15, label: 'name'},
        {value: 16, label: 'name'},
      ],
    };
  }

  handleChange (e) {
  }
  render () {
    const options = this.state.data.map (d => (
      <Option key={d.value}>{d.label}</Option>
    ));

    return (
      <div className="App">
        home
        <br />

        <div style={{display: 'flex'}}>
          <ul style={{flex: '1'}}>
            <li><Link to="/home/userList">用户列表</Link></li>
            <li> <Link to="/home/userAdd">用户添加</Link> </li>
          </ul>
          <div style={{flex: '5'}}>
            <Route path="/home/userList" component={UserList} />
            <Route path="/home/userAdd" component={UserAdd} />
          </div>

        </div>

        {/* <Button>click me</Button>
        <Select
          mode="combobox"
          placeholder=""
          notFoundContent=""
          style={{width: '300px'}}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          onChange={this.handleChange}
        >
          {options}
        </Select> */}

      </div>
    );
  }
}
