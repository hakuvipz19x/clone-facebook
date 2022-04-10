
import { combineReducers } from 'redux';

import connectionReducer from './connection';

const rootReducer = combineReducers({
    connection: connectionReducer
});

export default rootReducer