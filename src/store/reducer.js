import { CHANGE_INPUT, ADD_TOLIST, DELETE_ITEM, GET_LIST } from './actionTypes'
const defaultState = {
    inputValue : 'write something',
    list:[
        '早上给牌牌加水',
        // '白天给牌牌喂粮',
        // '晚上给牌牌铲屎',
        // '半夜陪牌牌蹦迪'
    ]
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === ADD_TOLIST) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }
    if(action.type === DELETE_ITEM) {
        // console.log(action.value, 'action.value');
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState
    }
    if(action.type === GET_LIST) {
        let newState = JSON.parse(JSON.stringify(state))
        console.log(action.data, 'ddddata');
        newState.list = action.data.list
        return newState
    }
    return state
}