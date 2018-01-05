const database = require('../../database');

const routeWrapper = require('../../helpers/routeWrapper');

const requiredFields = [];

const getVisitors = async (req, res) => {

    let visitors = await database.Sessions.getVisitors();

    return res
        .status(200)
        .json(visitors);
};

module.exports = routeWrapper(requiredFields, getVisitors);