import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    ToastAndroid,
    TouchableOpacity,
    Alert,
} from 'react-native';
import * as Action from '../../api/user.api'
import * as Store from '../../common/Storage'
import * as Key from '../../common/StorageKey'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            data: {},
        }
    }

    
    async componentDidMount(){
        try{
            const user = await Store.getData(Key.UserData);
            console.log(user.token);
    
            if(JSON.stringify(user.token) != null){
                ToastAndroid.show('hi ' + JSON.stringify(user.given_name),2);
                this.props.nav.navigate('Home');
            }
        }catch(e){
            return null
        }
        
    }

    render() {
        return (
            <View style={login.form}>
                <View style={login.input}>

                    <TextInput style={login.infoInput}
                        placeholder='Tên đăng nhập'
                        placeholderTextColor='white'
                        onChangeText={(text) => this.setState({ userName: text })} />

                    <TextInput style={login.infoInput}
                        placeholder='Mật khẩu'
                        placeholderTextColor='white'
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })} />

                    <Text
                        style={login.dontHaveAccount}
                        onPress={() => this.props.nav.navigate('SignUp')}>
                        Chưa có tài khoản ?
                    </Text>
                </View>
                <TouchableOpacity
                    style={login.button}
                    onPress={() => this.handleLoginPress()}>
                    <Text style={login.buttonTitle}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
        );
    }

    handleLoginPress() {
        Action.login(this.state.userName, this.state.password)
            .then(res => {
                console.log('=================Result in render===================');
                console.log(res);
                console.log('====================================================');
                this.setState({ data: res })
                if (this.state.data.token != null) {
                    ToastAndroid.show('Welcome ' + this.state.data.given_name, 3);
                    this.props.nav.navigate('Home');
                    Store.saveData('UserData',res);
                }
                else
                    Alert.alert('Cảnh báo', 'Tên đăng nhập hoặc mật khẩu không đúng..!!')
            })
    }
}

const login = StyleSheet.create({
    form: {
        flex: 1,
        width: "85%",
        height: "100%",
        marginLeft: 28,
    },
    infoInput: {
        width: "85%",
        height: 40,
        color: "white",
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginTop: 20,
        marginLeft: 20
    },
    dontHaveAccount: {
        fontSize: 14,
        color: 'white',
        marginTop: 15,
        fontWeight: '400',
        textAlign: 'right',
        marginRight: 23,
    },
    button: {
        width: "88%",
        height: 50,
        borderRadius: 5,
        backgroundColor: "#36A5B3",
        marginTop: 28,
        marginLeft: 16,
        shadowColor: '#464646', //Set color
        shadowOffset: {
            width: 0,     //Set width and height for shadow
            height: 2
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 1.0, //Set Opacity
        elevation: 3, // Set elevation - A must have for android 5+
    },
    buttonTitle: {
        textAlign: 'center',
        marginTop: 12,
        fontSize: 19,
        color: 'white',
        fontWeight: '400'
    }
})