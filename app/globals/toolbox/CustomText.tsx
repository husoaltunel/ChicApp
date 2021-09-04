import React from 'react'
import { Text } from 'native-base' 
import { mainStyles } from '../assets/styles/Main-style'


export default function CustomText({text,style}) {
    style = style ? style : mainStyles.textStyle;
    return (  
         <Text style={style}>{text}</Text>   
    )
}
