import React from 'react';
// import { render } from 'react-dom';
// 类组件: 组件名首字母必须大写
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: props.initialCount };
  }
  render(){
    return (
      <div>111</div>
    );
  }
};