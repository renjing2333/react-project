import Home from '../components/Home'
import Cart from '../components/Cart'
import Menu from '../components/Menu'

export const appRoutes =[
  {
    path:'/cart',
    component: Cart
  },
  {
    path:'/menu',
    component: Menu
  },
  {
    path:'/home',
    component: Home,
    title:'home组件'
  }
]