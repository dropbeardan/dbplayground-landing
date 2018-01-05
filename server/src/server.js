const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routes = require('./routes');

const serverFactory = (port, staticDir) => {

    let server = express();

    // Cache and load statics directory.
    server.set('staticDir', staticDir);

    server.use(bodyParser.json());
    server.use((err, req, res, next) => {
        if (err instanceof SyntaxError) {
            console.log(req.body);
            return res
                .status(400)
                .json({
                    message: 'Invalid JSON supplied.'
                });
        }

        return next();
    });

    // Additional RESPONSE headers to allow for CORS.
    server.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    });

    server.all('*', routes);

    server.listen(port, () => {
        console.log(`[${process.env.NODE_ENV}] Server started @ Port ${port}`);
    });

    return server;
};

module.exports = serverFactory;