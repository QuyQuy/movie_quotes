import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import movieReducers from './movie_reducers';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    form: formReducer,
    movie: movieReducers,
    user: userReducer
});

export default rootReducer;