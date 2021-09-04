import { combineReducers } from "redux";
import CategoryListReducer from "./CategoryListReducer";
import changeCategoryReducer from "./ChangeCategoryReducer";

const rootReducer = combineReducers({
    changeCategoryReducer,
    CategoryListReducer
})

export default rootReducer;