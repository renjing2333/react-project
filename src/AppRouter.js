import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import List from './pages/List';

function AppRouter() {
  return(
    <Router>
      <ul>
        <li><Link to='/'>点击跳转首页</Link></li>
        <li><Link to='/list/12345'>点击跳转列表页</Link></li>
      </ul>
      <Route path='/' exact component={Index} />
      <Route path='/list/:id' component={List} />
    </Router>
  )
}

export default AppRouter;