import * as actionTypes from "../actions/ActionTypes";
import InitialState from "../states/checkCustomer/InitialState";

export default function changeCategoryReducer(state=InitialState.currentCategory,action){

    switch (action.type){
        
        case actionTypes.CHANGE_CATEGORY:
            return action.payload;
        default:
            return state;
    }
}