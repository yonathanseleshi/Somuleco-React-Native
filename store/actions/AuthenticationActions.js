import {AUTHENTICATED, LOGGED_OUT} from "./actionTypes";


export const userAuthenticated = () => {

    return {

        type: AUTHENTICATED

    }

};


export const userLoggedOut = () => {

    return {


        type: LOGGED_OUT
    }


};
