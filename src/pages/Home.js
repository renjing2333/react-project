import React, { Component } from 'react';
import { Rate, Input } from 'antd';
import Tags from '../components/Tags';
import Clear from '../components/Clear';
// const { Provider, Consumer } = React.createContext()
// const OptionsContext = React.createContext({})
import optionsContext from '../components/Context';
Clear.contextType = optionsContext;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  render() {
    return (
      <div style={{ margin: '50px', padding: '20px', background: 'pink' }}>
        <h2 >千杯不醉兵马俑</h2>
        <Rate disabled defaultValue={5} style={{ marginBottom: '20px' }} />
        <Input
          placeholder="请输入要添加的便签"
          value={this.state.inputValue}
          style={{ marginBottom: '20px' }}
          onChange={this.inputChange}
          onPressEnter={this.addEvent} />
        <Tags onRef={this.onRef} />
        <Clear />
      </div>
    );
  }
  onRef = (ref) => {
    this.child = ref
  };

  addEvent = () => {
    console.log(this.state.inputValue, 'Home组件里的addevent');
    this.child.addEvent(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  };

  inputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  };
}