
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { loginStyles } from './Styles'
import { HStack, Text, Button, Pressable, Box } from 'native-base'
import Icon from '../../../node_modules/react-native-vector-icons/Ionicons';
import { backgroundColor } from 'styled-system';
import Auth from '../react-native-azure-auth/Auth';


const Login = ({ navigation }) => {


    return (
        <View style={loginStyles.loginView}>
            <View style={loginStyles.imageView}>
                <Image
                    style={loginStyles.loginImage}
                    source={require('../../globals/assets/images/login_logo.png')}
                />
            </View>       
            <Auth navigation={navigation} />

        </View>
    );
};


export default Login;


