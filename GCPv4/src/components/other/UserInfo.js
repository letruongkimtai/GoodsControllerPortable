import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import * as Storage from '../../common/Storage';
import * as Key from '../../common/StorageKey'
import { Icon } from 'native-base';


export default class UserInfo extends Component {
    constructor(props){
        super(props)
        this.state={
            user:{}
        }
    }

    async componentDidMount(){
        const data = await Storage.getData(Key.UserData);
        this.setState({
            user:data,
        })
    }

    render() {
        const{user} = this.state;
        return (
            <View style={menu.userInfo}>
                <View style={menu.profileImage}>
                    <Image style={menu.image} source={require('../../assets/images/user.png')} />
                </View>
                <View style={menu.info}>
                    <Text style={menu.infoText}>{user.given_name}</Text>
                    <Text style={[menu.infoText, menu.department]}>{user.department}</Text>
                </View>
            </View>
        );
    }
}

const menu = StyleSheet.create({
    userInfo: {
        flex: 1,
    },
    profileImage: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },
    infoText: {
        fontSize: 20,
        color: '#fff',
        fontWeight: '500',
    },
    department: {
        fontWeight: '400'
    },
})