import React, {Component} from 'react';
import {
    BackgroundImage,
    StyleSheet,
} from 'react-native';
import ActionButton from 'react-native-action-button';

export default class Products extends Component {
    render() {
        return (
            <BackgroundImage style={styles.container} source={require('../../assets/images/background.png')}>
            </BackgroundImage>
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