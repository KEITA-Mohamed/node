const path = require('path');

module.exports = {
    dbUrl: 'mongodb+srv://mohamed:1234@cluster0.x08si.mongodb.net/twitter?retryWrites=true&w=majority&appName=Cluster0',
    cert: path.join( __dirname, '../ssl/local.crt'),
    key: path.join( __dirname, '../ssl/local.key'),
}