const restful = require('node-restful')
const mongoose = restful.mongoose

const contactSchema = new mongoose.Schema({
    name: { type: String, require: true },
    phone: { type: String, require: true },
    ative: { type: Boolean, require: true, default: false },
    createAt: { type: Date, default: Date.now }
})

module.exports = restful.model('Contact', contactSchema)