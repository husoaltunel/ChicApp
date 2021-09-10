import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function ScanBarcode() {
    return (
        <View style={styles.style}>
            <Text>Barkod Tara</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    style:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});