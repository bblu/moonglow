const Koa = require('koa');
const convert = require('koa-convert')
const koaLogger = require('koa-logger');
const koaRouter = require('koa-router');
const bodyParser = require('koa-bodyparser')

const config = require('./config');
const routers = require('./routes');
const mongoose = require('mongoose');

const app = new Koa();

// 配置控制台日志中间件
app.use(convert(koaLogger()));
// 使用ctx.body解析中间件
app.use(bodyParser());

mongoose.Promise = global.Promise;
mongoose.connect(config.database);

// 初始化路由中间件
app.use(routers.routes()).use(routers.allowedMethods())

app.listen(8088);
console.log('The server is on prot 8088')