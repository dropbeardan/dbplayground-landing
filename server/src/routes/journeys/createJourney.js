const validateUUID = require('uuid-validate');

const database = require('../../database');

const routeWrapper = require('../../helpers/routeWrapper');

const requiredFields = [
    'sessionId',
    'path'
];

const createJourney = async (req, res) => {

    if (!validateUUID(req.body.sessionId)) {
        return res
            .status(400)
            .json({
                message: 'Invalid ID Format.'
            });
    }

    let session = await database.Sessions.get(req.body.sessionId);

    if (!session) {
        return res
            .status(400)
            .json({
                message: 'Invalid ID Provided.'
            });
    }

    let journey = await database.Journeys.create(
        req.body.sessionId,
        req.body.path
    );

    return res
        .status(200)
        .send({
            id: journey.id
        });
};

module.exports = routeWrapper(requiredFields, createJourney);