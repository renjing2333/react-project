import React, { Component } from 'react';
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    console.log(this.props.match.params.id)
    let tempId = this.props.match.params.id
    this.setState({ id: tempId })
  }

  render() {
    return (
      <div>
        <h1>List页面——{this.state.id}</h1>
      </div>
    );
  }
}

export default List;