const database = require('../../database');

const routeWrapper = require('../../helpers/routeWrapper');

const requiredFields = [
    'deviceHeight',
    'deviceWidth',
    'screenHeight',
    'screenWidth'
];

const createSession = async (req, res) => {

    let session = await database.Sessions.create(
        req.headers['x-forwarded-for'] ? req.headers['x-forwarded-for'] : req.connection.remoteAddress,
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