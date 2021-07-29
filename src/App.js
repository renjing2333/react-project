// import React from 'react'
// const Component = React.Component
import React, {Component} from 'react'
import './style.css'
import InputItem from './InputItem'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      list:['牌牌','肉肉']
    }
  }
    render(){
        return (
          <div className="box">
            <div>
              <label className="labelItem" for='happy'>激活文本输入框</label>
              <input id='happy' value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
              <button onClick={this.addList.bind(this)}>添加小猫咪</button>
            </div>
            <ul>
                {
                  this.state.list.map((item,index) => {
                    // return <li key={index + item} onClick={this.deleteItem.bind(this,index)} dangerouslySetInnerHTML={{__html:item}}></li>
                    return (
                      <div>
                        <InputItem
                          key={index + item}
                          content={item}
                          index={index} />
                      </div>
                    )
                  })
                }
            </ul> 
          </div>
        )
    }

    inputChange(e) {
      this.setState({
        inputValue: e.target.value
      })
    }

    addList() {
      this.setState({
        list:[...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    }

    deleteItem(index) {
      console.log(index);
      let list = this.state.list
      list.splice(index , 1)
      this.setState({
        list:list
      })
    }
}
export default App;
