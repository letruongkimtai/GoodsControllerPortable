import React, {Component} from 'react';
import {
    ImageBackground,
    StyleSheet,
} from 'react-native';

export default class Product extends Component {
    
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/images/background.png')}>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        height: '100%',
    }
});