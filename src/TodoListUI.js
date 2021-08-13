import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Button, Input, List } from 'antd';

class TodoListUi extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
      return (
        <div style={{ margin: '10px' }}>
          <div>
            <Input
                  placeholder={this.props.inputValue}
                  value={this.props.inputValue}
                  style={{ width: '300px' }}
                  onChange={this.props.changeInputValue}
            />
            <Button type='primary' onClick={this.props.addToList}>添加</Button>
          </div>
          <div style={{ marginTop: '50px', width: '300px' }}>
            <List
              size="small"
              bordered
              dataSource={this.props.list}
              renderItem={(item,index) => (<List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
            />
          </div>
        </div>
      );
    }
}

export default TodoListUi;