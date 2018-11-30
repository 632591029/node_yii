const Koa = require('koa');
const app = new Koa();
const messages = require('./controller/message');
const convert = require('koa-convert');
const server = require('koa-static');
const render = require('koa-swig');
const router = require('koa-simple-router');

const co = require('co');
const path = require('path');
app.context.render = co.wrap(render({
    root: path.join(__dirname, './views'),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false
}));



app.use(router(_ => {
    _.get('/index', messages.home)

}));

app.use(router(_ => {
    _.get('/create', messages.create)

}));
app.use(router(_ => {
    _.get('/new', messages.createNew)

}));

app.use(convert(server(path.join(__dirname, './public'))));
app.listen(3000, () => {
    console.log('服务已经启动')
});