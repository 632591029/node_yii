'use strict';
const models = require('../models');



module.exports.home = async(ctx, next) => {
    const data = await models.getData();
    ctx.body = await ctx.render('index', {
        msg: data.message
    });
}
module.exports.create = async(ctx, next) => {
    // const data = await models.create();
    ctx.body = await ctx.render('view', {

    });
}
module.exports.createNew = async(ctx, next) => {

        // const params = new URLSearchParams();
        // params.append('title', query.title);
        // params.append('describe', query.describe);
        const result = await models.modelsCreate(ctx.query);
        console.log(result)
        const data = await models.getData();
        ctx.body = await ctx.render('index', {
            msg: data.message
        });
    }
    // module.exports.list = function *list() {
    //   this.body = yield messages;
    // };

// module.exports.fetch = function *fetch(id) {
//   const message = messages[id];
//   if (!message) {
//     this.throw(404, 'message with id = ' + id + ' was not found');
//   }
//   this.body = yield message;
// };

// module.exports.create = function *create() {
//   const message = yield parse(this);
//   const id = messages.push(message) - 1;
//   message.id = id;
//   this.redirect('/');
// };

// const asyncOperation = () => callback =>
//   setTimeout(
//     () => callback(null, 'this was loaded asynchronously and it took 2 seconds to complete'),
//     2000);

// const returnsPromise = () =>
//   new Promise((resolve, reject) =>
//     setTimeout(() => resolve('promise resolved after 2 seconds'), 2000));

// module.exports.delay = function *delay() {
//   this.body = yield asyncOperation();
// };

// module.exports.promise = function *promise() {
//   this.body = yield returnsPromise();
// };