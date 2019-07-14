import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Alert
} from 'react-native';
import {
    Button,
    Icon
} from 'native-base';
import * as Action from '../../api/order.api';
import { textColor } from '../../styling/colors.js';

export default class OrderDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            currentItem: null,
            note: "",
            update: false,
            totalAmount: 0
        }
    }

    async getDetail() {
        const id = this.props.navigation.getParam('id');
        return await Action.getOrderDetail(id).then(res => {
            console.log(res)
            this.setState({
                data: res,
            })
        })
    }

    async componentDidMount() {
        await this.getDetail();
    }

    render() {
        const id = this.props.navigation.getParam('id');
        const {data} = this.state
        return (
            <ImageBackground style={styles.orderDetailContainer} source={require('../../assets/images/background.png')}>
                <View style={styles.Order}>
                    <ScrollView>
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
                        <View style={styles.orderList}>
                            <ScrollView>
                                <FlatList
                                    data={data}
                                    keyExtractor={(item, index) => index.toString()}
                                    extraData={this.state}
                                    renderItem={({ item, index }) =>
                                        <View>
                                            <View style={styles.itemCard}>
                                                <View style={styles.productImage}>
                                                    <Image style={{ marginTop: 15 }} source={require('../../assets/images/logo_small.png')} />
                                                </View>
                                                <View style={styles.productInfo}>

                                                    <View style={styles.productCardHeader}>
                                                        <Text style={styles.product_name}>{item.product.product_name}</Text>
                                                    </View>

                                                    <View style={styles.productCardBody}>
                                                        <Text style={styles.productAmount}>Số lượng: {item.quantity}</Text>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    }
                                />
                            </ScrollView>
                        </View>
                    </ScrollView>
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
        marginBottom: 10,
        backgroundColor: "#EBEBEB",
    },
    orderHeader: {
        flex: 1,
    },
    upperHeader: {
        flex: 1,
        //backgroundColor: "black",
        fontFamily: "OpenSans",
        flexDirection: 'row',
    },
    companyNameHolder: {
        flex: 5,
    },
    status: {
        flex: 1,
    },
    companyName: {
        color: "black",
        fontWeight: '500',
        //textAlign: 'center',
        fontFamily: "OpenSans",
        fontSize: 18,
        marginLeft: 90,
        marginTop: 10,
    },
    statusImg: {
        marginTop: 15,
    },
    lowerHeader: {
        flex: 1,
        width: 270,
        borderTopWidth: 1,
        borderTopColor: "black",
        alignItems: 'center',
        marginLeft: 32,

    },
    orderID: {
        color: "black",
        fontSize: 16,
        fontFamily: 'openSans',
        fontWeight: '400',
        marginTop: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 18,
        marginTop: 10,
        marginLeft: 20,
        fontFamily: 'OpenSans',
        color: "black",
    },
    orderList: {
        flex: 2,
        height: "100%",
        width: "100%",
        marginTop: 5,
        marginRight: 10,
        marginLeft: 3,

    },
    orderNote: {
        flex: 1,
        marginLeft: 20,
    },
    noteInput: {
        borderWidth: 0.5,
        width: 300,
        height: 100,
        backgroundColor: "white"
    },
    confirmedButton: {
        flex: 1,
        width: 300,
        alignSelf: 'center',
        marginTop: 40,
        marginBottom: 15
    },
    itemCard: {
        width: "90%",
        height: 90,
        backgroundColor: 'white',
        marginLeft: 14,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        elevation: 5,
    },
    productImage: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        elevation: 5,
        height: "100%",
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    productInfo: {
        flex: 2,
    },
    productCardHeader: {
        flex: 1,
    },
    productCardBody: {
        flex: 3,
        alignContent: 'center',
        marginTop: 40,
        borderTopWidth: 0.5,
        borderTopColor: 'gray',
        marginRight: 5,
    },
    product_name: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        marginLeft: 15
    },
    productAmount: {
        color: 'black',
        fontSize: 16,
        marginLeft: 15
    },
    productStatus: {
        fontSize: 16,
        marginLeft: 15
    },
    bold: {
        fontWeight: '400',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 290,
        flexDirection: 'row',
        backgroundColor: '#ffffff00'
    }
});