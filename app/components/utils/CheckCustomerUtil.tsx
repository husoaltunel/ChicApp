import Moment from 'moment'
import { ShoppingItemModel } from '../../models/ShoppingItemModel';


export function HasShoppingItems(firstItem) {
    if (firstItem.InvoiceNo != " " && firstItem.InvoiceNo != undefined)
        return true;
}
export function setDateTimeToTurkish(dateTime) {
    Moment.locale('tr') //For Turkey
    const formattedDT = Moment(dateTime).format('LL')
    return formattedDT;
}
export function GetAverageSales(shoppingItems) {
    var total = 0;
    shoppingItems.forEach((item : ShoppingItemModel) => {
        total += parseInt(item.TotalSales)
    });
    return total/shoppingItems.length;
}
