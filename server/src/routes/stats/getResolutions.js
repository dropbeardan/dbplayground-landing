const database = require('../../database');

const routeWrapper = require('../../helpers/routeWrapper');

const requiredFields = [];

const getResolutions = async (req, res) => {

    let [deviceRes, screenRes] = await Promise.all([
        database.Sessions.getDeviceResolutions(),
        database.Sessions.getScreenResolutions()
    ]);

    return res
        .status(200)
        .json({
            device: deviceRes,
            screen: screenRes
        });
};

module.exports = routeWrapper(requiredFields, getResolutions);