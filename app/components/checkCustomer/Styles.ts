import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");

export const checkCustomerStyles = StyleSheet.create({

    view: {
        flex:1
    },
    inputView : {               
        width:window.width/1.2
    },
    searchButton : {
        backgroundColor:"#7dd3fc",
        width:window.width/5,
        height:window.height/13,
        borderRadius:20,
        shadowColor: '#171717',
        marginTop:50
    },
    icon : {
        marginHorizontal:5
    },
    text : {
        fontWeight:"bold"
    },
    cardsVStack : {
        margin:15
    },
    
    smallCard : {
        width : "49%"
    },
    boxAverage : {
        width : "49%",
        marginVertical:5
    },
    boxAverageHeaderText : {
        color:"#4338ca",
        textAlign:"center"
    },
    boxAverageBodyText : {
        textAlign:"center"
    }
   

});