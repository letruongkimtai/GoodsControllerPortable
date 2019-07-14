import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
    Image,
    FlatList
} from 'react-native';
import { styles } from '../../styling/styles';
import { textColor } from '../../styling/colors';
import { Button, Icon } from 'native-base';
import * as Action from '../../api/order.api'


export default class OrderList extends Component {

    constructor(props) {
        super(props),
            this.state = {
                order: [],
                refreshing:false
            }
    }

    async getOrdersList() {
        return await Action.showOrders().then(res => {
            console.log('====================================');
            console.log(res);
            console.log('====================================');
            this.setState({
                order: res,
                refreshing:false
            })
        }).catch(err => {
            console.log(err);
        })
    }

    async componentDidMount() {
        this.getOrdersList();
        console.log(this.state.order)
    }

    getStatus(status) {
        if (status) {
            const Ok = 'Đã xác nhận';
            return Ok;
        }
        else {
            const Nope = 'Chưa xác nhận'
            return Nope;
        }
    }

    handleAddPress() {
        this.props.navigation.navigate('AddOrder');
    }

    handleDetailPress(id) {
        this.props.navigation.navigate('OrderDetail', { id: id })
    }

    _refresh = () => {
        this.setState({ refreshing: true });
        this.getOrdersList()
    }

    render() {
        const {refreshing} = this.state
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                <View style={orderList.header}>
                    <View style={orderList.headerTitle}>
                        <Text style={orderList.title}>Lịch sử đơn hàng</Text>
                    </View>
                    <View style={orderList.addButton}>
                        <Text
                            style={[orderList.title, textColor.headerButton]}
                            onPress={() => this.handleAddPress()}>Thêm</Text>
                    </View>
                </View>
                <View style={orderList.body}>
                    <ScrollView>
                        <FlatList
                            data={this.state.order}
                            keyExtractor={(item, index) => index.toString()}
                            refreshing={refreshing}
                            onRefresh={() => this._refresh()}
                            extraData={this.state}
                            renderItem={({ item }) =>
                                <View style={orderList.itemCard}>
                                    <View style={orderList.orderInfo}>
                                        <View style={[orderList.orderStatus]}>
                                            <Text style={orderList.status}>{item.created}</Text>
                                            <Text style={orderList.status}>{this.getStatus(item.status).toString()}</Text>
                                        </View>
                                    </View>
                                    <View style={orderList.navButton}>
                                        <Button transparent
                                            style={{ marginLeft: 20 }}
                                            onPress={() => this.handleDetailPress(item.id)}>
                                            <Icon style={{ color: 'black' }} type="FontAwesome5" name="chevron-right" />
                                        </Button>
                                    </View>
                                </View>
                            }

                        />
                    </ScrollView>
                </View>
            </ImageBackground>
        );
    }
}

const orderList = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: 'white',
        shadowColor: '#000000', //Set color
        shadowOffset: {
            width: 0,     //Set width and height for shadow
            height: 5
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 1.0, //Set Opacity
        elevation: 3, // Set elevation - A must have for android 5+
        flexDirection: 'row',
        height: "80%"
    },
    body: {
        flex: 9,
    },
    headerTitle: {
        flex: 3,
    },
    addButton: {
        flex: 2,
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 42,
        marginTop: 15,
        color: 'black'
    },
    itemCard: {
        height: 80,
        width: "90%",
        marginLeft: 15,
        backgroundColor: 'white',
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
    },
    orderInfo: {
        flex: 3,
    },
    navButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderID: {
        flex: 1,
        alignItems: 'center',
    },
    orderStatus: {
        flex: 1,
    },
    id: {
        fontSize: 15,
        color: 'black',
        marginTop: 10,
        marginLeft: 20
    },
    status: {
        fontSize: 17,
        color: 'black',
        marginLeft: 15,
        marginTop: 15
    },
    seperateLine: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
    }


})

