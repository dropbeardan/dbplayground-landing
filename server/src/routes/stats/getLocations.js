const database = require('../../database');

const routeWrapper = require('../../helpers/routeWrapper');

const requiredFields = [];

const getLocations = async (req, res) => {

    let results = await database.Sessions.getLocations();

    let locations = results.map((result) => {
        return {
            lat: JSON.parse(result.dataValues.location).lat,
            lng: JSON.parse(result.dataValues.location).lng,
            ips: result.dataValues.ips.join(', ')
        };
    });

    return res
        .status(200)
        .json(locations);
};

module.exports = routeWrapper(requiredFields, getLocations);