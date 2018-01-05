const stats = require('express').Router();

const getLocations = require('./getLocations');
const getResolutions = require('./getResolutions');
const getVisitors = require('./getVisitors');

stats.route('/locations')
    .get(getLocations)
    .all((req, res, next) => {
        return next();
    });

stats.route('/resolutions')
    .get(getResolutions)
    .all((req, res, next) => {
        return next();
    });

stats.route('/visitors')
    .get(getVisitors)
    .all((req, res, next) => {
        return next();
    });

module.exports = stats;