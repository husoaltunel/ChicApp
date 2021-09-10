import { Box, Button, Center, HStack, Icon, Input, VStack } from 'native-base'
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { width } from 'styled-system';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import CustomBoldText from '../../globals/toolbox/CustomBoldText';
import { checkCustomerStyles } from './Styles';
import { bindActionCreators } from 'redux';
import * as ShoppingItemActions from '../../redux/actions/ShoppingItemActions';
import { ScrollView } from 'react-native-gesture-handler';
import CustomDivider from '../../globals/toolbox/CustomDivider';
import CustomCard from '../../globals/toolbox/CustomCard';
import CustomSmallCard from '../../globals/toolbox/CustomSmallCard';
import CustomInput from '../../globals/toolbox/CustomInput';
import { HasShoppingItems, setDateTimeToTurkish, GetAverageSales } from '../utils/CheckCustomerUtil';
import { ShoppingItemModel } from '../../models/ShoppingItemModel';


function CheckCustomer(props) {

    useEffect(() => {



    }, [])

    let phoneNumber = "";
    function getFirstShoppingItem() {
        return props.shoppingItems[0];
    }

    function getFirstShoppingItemDateTime() {
        return getFirstShoppingItem().BusinessPartnerBirthDate;
    }

    function renderShoppingItems() {
        var firstItem = getFirstShoppingItem();
        if (HasShoppingItems(firstItem)) {
            var shoppingItems = props.shoppingItems;
            var dateTime = getFirstShoppingItemDateTime();
            const formattedDT = setDateTimeToTurkish(dateTime);
            var averageSales = GetAverageSales(shoppingItems);
            return (
                <VStack space={2} style={checkCustomerStyles.cardsVStack}>
                    <CustomCard headerText={firstItem.BusinessPartnerName} bodyText={formattedDT} footerText={firstItem.BusinessPartnerCategoryName} />
                    <HStack justifyContent="space-between" flexWrap="wrap" >
                        <Box style={checkCustomerStyles.boxAverage} border={1} borderRadius='xl'>
                            <VStack padding={1.5}>
                                <Box px={4}>
                                    <CustomBoldText style={checkCustomerStyles.boxAverageHeaderText} text="Ortalama Satış Miktarı" />
                                </Box>
                                <CustomDivider />
                                <Box px={4} pb={4}>
                                    <Text style={checkCustomerStyles.boxAverageBodyText}>{averageSales}</Text>
                                </Box>
                            </VStack>
                        </Box>
                        <Box style={checkCustomerStyles.boxAverage} border={1} borderRadius='xl'>
                            <VStack padding={1.5}>
                                <Box px={4}>
                                    <CustomBoldText style={checkCustomerStyles.boxAverageHeaderText} text="Ortalama Satış Adedi" />
                                </Box>
                                <CustomDivider />
                                <Box px={4} pb={4}>
                                    <Text style={checkCustomerStyles.boxAverageBodyText}>{}</Text>
                                </Box>
                            </VStack>
                        </Box>
                        <CustomSmallCard headerText="Tercih Edilen Renk" bodyText="sadaswerwerwerwrd" footerText="sadaswrwerwerwerewrd" />
                        <CustomSmallCard headerText="Tercih Edilen Ürün" bodyText="sadaswerwerwerwrd" footerText="sadaswrwerwerwerewrd" />
                        <CustomSmallCard headerText="Ramsey/KİP Oranı" bodyText="sadaswerwerwerwrd" footerText="sadaswrwerwerwerewrd" />
                        <CustomSmallCard headerText="Kampanya Oranı" bodyText="sadaswerwerwerwrd" footerText="sadaswrwerwerwerewrd" />
                    </HStack>
                </VStack>
            )
        }
        else if (firstItem.InvoiceNo == " ")
            return (
                <View style={{ marginVertical: "50%" }}>
                    <CustomBoldText text="Bulunamadı !" />
                </View>

            )

    };

    return (
        <ScrollView>
            <Center style={checkCustomerStyles.view}>
                <View style={checkCustomerStyles.inputView}>
                    <CustomInput onChangeText={(text) => { phoneNumber = text; }} placeholder="Telefon numarası" inputLeftElement={
                        <Icon
                            as={<FontAwesomeIcon name="phone-alt" />}
                            size="md"
                            m={2}
                        />
                    } />
                </View>
                <TouchableOpacity onPress={() => { props.actions.getShoppingItems(phoneNumber); }} >
                    <Center flexDirection="row" style={checkCustomerStyles.searchButton}
                        size={"100%"}
                        _text={{ color: 'black', fontWeight: "bold", fontSize: 15 }}
                    >
                        <FontAwesomeIcon style={checkCustomerStyles.icon} name="search" size={25} />
                        <CustomBoldText style={checkCustomerStyles.text} text="Ara" />
                    </Center>
                </TouchableOpacity>
                {renderShoppingItems()}
            </Center>

        </ScrollView>
    )
}

function mapStateToProps(state) {
    return {
        shoppingItems: state.getShoppingItemsSuccessReducer,
        shoppingItemDetail: state.getShoppingItemDetailSuccessReducer
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            getShoppingItems: bindActionCreators(ShoppingItemActions.getShoppingItems, dispatch),
            getShoppingItemDetail: bindActionCreators(ShoppingItemActions.getShoppingItemDetail, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckCustomer);