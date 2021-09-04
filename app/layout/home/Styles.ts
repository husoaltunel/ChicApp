import { Center } from 'native-base';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { textAlign } from 'styled-system';

const window = Dimensions.get('window');

export const homeStyles = StyleSheet.create({
    wrap: {
        flex:1,
        marginHorizontal: window.width / 8,
        marginVertical: window.width / 4
    },
    center: {
        width:window.width/3,
        backgroundColor:"#7dd3fc",
        borderRadius:20,
        shadowColor: '#171717',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation:20,
        height: window.height / 4,
        margin: "2%"
    },
    centerText : {
        color:"black",
        fontSize : 13,
        fontWeight : "bold",
        marginHorizontal:2,
        textAlign:'center'
    }

});
