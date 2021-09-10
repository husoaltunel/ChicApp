import { Icon, Input } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
export default function CustomInput({ inputLeftElement, placeholder,onChangeText }) {
    return (
        <View style={styles.view}>
            <Input style={styles.input} onChangeText={onChangeText}
                InputLeftElement={inputLeftElement}

                placeholder={placeholder} // mx={4}
                _light={{
                    placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                    placeholderTextColor: "blueGray.50",
                }}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    view : {
        borderWidth:0.2,
        borderRadius:5,
        borderColor:"gray"
    },
    input: {
        borderWidth: 0.5,
        borderColor: "black"
    }
});