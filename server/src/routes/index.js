const routes = require('express').Router();

const frontEnd = require('./frontEnd');
const images = require('./images');
const journeys = require('./journeys');
const services = require('./services');
const sessions = require('./sessions');
const stats = require('./stats');

// Normal Routes.
routes.use('/api/:serviceName', services);
routes.use('/images', images);
routes.use('/journeys', journeys);
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