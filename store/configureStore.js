import {createStore, combineReducers} from "redux";
import authenticatedUserReducer from './reducers/AuthenticatedUser'


const rootReducer = combineReducers({

    authenticatedUser: authenticatedUserReducer

})


const configureStore = () => {


    return createStore(rootReducer);
}


export default configureStore;
