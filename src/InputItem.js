import React, { Component } from 'react';

class InputItem extends Component {
    state = {  }
    render() { 
        return ( 
            <div onClick={this.clickItem.bind(this)}>
                {this.props.content}
            </div>
        );
    }
    clickItem() {
        console.log('哈哈哈');
    }
}

export default InputItem;