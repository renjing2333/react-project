import React from "react";
import { Route, Link } from "react-router-dom";
import Reactpage from "./video/ReactPage";
import Vue from './video/Vue'
import Flutter from './video/Flutter'

function Video() {
  return (
    <div>
      <div className='topNav'>
        <ul>
          <li><Link to='/video/ReactPage'>React教程</Link></li>
          <li><Link to='/video/Vue'>Vue教程</Link></li>
          <li><Link to='/video/Flutter'>Flutter教程</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>视频教程</h3></div>
        <Route path='/video/ReactPage' component={Reactpage} />
        <Route path='/video/Vue' component={Vue} />
        <Route path='/video/Flutter' component={Flutter} />
      </div>
    </div>
  )
}
export default Video;