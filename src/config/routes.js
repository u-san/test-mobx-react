import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import Register from '../pages/Register'
import HelloWorld from '../pages/HelloWorld'

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/page/helloworld',
    component: HelloWorld
  },{
    path: '/page/about',
    component: About
  },
  {
    path: '/page/login',
    component: Login
  },
  {
    path: '/page/logout',
    component: Logout
  },
  {
    path: '/page/register',
    component: Register
  },
]
