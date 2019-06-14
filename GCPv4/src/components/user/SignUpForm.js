import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert
} from 'react-native';
import * as action from '../../api/user.api'

export default class SignUpForm extends Component {
    constructor(props) {
        super(props),
            this.state = {
                userName: '',
                password: '',
                given_name: '',
                birthday: '',
                tel: '',
                address: '',
                ctz_id: '',
                dpartment: '',
            }
    }
    render() {
        return (
            <View style={signUp.form}>
                <ScrollView>
                    <TextInput style={signUp.infoInput}
                        placeholder='Tên đăng nhập'
                        placeholderTextColor='white'
                        onChangeText={(text) => this.setState({ userName: text })} />

                    <TextInput style={signUp.infoInput}
                        placeholder='Mật khẩu'
                        placeholderTextColor='white'
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ password: text })} />

                    <TextInput style={signUp.infoInput}
                        placeholder='Họ tên'
                        placeholderTextColor='white'
                        onChangeText={(text) => this.setState({ given_name: text })} />

                    <TextInput style={signUp.infoInput}
                        placeholder='Ngày sinh'
                        placeholderTextColor='white'
                        onChangeText={(text) => this.setState({ birthday: text })} />

                    <TextInput style={signUp.infoInput}
                        placeholder='Số điện thoại'
                        placeholderTextColor='white'
                        onChangeText={(text) => this.setState({ tel: text })} />

                    <TextInput style={signUp.infoInput}
                        placeholder='Địa chỉ'
                        placeholderTextColor='white'
                        onChangeText={(text) => this.setState({ address: text })} />

                    <TextInput style={signUp.infoInput}
                        placeholder='Số CMND'
                        placeholderTextColor='white'
                        onChangeText={(text) => this.setState({ ctz_id: text })} />

                    <TextInput style={signUp.infoInput}
                        placeholder='Chức vụ'
                        placeholderTextColor='white'
                        onChangeText={(text) => this.setState({ dpartment: text })} />
                </ScrollView>

                <Text
                    style={signUp.alreadyHaveAccount}
                    onPress={() => this.props.nav.navigate('Login')}>
                    Đã có tài khoản ?
                </Text>

                <TouchableOpacity
                    style={signUp.button}
                    onPress={() => this.handleSignUpPress()}>
                    <Text style={signUp.buttonTitle}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
        );
    }

    handleSignUpPress() {
        let { userName, password, given_name, birthday, tel, address, ctz_id, dpartment } = this.state;

        if (userName != ""|| password != ""|| given_name != ""|| birthday != ""|| tel != ""|| address != ""|| ctz_id != ""|| dpartment!= "") {
            action.signUp(userName, password, given_name, birthday, tel, address, ctz_id, dpartment)
                .then(res => {
                    console.log('==================result==================');
                    console.log(res.username);
                    console.log('==========================================');
                    this.props.nav.navigate('Login')
                    Alert.alert('Thông báo', 'Đăng ký thành công tài khoản ' + res.username)
                })
        }else{
            Alert.alert('Cảnh báo','Thông tin không được trống');
        }

    }
}

const signUp = StyleSheet.create({
    form: {
        flex: 6,
        width: "85%",
        marginLeft: 28,
        marginBottom: 10,
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
    button: {
        width: "88%",
        height: 50,
        borderRadius: 5,
        backgroundColor: "#06D75D",
        marginTop: 15,
        marginLeft: 16,
        marginBottom: 10,
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
    },
    alreadyHaveAccount: {
        fontSize: 14,
        color: 'white',
        marginTop: 15,
        fontWeight: '400',
        textAlign: 'right',
        marginRight: 23,
    },
})