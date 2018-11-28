module.exports =
    router(_ => {
        _.get('/', (ctx, next) => {
            ctx.body = 'hello'
        })
        _
    })