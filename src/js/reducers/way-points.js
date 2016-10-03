var ActionTypes = require('../actions/types');
var Actions = require('../actions');
var wayPoint = require('./way-point');

var DEFAULTS = [
    wayPoint(undefined, Actions.addWayPoint(0))
];

const wayPoints = (state = DEFAULTS, action) => {

    switch (action.type) {
        case ActionTypes.ADD_WAY_POINT:
            return [
                ...state,
                wayPoint(undefined, action)
            ];
            break;
        default:
            return state;
    }

};

module.exports = wayPoints;