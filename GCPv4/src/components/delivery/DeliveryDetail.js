import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
} from 'react-native';
import { 
    Button,
 } from 'native-base';
 import * as Action from '../../api/delivery.api.js';

export default class OrderDetail extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
        }
    }

    async getDetail(){
        const id = this.props.navigation.getParam('id');
        return await Action.getDeliveryDetail(id).then(res=>{
            console.log(res)
        })
    }

    async componentDidMount(){
        await this.getDetail();
    }

    render() {
        const id = this.props.navigation.getParam('id');
        return (
            <ImageBackground style={styles.orderDetailContainer} source={require('../../assets/images/background.png')}>
                <View style={styles.Order}>
                    <View style={styles.orderHeader}>
                        <View style={styles.upperHeader}>
                            <View style={styles.companyNameHolder}>
                                <Text style={styles.companyName}>Kho trung tâm Coop</Text>
                            </View>
                            <View style={styles.status}>
                                <Image style={styles.statusImg} source={require('../../assets/images/dot.png')}></Image>
                            </View>
                        </View>
                        <View style={styles.lowerHeader}>
                            <Text style={styles.orderID}>{id}</Text>
                        </View>
                    </View>
                    <Text style={styles.title}>Danh sách mặt hàng</Text>
                    <View style={styles.orderList}></View>
                    <Text style={styles.title}>Ghi chú</Text>
                    <View style={styles.orderNote}>
                        <TextInput multiline={true} style={styles.noteInput}></TextInput>
                    </View>
                    <View style={styles.confirmedButton}>
                        <Button block success>
                            <Text style={{color:"white"}}>Xác nhận đơn hàng</Text>
                        </Button>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    orderDetailContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    Order: {
        height: '100%',
        width: 340,
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 25,
        backgroundColor: "#EBEBEB",
    },
    orderHeader: {
        flex: 1,
    },
    upperHeader: {
        flex: 1,
        //backgroundColor: "black",
        fontFamily:"OpenSans",
        flexDirection: 'row',
    },
    companyNameHolder:{
        flex:5,
    },
    status:{
        flex:1,
    },
    companyName:{
        color:"black",
        fontWeight: '500',
        //textAlign: 'center',
        fontFamily:"OpenSans",
        fontSize:18,
        marginLeft:90,
        marginTop:10,
    },
    statusImg:{
        marginTop: 15,
    },
    lowerHeader: {
        flex: 1,
        width:270,
        borderTopWidth: 1,
        borderTopColor: "black",
        alignItems: 'center',
        marginLeft:32,

    },
    orderID:{
        color:"black",
        fontSize:16,
        fontFamily: 'openSans',
        fontWeight:'400',
        marginTop:10,
        textAlign:'center'
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        marginLeft:20,
        fontFamily: 'OpenSans',
        color:"black",
    },
    orderList: {
        flex: 2,
        height: 350,
        width: "90%",
        borderRadius: 10,
        marginTop: 5,
        marginRight: 10,
        marginLeft: 17,
        marginBottom: 20,
        backgroundColor: "#08B536",

    },
    orderNote: {
        flex: 1,
        marginLeft:20,
    },
    noteInput:{
        borderWidth:0.5,
        width:300,
        height:100,
        backgroundColor:"white"
    },
    confirmedButton:{
        flex:1,
        width:300,
        alignSelf: 'center',
        marginTop:40,
    },
});