import * as actionTypes from "../actions/ActionTypes";
import InitialState from "../states/checkCustomer/InitialState";

export default function getShoppingItemDetailSuccessReducer(state=InitialState.shoppingItemDetails,action){

    switch (action.type){
        
        case actionTypes.GET_SHOPPING_ITEM_DETAIL_SUCCESS:
            return [...state,action.payload];
        default:
            return state;
    }
}
