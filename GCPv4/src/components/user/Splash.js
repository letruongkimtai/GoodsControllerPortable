import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
} from 'react-native';
import LoginForm from './LoginForm'

export default class Splash extends Component {
    render() {
        return (
            <ImageBackground 
            style={login.backGround}
            source={require('../../assets/images/background.png')}>
                    <View style={login.header}>
                        <Image source={require('../../assets/images/logo.png')}/>
                        <Text style={login.Title}>{`Goods Controller \nPortable`}</Text>
                    </View>
            </ImageBackground>
        );
    }
}

const login = StyleSheet.create({
    backGround:{
        height:"100%",
        width:"100%",
    },
    blurBackGround:{
        flex:1,
        backgroundColor:"rgba(46,46,46,0.3)",
    },
    header:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },
    Title:{
        fontSize:24,
        color:'white',
        fontWeight: '500',
        textAlign:'center',
        marginLeft: 5,
    },
})