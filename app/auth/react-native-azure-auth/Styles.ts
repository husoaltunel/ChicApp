import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

let win = Dimensions.get('window');

export const authStyles = StyleSheet.create({
    loginButton : {  
        shadowColor: '#171717',
        shadowOffset: {width: 10, height: 10},
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation:10,
        marginBottom:"20%", 
        width:win.width/3,
        borderRadius:10,
        backgroundColor:"#f59e0b",
        flexDirection:"row"
        
    },
    loginIcon:{
        marginRight : 10,
        color:"white"
        
    }

    

});