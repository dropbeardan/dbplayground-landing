const moment = require('moment');

const models = require('../models');
const sequelize = models.sequelize;

const create = async (sessionId, path) => {
    let journey = await models.Journey.create({
        SessionId: sessionId,
        active: true,
        path: path,
        start: moment(),
        end: moment()
    });

    return journey;
};

const finish = async (journeyId) => {
    let [affectedRows, journeys] = await models.Journey.update(
        {
            active: false,
            end: moment()
        },
        {
            returning: true,
            where: {
                id: journeyId,
                active: true
            }
        }
    );

    if (affectedRows == 0) {
        return null;
    }

    return journeys[0];
};

module.exports = {
    create,
    finish
};