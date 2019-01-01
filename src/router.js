import React from 'react';
import {
   HashRouter as Router,
  //  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from './react-router-dom';


import Home from './pages/home';
import Detail from './pages/detail';  

const BasicRoute = () => {

  return (
    <div>
      <Router>
        <div>
        <div>
          <Link to="/home">首页</Link>
          <Link to="/detail">详情</Link>
        </div>
          <Switch>
            <Route  path="/home" component={Home} />
            <Route  path="/detail" component={Detail} />
            <Redirect to="/home" />
          </Switch>
        </div>

      </Router>
    </div>
  );
};

export default BasicRoute;
