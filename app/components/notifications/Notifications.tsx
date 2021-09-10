import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Notifications() {
    return (
        <View style={styles.style}>
            <Text>Bildirimler</Text>
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