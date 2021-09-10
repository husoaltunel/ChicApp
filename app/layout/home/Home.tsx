import { Center, Wrap } from 'native-base'
import React, { Component } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import Icon from '../../../node_modules/react-native-vector-icons/MaterialIcons'
import { default as IconFeather } from '../../../node_modules/react-native-vector-icons/Feather'
import { homeStyles } from './Styles'

export default function Home({navigation}) {

    return (
        <View>
            <Wrap direction="row" style={homeStyles.wrap}>
                <View style={homeStyles.center}>
                    <TouchableOpacity onPress={() => navigation.navigate("CheckCustomer")} >
                        <Center
                            size={"100%"}
                            _text={{ color: 'black', fontWeight: "bold", fontSize: 15 }}
                        >
                            <Icon name="person-search" size={90} />
                            <Text style={homeStyles.centerText}>Müşteri Sorgulama</Text>
                        </Center>
                    </TouchableOpacity>
                </View>

                <View style={homeStyles.center}>
                    <TouchableOpacity >
                        <Center
                            size={"100%"}
                            _text={{ color: 'black', fontWeight: "bold", fontSize: 15 }}
                        >
                            <Icon name="shopping-cart" size={90} />
                            <Text style={homeStyles.centerText}>Ürün Sorgulama</Text>
                        </Center>
                    </TouchableOpacity>
                </View>

                <View style={homeStyles.center}>
                    <TouchableOpacity >
                        <Center
                            size={"100%"}
                            _text={{ color: 'black', fontWeight: "bold", fontSize: 15 }}
                        >
                            <IconFeather name="arrow-up-right" size={90} />
                            <Text style={homeStyles.centerText}>KPI</Text>
                        </Center>
                    </TouchableOpacity>
                </View>

                <View style={homeStyles.center}>
                    <TouchableOpacity >
                        <Center
                            size={"100%"}
                            _text={{ color: 'black', fontWeight: "bold", fontSize: 15 }}
                        >
                            <Icon name="person-search" size={90} />
                            <Text style={homeStyles.centerText}>Dökümanlar</Text>
                        </Center>
                    </TouchableOpacity>
                </View>

            </Wrap>
        </View>
    )

}

