 //使用增强函数,使用增加函数前需要先引入compose
import { createStore, applyMiddleware, compose } from 'redux'  //  引入createStore方法
import thunk from 'redux-thunk'
import reducer from './reducer'

// const store = createStore(reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())  // 创建数据存储仓库

// 然后利用compose创造一个增强函数,就相当于建立了一个链式函数
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

// 有了增强函数后,就可以把thunk加入进来了,这样两个函数就都会执行了
const enhancer = composeEnhancers(applyMiddleware(thunk))
const store = createStore( reducer, enhancer) // 创建数据存储仓库
export default store