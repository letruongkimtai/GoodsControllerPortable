import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { Icon } from 'native-base'
import { styles } from '../../styling/styles';
import { Button } from 'native-base';
import UserInfo from './UserInfo';
import { BackgroundColor } from '../../styling/colors';

export default class ConfigNConfirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taken: 0,
            productsList: [],
        }
    }

    async componentDidMount() {
        const list = this.props.navigation.getParam('productsList')
        this.setState({
            productsList: list,
        })
        console.log(list)
    }

    render() {
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                <View style={confirm.productsList}>
                    <View style={confirm.listHeader}>
                        <Text style={confirm.listTitle}>Danh sách sản phẩm</Text>
                    </View>
                    <View style={confirm.listButton}>
                        <Button style={{ marginRight: 7 }} small danger iconLeft>
                            <Text style={confirm.nonIconButtonTitle}>Hủy đơn hàng</Text>
                            <Icon style={{ color: 'white' }} type='FontAwesome5' name='trash' />
                        </Button>
                        <Button success small>
                            <Icon style={{ color: 'white' }} type='FontAwesome5' name='undo' />
                        </Button>
                    </View>

                    <View style={confirm.listBody}>
                        <ScrollView>
                        <View style={confirm.listItemCard}></View>
                        </ScrollView>
                    </View>

                </View>
                <UserInfo />
                <View style={confirm.buttonHolder}>

                    <Button block iconLeft large style={BackgroundColor.success}>
                        <Text style={confirm.bottomButtonTitle}>Đặt hàng</Text>
                        <Icon style={{ color: 'white' }} type='FontAwesome5' name='check' />
                    </Button>

                    <Button block iconLeft large warning style={confirm.spaceBetween}>
                        <Text style={confirm.nonIconButtonTitle}>Quay lại</Text>
                    </Button>

                </View>
            </ImageBackground>
        );
    }
}

const confirm = StyleSheet.create({
    productsList: {
        flex: 2,
    },
    buttonHolder: {
        flex: 1,
        width: "95%",
        marginLeft: 9,
        marginTop: 10
    },
    listHeader: {
        flex: 1,
    },
    listButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop:10,
        marginBottom:-20,
        marginRight:10,
    },
    listBody: {
        flex: 4,
        backgroundColor: 'white',
        shadowColor: '#000000', //Set color
        width: "95%",
        marginLeft: 8,
        shadowOffset: {
            width: 0,     //Set width and height for shadow
            height: 5
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 1.0, //Set Opacity
        elevation: 3, // Set elevation - A must have for android 5+,
    },
    listTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500',
        marginLeft: 5,
        marginTop: 20,
        marginBottom: 10,
    },
    amountCounter: {
        flex: 1,
        flexDirection: 'row',
    },
    quantitytButton: {
        height: 40,
        width: 50,
    },
    productQuantity: {
        fontSize: 20,
        color: 'black',
        fontWeight: '400',
        marginTop: 5,
        marginRight: 15,
        marginLeft: 15,
    },
    bottomButtonTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
        marginLeft: 38,
    },
    spaceBetween: {
        marginTop: 10,
    },
    nonIconButtonTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
    },
    listItemCard:{
        flex:1,
        flexDirection:'row',
        height:80,
        marginBottom:8,
        backgroundColor:'#DEDEDE'
    }
})