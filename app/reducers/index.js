import { combineReducers } from 'redux';
import FireBaseUserReducer from './firebase_user_reducer';
import UserDataReducer from './user_data_reducer';

const rootReducer = combineReducers({
    currentUser: FireBaseUserReducer,
    userData: UserDataReducer
});

export default rootReducer;
