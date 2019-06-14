import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Button,
    ToastAndroid
} from 'react-native';
import { styles } from '../../styling/styles';
import * as Store from '../../common/Storage';
import * as Key from '../../common/StorageKey'


export default class Other extends Component {

    LogOut(){
        Store.saveData(Key.UserData,null);
        this.props.navigation.navigate('Login');
        ToastAndroid.show('Bye Bye!!!', 2);
    }
    render() {
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                <Button title='Đăng xuất' onPress={()=>this.LogOut()}/>
            </ImageBackground>
        );
    }
}