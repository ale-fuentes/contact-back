//MY FILE WITH CONFIGURATION TO SERVER
const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

//create middles
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())

server.listen(port, function(){
    console.log(`Our Back-end is runing in ${port}`)
})
