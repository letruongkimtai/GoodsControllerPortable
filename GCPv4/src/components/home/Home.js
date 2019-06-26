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
import OutOfStock from './OutOfStock';

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
                        <OutOfStock nav={this.props.navigation}/>
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