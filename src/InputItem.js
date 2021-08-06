import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import axios from 'axios'

class InputItem extends Component {
  constructor(props) {
    super(props)
    this.clickItem = this.clickItem.bind(this)
  }

  // componentWillReceiveProps() {
  //     console.log('componentWillReceiveProps');
  // }

  componentDidMount() {
    // console.log('挂载结束阶段');
    // axios.get('http://localhost:8888/list').then(
    //   (res) => {
    //     console.log('获取数据成功:' + JSON.stringify(res.data));
    //   }
    // )
  }


  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true
    } else {
      return false
    }
  }
  render() {
    return (
      <div onClick={this.clickItem}>
        {this.props.master}__{this.props.content}
      </div>
    );
  }
  clickItem() {
    this.props.delete(this.props.index)
  }
}

InputItem.propTypes = {
  content: PropTypes.string,
  delete: PropTypes.func,
  index: PropTypes.number,
  master: PropTypes.string.isRequired
}

// InputItem.defaultProps = {
//     master: '嘿嘿'
// }

export default InputItem;