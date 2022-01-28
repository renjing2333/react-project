import React from 'react';
import { Checkbox } from 'antd';
import optionsContext from './Context'
export default class Tags extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ' 静静',
      pet: '牌牌',
      options: [
        { label: '吃饭', value: '吃饭', done: false },
        { label: '睡觉', value: '睡觉', done: true },
        { label: '撸牌牌', value: '撸牌牌', done: false },
      ]
    }
  }
  render() {
    return (
      <div>
        <optionsContext.Provider value={this.state.name}>
          <Checkbox.Group
            key={this.state.options}
            options={this.state.options}
            defaultValue={['吃饭']}
            onChange={this.onChange} />
        </optionsContext.Provider>
      </div>
    );
  }
  componentDidMount() {
    this.props.onRef(this)
  }
  onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }
  addEvent = (newTag) => {
    console.log(newTag, 'Tags组件里面tags');
    this.state.options.push({ label: newTag, value: newTag, done: false });
  }
};