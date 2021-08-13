import { CHANGE_INPUT, ADD_TOLIST, DELETE_ITEM } from './store/actionTypes'

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