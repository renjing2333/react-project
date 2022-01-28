import { Button, Checkbox } from 'antd';
import React from 'react';
// import optionsContext from './Context';
export default class Clear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between'}}>
              <Checkbox>已完成/全部</Checkbox>
              <Button type="primary" size='small' style={{background: 'orange', borderColor:'orange'}}>清除已完成任务</Button>
              <h1>{this.context.name}</h1>
            </div>
        );
    }
};