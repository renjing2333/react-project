import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Index from './pages/Index';
import Video from './pages/Video'
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
            <li><Link to='/'>博客首页</Link></li>
            <li><Link to='/video/'>视频分类</Link></li>
            <li><Link to='/'>第二分类</Link></li>
          </ul>
        </div>

        <div className='rightNav'>
          <Route path='/' exact component={Index} />
          <Route path="/video/"   component={Video} />
        </div>
      </div>
    </Router>
  )
}

export default AppRouter;