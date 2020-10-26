//MY FILE WITH CONFIGURATION TO SERVER
const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const allowCors = require('./cors')
const server = express()

//create middles
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`Our Back-end is runing in ${port}`)
})


module.exports = server