import { CHANGE_INPUT, ADD_TOLIST, DELETE_ITEM, GET_LIST } from './store/actionTypes'
import axios from 'axios'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value: value
})

export const addToListAction = () => ({
  type: ADD_TOLIST
})

export const deleteItemAction = (value) => ({
  type: DELETE_ITEM,
  value: value,
})

export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('http://localhost:8888/data').then((res) => {
      const data = res.data
      const action = getListAction(data)
      dispatch(action)
      console.log(data, 'dddddddata');
    })
  }
}