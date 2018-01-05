import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import blogReducer from './blogReducer';
import homeReducer from './homeReducer';
import profileReducer from './profileReducer';
import projectReducer from './projectReducer';
import sessionReducer from './sessionReducer';
import statReducer from './statReducer';

export default combineReducers({
    blog: blogReducer,
    home: homeReducer,
    profile: profileReducer,
    project: projectReducer,
    session: sessionReducer,
    stat: statReducer,
    routing: routerReducer
});

