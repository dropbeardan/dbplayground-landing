const moment = require('moment');
const validateUUID = require('uuid-validate');

const database = require('../../database');

const routeWrapper = require('../../helpers/routeWrapper');

const requiredFields = [];

const finishJourney = async (req, res) => {

    if (!validateUUID(req.params.journeyId)) {
        return res
            .status(400)
            .json({
                message: 'Invalid ID Format.'
            });
    }

    let journey = await database.Journeys.finish(req.params.journeyId);

    if (!journey) {
        return res
            .status(400)
            .json({
                message: 'Invalid ID Provided.'
            });
    }

    return res
        .status(200)
        .send({
            id: journey.id
        });
};

module.exports = routeWrapper(requiredFields, finishJourney);