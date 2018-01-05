import Router from 'koa-router'
// import authorize from './middleware/authorize'
// import * as account from './routes/account'
import * as todos from './controller/todos'

const router = new Router()

router.get('/api/todos', todos.getTodos)
router.post('/api/todos/add', todos.addTodos)
router.post('/api/todos/remove', todos.removeTodos)
// router.get('/api/account/logout', account.logout)
// router.post('/api/account/login', account.login)
// router.post('/api/account/register', account.register)

export default router
