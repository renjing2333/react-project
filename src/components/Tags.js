import React from 'react';
import { Checkbox } from 'antd';
export default class Tags extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tagsList: ['吃饭', '睡觉', '打豆豆', '喂牌牌', '和牌牌玩']
    }
  }
  render() {
    return (
      <div>
        <div>
          {
            this.state.tagsList.map((item, index) => {
              return <Checkbox
                key={index}
                onChange={this.onChange}
                style={{ display: 'flex', height: '30px', background: 'white', border: '0.5px solid #C0C0C0', margin: '0px', padding: '5px' }}>
                {item}
              </Checkbox>
            })
          }
        </div>
        <div>{this.props.listData}</div>
      </div>
    );
  }
  componentDidMount(){
    this.props.onRef(this)
  }
  onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  }
  addEvent = (newTag) => {
    console.log(newTag, 'Tags组件里面tags');
    this.state.tagsList.push(newTag);
  }
};