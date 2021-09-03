import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 111, title: '猪猪牌牌111' },
        { id: 222, title: '猪猪牌牌222' },
        { id: 333, title: '猪猪牌牌333' },
      ]
    }
  }
  componentDidMount() {
    console.log(this.state, 'state');
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.list.map((item, index)=> {
              return (
                <li key={index}>
                  <Link to={'/list/'+ item.id}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default Index;