import { AUTHENTICATED, LOGGED_OUT } from "../actions/actionTypes";

const initialState = {


    isAuthenticated: false
}


const authenticatedUserReducer = (state = initialState, action) => {

    switch (action.type) {

        case AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: true
            }
        case LOGGED_OUT:
            return {

                ...state,
                isAuthenticated: false
            }

        default:
            return state;
    }



}


export default authenticatedUserReducer;
