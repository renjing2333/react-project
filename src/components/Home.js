import React, { Component } from 'react';
// import { render } from 'react-dom';
// 类组件: 组件名首字母必须大写
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }
  render(){
    return (<div><h1>类组件:home组件</h1></div>);
  }
};