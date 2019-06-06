import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    ImageBackground,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

export default class Login extends Component {
    static navigationOptions = {
        header:null,
    }
    render() {
        return (
            <ImageBackground 
            style={login.backGround}
            source={require('../../../assets/images/background.png')}>
                <View style={login.blurBackGround}>
                    <View style={login.header}>
                        <Image source={require('../../../assets/images/logo.png')}/>
                        <Text style={login.Title}>{`Goods Controller \nPortable`}</Text>
                    </View>
                    <View style={login.form}>
                        <View style={login.input}>
                            <TextInput style={login.infoInput}
                                placeholder='Username'
                                placeholderTextColor='white' />
                            <TextInput style={login.infoInput} 
                            placeholder='Password'
                            placeholderTextColor='white'
                            secureTextEntry={true}/>
                            <Text style={login.dontHaveAccount}>Chưa có tài khoản ?</Text>
                        </View>
                        <TouchableOpacity style={login.button}>
                            <Text style={login.buttonTitle}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
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
    form:{
        flex:1,
        width:"85%",
        height:"100%",
        marginLeft:26,
    },
    Title:{
        fontSize:24,
        color:'white',
        fontWeight: '500',
        textAlign:'center',
        marginLeft: 5,
    },
    infoInput:{
        width:"85%",
        height:40,
        color:"white",
        fontSize:18,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginTop: 20,
        marginLeft:20
    },
    dontHaveAccount:{
        fontSize:14,
        color:'white',
        marginTop:15,
        fontWeight:'400',
        textAlign:'right',
        marginRight: 23,
    },
    button:{
        width:"88%",
        height:50,
        borderRadius: 5,
        backgroundColor:"#36A5B3",
        marginTop:28,
        marginLeft:16,
        shadowColor: '#464646', //Set color
        shadowOffset: {
            width: 0,     //Set width and height for shadow
            height: 2
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 1.0, //Set Opacity
        elevation:3, // Set elevation - A must have for android 5+
    },
    buttonTitle:{
        textAlign:'center',
        marginTop:12,
        fontSize:19,
        color:'white',
        fontWeight:'400'
    }
})