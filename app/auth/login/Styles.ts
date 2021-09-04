import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

let win = Dimensions.get('window');

export const loginStyles = StyleSheet.create({
    imageView: {
        shadowColor: '#171717',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        shadowRadius: 40,
        elevation:20,
        marginBottom:"30%", 
        width: win.width / 2,
        height: win.height / 3,
        backgroundColor:"black",  
        borderRadius:40
    },
    loginImage: {      
        width: win.width / 2,
        height: win.height / 3,   
        resizeMode: "stretch"      
    },
    loginView : {
        flex:1,
        justifyContent:"center",
        alignItems : "center"
    }
    

    

});