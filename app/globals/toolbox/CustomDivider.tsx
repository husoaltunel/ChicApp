import { Divider } from 'native-base'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function CustomDivider() {
    return (
            <Divider size={1} bg="#7e22ce" style={styles.divider} />
    )
}

const styles = StyleSheet.create({
    divider: {
        
    }
})