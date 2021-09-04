import 'react-native-gesture-handler';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../auth/login/Login';
import BottomTabNavigation from '../tabNavigation/BottomTabNavigation';
import CheckCustomer from '../../components/checkCustomer/CheckCustomer';


const Stack = createNativeStackNavigator();

export default function StackNavigation() {


    return (
        <Stack.Navigator initialRouteName='CheckCustomer'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f59e0b',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen name="Login" component={Login}
                options={{
                    title: 'Giriş'
                }}
            />
            <Stack.Screen name="BottomTabNavigation" component={BottomTabNavigation}
            options={{
                title: ''
            }}
            />
            <Stack.Screen name="CheckCustomer" component={CheckCustomer}
            options={{
                title: 'Müşteri Sorgulama'
            }}
            />
        </Stack.Navigator>
    )
}
