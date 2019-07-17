import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView
} from 'react-native';
import * as Storage from '../../common/Storage';
import * as Key from '../../common/StorageKey'
import { styles } from '../../styling/styles';


export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {}
        }
    }

    async componentDidMount() {
        const data = await Storage.getData(Key.UserData);
        this.setState({
            user: data,
        })
    }

    render() {
        const { user } = this.state;
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                    <View style={menu.userInfo}>
                        <View style={menu.profileImage}>
                            <Image style={menu.image} source={require('../../assets/images/user.png')} />
                        </View>
                        <View style={menu.info}>
                            <Text style={menu.infoText}>{user.given_name}</Text>
                            <Text style={[menu.infoText, menu.department]}>{user.department}</Text>
                        </View>
                    </View>
                    <View style={menu.functionList}>
                        <View style={menu.title}></View>
                        <View style={menu.infoContainer}></View>
                    </View>
            </ImageBackground>
        );
    }
}

const menu = StyleSheet.create({
    userInfo: {
        flex: 2,
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
    functionList: {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        elevation: 5,
        flexDirection: 'row',
    },
    title: {
        height:80,
        width:30,
        backgroundColor:'black',
    },
    infoContainer:{
        flex:3,
        backgroundColor:'blue'
    }
})