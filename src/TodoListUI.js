import React from 'react';
import 'antd/dist/antd.css'
import { Button, Input, List } from 'antd';

const TodoListUi = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    // render() {
      return (
        <div style={{ margin: '10px' }}>
          <div>
            <Input
                  placeholder={props.inputValue}
                  value={props.inputValue}
                  style={{ width: '300px' }}
                  onChange={props.changeInputValue}
            />
            <Button type='primary' onClick={props.addToList}>添加</Button>
          </div>
          <div style={{ marginTop: '50px', width: '300px' }}>
            <List
              size="small"
              bordered
              dataSource={props.list}
              renderItem={(item,index) => (<List.Item onClick={()=>{props.deleteItem(index)}}>{item}</List.Item>)}
            />
          </div>
        </div>
      );
    // }
}

export default TodoListUi;