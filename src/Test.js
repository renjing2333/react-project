import React, { Component } from 'react';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          isShow: true
        }
    }
    render() { 
        return ( 
            <div>
              <div className={this.state.isShow ? 'show' : 'hide'}>牌牌小猪</div>
              <div><button onClick={this.toggle.bind(this)}>召唤牌牌</button></div>
            </div>
        );
    }

    toggle() {
      this.setState({
        isShow: this.state.isShow ? false : true 
      })
    }
}

export default Test;