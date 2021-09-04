import { Box, HStack, Text } from 'native-base';
import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import AzureAuth from 'react-native-azure-auth';
import Client from "react-native-azure-auth/src/networking";
import Icon from 'react-native-vector-icons/Ionicons';
import { authStyles } from './Styles';


const CLIENT_ID = 'e06527d9-0e1d-436b-9045-e1466b87b78b' // replace the string with YOUR client ID

const azureAuth = new AzureAuth({
    clientId: CLIENT_ID
});


export default class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = { accessToken: null, user: '', mails: [], userId: '' };
    }
    

    _onLogin = async () => {
        try {
          let tokens = await azureAuth.webAuth.authorize({scope: 'openid profile User.Read' })
          console.log('CRED>>>', tokens)
          this.setState({ accessToken: tokens.accessToken });
          let info = await azureAuth.auth.msGraphRequest({token: tokens.accessToken, path: 'me'})
          console.log('info', info)
          this.setState({ user: info.displayName, userId: tokens.userId })
          this.props.navigation.navigate("BottomTabNavigation");
        } catch (error) {
          console.log('Error during Azure operation', error)
        }
      };
    
      _onGetMails = async () => {
        try {
          let tokens = await azureAuth.auth.acquireTokenSilent({scope: 'Mail.Read', userId: this.state.userId})
          console.log('Silent:', tokens)
          if (!tokens) {
            tokens = await azureAuth.webAuth.authorize({scope: 'Mail.Read'})
            console.log('NewWeb:', tokens)
          }
          console.log('TOK>>>', tokens.accessToken)
          let mails = await azureAuth.auth.msGraphRequest({token: tokens.accessToken, path: '/me/mailFolders/Inbox/messages'})
          let mailArr = []
          mails.value.forEach(element => {
            mailArr.push({subject: element.subject})
          });
          if (mailArr.length === 0) {
            mailArr.push({subject: 'No mails found'})
          }
          console.log('Mails: ' + mailArr.length)
          this.setState({mails: mailArr})
        } catch (error) {
          console.log(error)
        }
      }
    
      _onLogout = () => {
        azureAuth.webAuth
          .clearSession()
          .then(success => {
            this.setState({ accessToken: null, user: null });
          })
          .catch(error => console.log(error));
      };

    render() {
        let loggedIn = this.state.accessToken ? true : false;
        
        return (
            <TouchableOpacity onPress={loggedIn ? this._onLogout : this._onLogin}>
                <Box style={authStyles.loginButton}>
                    <HStack alignItems="center">
                        <Icon style={authStyles.loginIcon} name="enter-outline" size={25} />
                        <Text color="white" fontSize="md">GİRİŞ YAPIN</Text>
                    </HStack>
                </Box>
            </TouchableOpacity>

        );
    }
}
