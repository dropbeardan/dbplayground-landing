const database = require('../../database');

const routeWrapper = require('../../helpers/routeWrapper');

const requiredFields = [
    'latitude',
    'longitude',
    'deviceHeight',
    'deviceWidth',
    'screenHeight',
    'screenWidth'
];

const createSession = async (req, res) => {

    let session = await database.Sessions.create(
        req.ip.replace('::ffff:', ''),
        req.body.latitude,
        req.body.longitude,
        req.body.deviceHeight,
        req.body.deviceWidth,
        req.body.screenHeight,
        req.body.screenWidth
    );

    return res
        .status(200)
        .json({
            id: session.id
        });
};

module.exports = routeWrapper(requiredFields, createSession);