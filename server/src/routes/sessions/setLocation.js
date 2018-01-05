const database = require('../../database');

const routeWrapper = require('../../helpers/routeWrapper');

const requiredFields = [
    'latitude',
    'longitude'
];

const setLocation = async (req, res) => {

    const validateUUID = require('uuid-validate');

    if (!validateUUID(req.params.sessionId)) {
        return res
            .status(400)
            .json({
                message: 'Invalid ID Format.'
            });
    }

    let session = await database.Sessions.update(
        req.params.sessionId,
        {
            location: JSON.stringify({
                lat: req.body.latitude,
                lng: req.body.longitude
            }),
        }
    );

    return res
        .status(200)
        .json({
            id: session.id
        });
};

module.exports = routeWrapper(requiredFields, setLocation);