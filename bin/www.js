const fs = require('fs');
const https = require('https');
const http = require('http');
const app = require('../app');
const path = require('path');
const env = require(`../environment/${ process.env.NODE_ENV }`);


//const httpServer = http.createServer((req, res) => {
    //res.writeHead(301, { Location: `https://${ req.headers.host }${ req.url }`});
   // res.end();
//}).listen(8080);

// const server = https.createServer({
//     key: fs.readFileSync(path.join(__dirname, '../ssl/local.key')),
//     cert: fs.readFileSync(path.join(__dirname, '../ssl/local.crt')),
// }, app)//.listen(443);
//
// server.listen(3000)

const httpServer = http.createServer((req, res) => {
    res.writeHead(301, { Location: `https://${ req.headers.host }${ req.url }`});
    res.end();
}).listen(8080);


const httpsServer = https.createServer({
    key: fs.readFileSync(env.key),
    cert: fs.readFileSync(env.cert),
}, app).listen(443)
