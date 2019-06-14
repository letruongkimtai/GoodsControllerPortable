import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    Image,
} from 'react-native';
import SignUpForm from './SignUpForm'

export default class SignUp extends Component {
    static navigationOptions = {
        header: null,
    }
    render() {
        return (
            <ImageBackground
                style={signUp.backGround}
                source={require('../../assets/images/background.png')}>
                <View style={signUp.blurBackGround}>
                    <View style={signUp.header}>
                        <Image source={require('../../assets/images/logo_small.png')} />
                        <Text style={signUp.title}>Đăng ký</Text>
                    </View>
                    <SignUpForm nav={this.props.navigation}/>
                </View>

            </ImageBackground>
        );
    }
}

const signUp = StyleSheet.create({
    backGround: {
        height: "100%",
        width: "100%",
    },
    blurBackGround: {
        flex: 1,
        backgroundColor: "rgba(46,46,46,0.3)",
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        flex: 5,
        marginLeft: 75,
        fontSize: 25,
        fontWeight: '500',
        color: 'white',
    },
    logo: {
        flex: 2,
    },
})