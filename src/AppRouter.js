import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import Second from './components/Second'
import './index.css';

function AppRouter() {
  return(
    <Router>
      {/* <ul>
        <li><Link to='/'>点击跳转首页</Link></li>
        <li><Link to='/list/12345'>点击跳转列表页</Link></li>
      </ul>
      <Route path='/' exact component={Index} />
      <Route path='/list/:id' component={List} />
      <Route path='/home/' component={Home} /> */}
      <div className='mainDiv'>
        <div className='leftNav'>
          <h3>一级导航</h3>
          <ul>
            <li><Link to='/blog'>博客</Link></li>
            <li><Link to='/video/'>hh</Link></li>
            <li><Link to='/second'>第二</Link></li>
          </ul>
        </div>

        <div className='rightNav'>
          <Route path='/blog' exact component={Home} />
          <Route path="/video/" component={Video} />
          <Route path="/second/" component={Second} />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter;