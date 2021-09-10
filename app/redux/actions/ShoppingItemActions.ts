import { axiosPost } from "../../utils/axiosUtil";
import * as actionTypes from "./ActionTypes";
import {CUSTOMER_INFO_SERVICE_PATH} from '@env'
import { ShoppingItemDetailModel } from "../../models/ShoppingItemDetailModel";
import { ShoppingItemModel } from "../../models/ShoppingItemModel";

export function getShoppingItemsSuccess(shoppingItems) {
    return { type: actionTypes.GET_SHOPPING_ITEMS_SUCCESS, payload: shoppingItems }
}


export function getShoppingItems(phoneNumber) {

    return function (dispatch) {
        let path = CUSTOMER_INFO_SERVICE_PATH +"shoppingitem";
        let shoppingItem: ShoppingItemModel = { BusinessPartnerMobilePhone: phoneNumber };
        axiosPost(path, shoppingItem).then(response => {
            console.log(response.data)
            dispatch(getShoppingItemsSuccess(response.data));

        }).catch(error => { console.log(error); })


    }
}
export function getShoppingItemDetailSuccess(shoppingItemDetail) {
    return { type: actionTypes.GET_SHOPPING_ITEM_DETAIL_SUCCESS, payload: shoppingItemDetail }
}

export function getShoppingItemDetail(invoiceNo) {

    return function (dispatch) {
        let path = CUSTOMER_INFO_SERVICE_PATH +"shoppingitemdetail";
        let shoppingItemDetailModel: ShoppingItemDetailModel = { InvoiceNo: invoiceNo };
        axiosPost(path, shoppingItemDetailModel).then(response => {
            console.log(response.data)
            
            dispatch(getShoppingItemDetailSuccess(response.data));

        }).catch(error => { console.log(error); })


    }
}
