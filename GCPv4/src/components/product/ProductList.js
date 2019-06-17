import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
} from 'react-native';
import { styles } from '../../styling/styles';
import ProductCard from './ProductCard'
export default class ProductList extends Component {
    render() {
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                <View style={list.filter}></View>
                <ProductCard nav={this.props.navigation}/>
            </ImageBackground>
        );
    }
}

const list = StyleSheet.create({
    filter: {
        flex: 1,
    },
})
