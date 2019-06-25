import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    ScrollView,
} from 'react-native';
import Remind from './Remind';
import UnconfirmedOrders from './UnconfirmedOrders';
import AddButton from '../buttons/AddButton';
import { styles } from '../../styling/styles';

export default class Home extends Component {
    render() {
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                <View style={home.container}>
                    <ScrollView>
                        <Remind />
                        <Text style={home.title}>Đơn hàng chưa xác nhận</Text>
                        <UnconfirmedOrders navigation={this.props.navigation} />
                        <Text style={home.title}>Hàng gần hết</Text>
                        <View style={home.outOfStock} >
                            <Text onPress={() => this.props.navigation.navigate('ProductList')}>outOfStock</Text>
                        </View>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

const home = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom:7,
    },
    outOfStock: {
        flex: 4,
        backgroundColor: 'white',
        marginLeft: 25,
        height: 350,
        width: 315,
        borderRadius: 7,
        shadowColor: '#000000', //Set color
        shadowOffset: {
            width: 2,     //Set width and height for shadow
            height: 3
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 0.7, //Set Opacity
        elevation:3, // Set elevation - A must have for android 5+
    },
    title: {
        fontSize: 20,
        color: "white",
        marginLeft: 25,
        marginBottom: 8,
        marginTop: 25,
        fontWeight: '500',
        fontFamily: 'OpenSans',
    }

});