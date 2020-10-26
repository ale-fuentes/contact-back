const express = require('express')

module.exports = function(server){
    //API route
    const router = express.Router()
    server.use('/api', router)

    //Services route
    const contactService = require('../api/contact/contactService')
    contactService.register(router, '/contacts')
}