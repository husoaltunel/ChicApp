import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../../layout/home/Home';
import Icon from '../../../node_modules/react-native-vector-icons/Ionicons';
import Login from '../../auth/login/Login';
import Notifications from '../../components/notifications/Notifications';
import ScanBarcode from '../../components/scanBarcode/ScanBarcode';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {


    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#f59e0b",
            tabBarInactiveTintColor: "black",
            tabBarLabelStyle: {
                fontSize: 16,
                fontWeight:"bold"
            },
            headerShown:false
        }}>
            <Tab.Screen name="Anasayfa" component={Home} options={{
                tabBarIcon: ({ color, size,focused }) => (
                    <Icon name={focused ? "home" : "home-outline"} size={25}  />
                )
            }} />
            <Tab.Screen name="Bildirimler" component={Notifications} options={{
                tabBarIcon: ({ color, size,focused }) => (
                    <Icon name={focused ? "notifications-sharp" : "notifications-outline"} size={25}  />
                )
            }} />
            <Tab.Screen name="Barkod Tara" component={ScanBarcode} options={{
                tabBarIcon: ({ color, size,focused}) => (
                    <Icon name={focused ? "camera-sharp" : "camera-outline"}  size={25}  />
                )
            }} />
        </Tab.Navigator>
    )
}
