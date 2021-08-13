// import React from 'react'
// const Component = React.Component
import React, {Component} from 'react'
import './style.css'
import InputItem from './InputItem'
import Test from './Test'
import axios from 'axios'
import TodoList from './TodoList'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      list:['牌牌','泡芙']
    }
  }
  // componentWillMount() {
  //   console.log('挂载初始阶段');
  // }

  componentDidMount() {
    // console.log('挂载结束阶段');
    axios.get('http://localhost:8888/list').then(
      (res) => {
        // console.log('获取数据成功:' + JSON.stringify(res.data));
        this.setState({
          list: res.data
        })
      }
    )
  }

  shouldComponentUpdate() {
    // console.log('1shouldComponentUpdate---组件发生改变前执行');
    return true
  }

  // componentWillUpdate() {
  //   console.log('2componentWillUpdate---组件更新前，shouldComponentUpdate函数之后执行')
  // }

  componentDidUpdate(){
    // console.log('4componentDidUpdate----组件更新之后执行')
}

    render(){
      console.log('3render---渲染阶段');
        return (
          <div className="box">
            <div>
              <label className="labelItem" htmlFor='happy'>激活文本输入框</label>
              <input id='happy' value={this.state.inputValue} onChange={this.inputChange.bind(this)}/>
              <button onClick={this.addList.bind(this)}>添加小猫咪</button>
            </div>
            <ul ref = {(ul) => {this.ul = ul}}>
                {
                  this.state.list.map((item,index) => {
                    // return <li key={index + item} onClick={this.deleteItem.bind(this,index)} dangerouslySetInnerHTML={{__html:item}}></li>
                    return (
                        <InputItem
                          key= {index + item}
                          master = '静静家的'
                          content= {item}
                          index= {index}
                          delete = {this.deleteItem.bind(this)} />
                    )
                  })
                }
            </ul> 
            <Test />
            <TodoList />
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
      },() => {
        // console.log(this.ul.querySelectorAll('div').length);
      })
    }

    deleteItem(index) {
      let list = this.state.list
      list.splice(index , 1)
      this.setState({
        list:list
      })
    }
}
export default App;
