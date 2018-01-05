const path = require('path');

const server = require('./server');

const staticDir = {
    dev: path.join(__dirname, '..', 'mockClient'),
    test: path.join(__dirname, '..', 'client'),
    production: path.join(__dirname, '..', 'client')
};

const appPort = {
    dev: 10100,
    test: 10100,
    production: 10100
};

const app = server(appPort[process.env.NODE_ENV], staticDir[process.env.NODE_ENV]);