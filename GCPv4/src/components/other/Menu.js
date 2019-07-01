import React, { Component } from 'react';
import {
    View,
    Text,
    ToastAndroid,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'native-base';
import * as Store from '../../common/Storage';
import * as Key from '../../common/StorageKey';


export default class Menu extends Component {
    LogOut() {
        Store.saveData(Key.UserData, null);
        this.props.nav.navigate('Login');
        ToastAndroid.show('Bye Bye!!!', 2);
    }
    render() {
        return (
            <View style={menu.functionList}>
                <ScrollView>
                    <TouchableOpacity style={menu.function}>
                        <View style={menu.icon}>
                            <Icon style={{ color: '#2b9abd' }} type='FontAwesome5' name='user-tie' />
                        </View>
                        <View style={menu.name}>
                            <Text style={{ fontSize: 20, color: '#000', fontWeight: '400', fontFamily: 'inherit' }}>Thông tin người dùng</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={menu.function}>
                        <View style={menu.icon}>
                            <Icon style={{ color: '#f5d742' }} type='FontAwesome5' name='bell' />
                        </View>
                        <View style={menu.name}>
                            <Text style={{ fontSize: 20, color: '#000', fontWeight: '400', fontFamily: 'inherit' }}>Thông báo</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={menu.function}>
                        <View style={menu.icon}>
                            <Icon style={{ color: '#daab6c' }} type='FontAwesome5' name='boxes' />
                        </View>
                        <View style={menu.name}>
                            <Text style={{ fontSize: 20, color: '#000', fontWeight: '400', fontFamily: 'inherit' }}>Lịch sử lấy hàng</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={menu.function}>
                        <View style={menu.icon}>
                            <Icon style={{ color: '#432613' }} type='FontAwesome5' name='clipboard-list' />
                        </View>
                        <View style={menu.name}>
                            <Text style={{ fontSize: 20, color: '#000', fontWeight: '400', fontFamily: 'inherit' }}>Thống kê tồn kho</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={menu.function} onPress={()=>this.LogOut()}>
                        <View style={menu.icon}>
                            <Icon style={{ color: '#c4c1bc' }} type='FontAwesome5' name='door-open' />
                        </View>
                        <View style={menu.name}>
                            <Text style={{ fontSize: 20, color: '#000', fontWeight: '400', fontFamily: 'inherit' }}>Đăng xuất</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const menu = StyleSheet.create({
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
    },
    function: {
        height: 60,
        width: "100%",
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    icon: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        flex: 3,
        justifyContent: 'center',
        marginLeft: 15,
    }
})