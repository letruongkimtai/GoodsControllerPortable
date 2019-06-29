import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { styles } from '../../styling/styles';
import Menu from './Menu';
import UserInfo from './UserInfo';


export default class Other extends Component {
    render() {
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                <UserInfo/>
                <Menu/>
            </ImageBackground>
        );
    }
}