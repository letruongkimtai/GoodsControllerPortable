import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
    Image,
    FlatList
} from 'react-native';
import { styles } from '../../styling/styles';
import { textColor } from '../../styling/colors';
import * as Action from '../../api/order.api'

export default class OrderDetail extends Component {
    render() {
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>

            </ImageBackground>
        );
    }
}