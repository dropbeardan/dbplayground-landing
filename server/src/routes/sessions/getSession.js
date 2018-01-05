const database = require('../../database');

const routeWrapper = require('../../helpers/routeWrapper');

const requiredFields = [];

const getSession = async (req, res) => {

    let session = await database.Sessions.get(req.params.sessionId);

    return res
        .status(200)
        .send({
            id: session.id,
            journeys: session.Journeys
        });
};

module.exports = routeWrapper(requiredFields, getSession);