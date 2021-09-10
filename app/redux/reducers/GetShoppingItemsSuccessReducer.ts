import * as actionTypes from "../actions/ActionTypes";
import InitialState from "../states/checkCustomer/InitialState";

export default function getShoppingItemsSuccessReducer(state=InitialState.shoppingItems,action){

    switch (action.type){
        
        case actionTypes.GET_SHOPPING_ITEMS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
