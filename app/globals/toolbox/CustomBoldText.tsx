import React from 'react'
import { Text } from 'native-base' 
import { StyleSheet } from 'react-native';


export default function CustomBoldText({text,style}) {

    return (  
         <Text style={[styles.text,style]}>{text}</Text>   
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight:"bold"
    }
})