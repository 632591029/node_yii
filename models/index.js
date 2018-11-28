const fetch = require('node-fetch');
const request = require('request');
const getData = () =>
    fetch('http://localhost:8080/index.php?r=book/index').then(res => console.log(res), function(error) {
        console.log(error)
    })

// request('http://localhost:8080/index.php?r=book/index', function(error, response, body) {
//     console.log(response)
// })



module.exports.getData = getData;