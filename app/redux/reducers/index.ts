import { combineReducers } from "redux";
import getShoppingItemsSuccessReducer from "./GetShoppingItemsSuccessReducer";
import getShoppingItemDetailSuccessReducer from "./GetShoppingItemDetailSuccessReducer";


const rootReducer = combineReducers({
    getShoppingItemsSuccessReducer,
    getShoppingItemDetailSuccessReducer
})

export default rootReducer;