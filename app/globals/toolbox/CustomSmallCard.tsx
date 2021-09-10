import { Box, VStack } from 'native-base'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CustomBoldText from './CustomBoldText'
import CustomDivider from './CustomDivider'

export default function CustomSmallCard({headerText,bodyText,footerText}) {
    return (
        <Box style={styles.cardBox} border={1} borderRadius='xl'>
            <VStack divider={<CustomDivider />} padding={1.5}>
                <Box px={4} pt={4} >
                   <CustomBoldText text={headerText} style={styles.headerText} />
                </Box>
                <Box px={4}>
                <Text style={styles.text} >{bodyText}</Text>
                </Box>
                <Box px={4} pb={4}>
                <Text style={styles.text} >{footerText}</Text>
                </Box>
            </VStack>
        </Box>
    )
}

const styles = StyleSheet.create({

    cardBox : {
        width : "49%",
        marginVertical:5
    },
    headerText : {
        color:"#4338ca",
        textAlign:"center"
    },
    text : {
        textAlign:"center"
    }

});