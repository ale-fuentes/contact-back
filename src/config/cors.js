//middle for requisition, a chanel
//about it? https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS
module.exports = function (req, response, next) {

    //allow any source
    response.header('Access-Control-Allow-Origin', '*')
    //methods that add access
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH')
    //header to reques
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')


    next()
}