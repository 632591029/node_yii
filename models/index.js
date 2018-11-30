const fetch = require('node-fetch');
const request = require('request');
const getData = () =>
    fetch('http://localhost/basic/web/').then(res => res.json(), function(error) {
        console.log(error)
    })



const modelsCreate = (params) =>

    fetch('http://localhost/basic/web/?r=book/create', { method: 'post', params }).then(res => res, function(error) {
        console.log(error)
    })
module.exports.getData = getData;
module.exports.modelsCreate = modelsCreate;