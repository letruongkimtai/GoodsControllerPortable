import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import Remind from './Remind';
import UnconfirmedOrders from './UnconfirmedOrders';
import AddButton from '../buttons/AddButton';

export default class Home extends Component {
    static navigationOptions={
        headerStyle:{
            backgroundColor:'#095FC8'
        },
        header:null,
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../../assets/images/background.png')}>
                <Remind/>
                <Text style={styles.title}>Đơn hàng chưa xác nhận</Text>
                <UnconfirmedOrders navigation={this.props.navigation}/>
                <Text style={styles.title}>Hàng gần hết</Text>
                <View style={styles.outOfStock} >
                    <Text onPress={() => this.props.navigation.navigate('ProductList')}>outOfStock</Text>
                </View>
                <AddButton/>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    outOfStock: {
        flex: 4,
        backgroundColor: '#EBEBEB',
        marginLeft: 25,
        width: 315,
        borderRadius: 10,
    },
    title:{
        fontSize:17,
        color:"white",
        marginLeft:25,
        marginBottom:8,
        marginTop: 25,
    }
    
});