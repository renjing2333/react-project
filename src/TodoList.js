import React, { Component } from 'react';
import TodoListUi from './TodoListUI';
import store from './store'
import { changeInputAction, addToListAction, deleteItemAction, getTodoList } from './actionCreators'

// const data = [
//   '喂猫粮', '喂罐头', '铲猫屎'
// ]
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    this.changeInputValue= this.changeInputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.addToList = this.addToList.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }

  storeChange() {
    this.setState(store.getState())
  }

  componentDidMount() {
    const action = getTodoList()
    store.dispatch(action)
  }

  render() {
    return (
      <TodoListUi
      inputValue={this.state.inputValue}
      list={this.state.list}
      changeInputValue={this.changeInputValue}
      addToList={this.addToList}
      deleteItem={this.deleteItem}
      />
    );
  }
  changeInputValue(e) {
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }

  addToList() {
    const action = addToListAction()
    store.dispatch(action)
  }

  deleteItem(index) {
    console.log(index, 'indexxx');
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList;