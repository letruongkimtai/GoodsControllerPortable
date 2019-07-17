import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    ScrollView,
    RefreshControl
} from 'react-native';
import Remind from './Remind';
import UnconfirmedOrders from './UnconfirmedOrders';
import AddButton from '../buttons/AddButton';
import { styles } from '../../styling/styles';
import OutOfStock from './OutOfStock';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            update: false
        }
    }

    _onRefresh(){
        setTimeout(function(){
            this.setState({
                update:false
            })
        }.bind(this),3000)
        
        this.setState({
            update:true
        })
    }
    render() {
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                <View style={home.container}>
                    <ScrollView refreshControl={<RefreshControl refreshing={this.state.update} onRefresh={()=>this._onRefresh()}/>}>
                        <Remind />
                        <Text style={home.title}>Đơn hàng chưa xác nhận</Text>
                        <UnconfirmedOrders navigation={this.props.navigation} update={this.state.update}/>
                        <Text style={home.title}>Hàng gần hết</Text>
                        <OutOfStock nav={this.props.navigation} update={this.state.update}/>
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

const home = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 7,
    },
    title: {
        fontSize: 20,
        color: "white",
        marginLeft: 25,
        marginBottom: 8,
        marginTop: 25,
        fontWeight: '500',
        fontFamily: 'OpenSans',
    }

});