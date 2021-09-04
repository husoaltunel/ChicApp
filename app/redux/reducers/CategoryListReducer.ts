import * as actionTypes from "../actions/ActionTypes";
import InitialState from "../states/checkCustomer/InitialState";

export default function getCategoriesSuccessReducer(state=InitialState.categories,action){

    switch (action.type){
        
        case actionTypes.GET_CATEGORIES_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}