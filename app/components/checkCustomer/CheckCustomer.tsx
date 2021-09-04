import { Button, Center, Icon, Input } from 'native-base'
import React, { useEffect } from 'react';
import { View, Text ,TouchableOpacity} from 'react-native'
import { connect } from 'react-redux';
import { width } from 'styled-system';
import FontAwesomeIcon from '../../../node_modules/react-native-vector-icons/FontAwesome5';
import CustomText from '../../globals/toolbox/CustomText';
import { checkCustomerStyles } from './Styles';
import { bindActionCreators } from 'redux';
import * as CategoryActions from '../../redux/actions/CategoryActions';

function CheckCustomer(props) {

    useEffect(() => {
      
        props.actions.getCategories();
        
    }, [])
    
    return (
        <Center style={checkCustomerStyles.view}>
            <View style={checkCustomerStyles.inputView}>
                <Input onChangeText={() => {console.log(props.categories)}}
                    InputLeftElement={
                        <Icon
                            as={<FontAwesomeIcon name="phone-alt" size={25} />}
                            size="md"
                            m={2}
                            _light={{
                                color: "black",
                            }}
                            _dark={{
                                color: "gray.300",
                            }}
                        />
                    }

                    placeholder="Telefon Numarası" // mx={4}
                    _light={{
                        placeholderTextColor: "blueGray.400",
                    }}
                    _dark={{
                        placeholderTextColor: "blueGray.50",
                    }}
                />
            </View>
            <TouchableOpacity >
                <Center flexDirection="row" style={checkCustomerStyles.searchButton}
                    size={"100%"}
                    _text={{ color: 'black', fontWeight: "bold", fontSize: 15 }}
                >
                    <FontAwesomeIcon style={checkCustomerStyles.icon} name="search" size={25} />
                    <CustomText style={checkCustomerStyles.text} text="Ara" />
                </Center>
            </TouchableOpacity>

        </Center>


    )
}

function mapStateToProps(state){
    return {
        currentCategory:state.changeCategoryReducer,
        categories : state.CategoryListReducer
    }
}
function mapDispatchToProps(dispatch){
    return {
        actions:{
            getCategories : bindActionCreators(CategoryActions.getCategories,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CheckCustomer);