import React, {Component} from 'react';

class App extends Component {
  render(){
    return (
      <div>
        <h1>{false ? '哈哈哈' : '嘻嘻嘻'}</h1>
      </div>
    )
  }
}

export default App;
