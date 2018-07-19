const router = require('koa-router')()
const controller = require('../lib/controller/user')

const routers = router
  .get('/user/uid', controller.getLoginUserInfo)
  .post('/user/signIn', controller.signIn)
  .post('/user/signUp', controller.signUp)

module.exports = routers