const routes = require('express').Router();

const proxyRequest = require('./middlewares/proxyRequest');

const frontEnd = require('./frontEnd');
const journeys = require('./journeys');
const resources = require('./resources');
const sessions = require('./sessions');
const stats = require('./stats');

// Check for Proxy Service.
routes.use(proxyRequest);

// Normal Routes.
routes.use('/journeys', journeys);
routes.use('/resources', resources);
routes.use('/sessions', sessions);
routes.use('/stats', stats);

// Non-API Route, to be handled by Statics.
routes.use('/', frontEnd);

// Error Route.
routes.route('*')
    .all((req, res, next) => {
        return res
            .status(404)
            .json({
                message: 'Not Found'
            });
    });

module.exports = routes;