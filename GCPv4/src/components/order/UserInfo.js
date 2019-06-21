import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import * as Storage from '../../common/Storage';
import * as Key from '../../common/StorageKey'

export default class UserInfo extends Component {
    constructor(props){
        super(props),
        this.state={
            user:{},
        }
    }

    async componentDidMount(){
        const data = await Storage.getData(Key.UserData);
        this.setState({
            user:data,
        })
    }

    render() {
        const {user} = this.state;
        return (
            <View style={confirm.user}>
                <View style={confirm.userHeader}>
                    <Text style={confirm.headerTitle}>Thông tin người đặt</Text>
                </View>
                <View style={confirm.userBody}>
                    <View style={confirm.userImage}>
                        <Image source={require('../../assets/images/Webp.net-resizeimage.png')} />
                    </View>
                    <View style={confirm.userInfo}>
                        <Text style={confirm.info}>Họ tên:  {user.given_name}</Text>
                        <Text style={confirm.info}>SĐT:  {user.tel}</Text>
                        <Text style={confirm.info}>Chức vụ:  {user.department}</Text>
                        <Text style={confirm.info}>Chi nhánh:  Coop mart Đỗ Văn Dậy</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const confirm = StyleSheet.create({
    user:{
        flex:1,
        backgroundColor:'white',
        shadowColor: '#000000', //Set color
        width:"95%",
        marginLeft:8,
        marginTop:20,
        shadowOffset: {
            width: 0,     //Set width and height for shadow
            height: 5
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 1.0, //Set Opacity
        elevation: 3, // Set elevation - A must have for android 5+,
    }, userHeader:{
        flex:1,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        width:"80%",
        marginLeft:33,
    },
    headerTitle:{
        color:'black',
        fontFamily: 'open sans',
        fontWeight:'400',
        fontSize:19,
        marginTop:5,
        textAlign:'center',
    },
    userBody:{
        flex:3,
        flexDirection:'row',
        justifyContent:'center',
        marginTop:5,
    },
    userImage:{
        flex:1,
    },
    userInfo:{
        flex:2,
        justifyContent:'flex-start',
    },
    info:{
        fontSize:17,
        color:'black',
        textAlign:'justify',
    },
})