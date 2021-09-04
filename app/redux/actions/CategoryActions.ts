
import { axiosGet } from "../../utils/axiosUtil";
import * as actionTypes from "./ActionTypes";

export function changeCategory(category) {
    return { type: actionTypes.CHANGE_CATEGORY, payload: category }
}

export function getCategoriesSuccess(categories) {
    return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories }
}
class ShoppingItem {
    businessPartnerMobilePhone: string
 
}

export function getCategories() {

    return function (dispatch) {
        let path = "PROD/CustomerInfoService/shoppingitem";
        let shoppingItem: ShoppingItem = { businessPartnerMobilePhone: "5530958778" };
        return axiosGet(path,shoppingItem).then(response => {
                console.log(response.status);
                dispatch(getCategoriesSuccess(response.data));

            }).catch(e => { console.log(e); })


    }
}