import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    ScrollView,
    Image,
    FlatList,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { Icon } from 'native-base'
import { styles } from '../../styling/styles';
import { textColor, BackgroundColor } from '../../styling/colors';
import * as ProductAction from '../../api/product.api'
import { Button } from 'native-base';
import Modal from 'react-native-modalbox'

export default class AddOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            orderItems: [],
            totalProducts: 0,
            taken: 0,
            refreshing: false,
        }
    };

    async getOutOfStockProducts() {
        return ProductAction.outOfStockItems().then(res => {
            console.log(res);
            this.setState({
                products: res,
                refreshing:false
            })
        }).catch(err => {
            console.log(err);
        })
    };

    async componentDidMount() {
        this.getOutOfStockProducts();
    };

    componentDidUpdate() {
        const { orderItems } = this.state
        if (this.props.navigation.getParam('reset') != null) {
            orderItems.length = 0;
            this.getOutOfStockProducts()
        }
    }

    //Check xem hang co trong danh sach chua
    isItemValid(id) {
        const { orderItems } = this.state;
        let flag = false;
        for (i = 0; i < orderItems.length; i++) {
            if (orderItems[i].product_id == id) {
                flag = true;
            }
        }
        return flag;
    };

    handleAddPress(name, id) {
        const { orderItems, taken } = this.state;
        if (taken > 0) {
            var product = {
                product_id: id,
                product_name: name,
                order_amount: taken,
            }
            if (this.isItemValid(id)) {
                console.log('Trung id');
                alert('Mặt hàng đã có trong danh sách..!!')
            } else {
                orderItems.push(product);
                console.log(orderItems)
                this.setState({
                    totalProducts: orderItems.length,
                })
            }
        } else {
            alert('Chưa nhập số lượng..!!');
        }
    };

    handleConfirmNav() {
        const { orderItems, totalProducts } = this.state;
        if (totalProducts == 0) {
            alert('Đơn hàng trống');
        }
        else {
            this.props.navigation.navigate('Confirm', {
                productsList: orderItems,
            });
        };
        // this.props.navigation.navigate('Confirm', {
        //     productsList: order,
        // })
    };

    _refresh = () => {
        this.setState({ refreshing: true });
        this.getOutOfStockProducts()
    }

    render() {
        const { products, refreshing, taken, orderItems } = this.state
        console.log(taken)
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                <View style={order.header}>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[order.title, textColor.headerButton, order.backTitle]}
                            onPress={() => this.props.navigation.goBack()}>
                            Quay Lại
                        </Text>
                    </View>
                    <View style={order.headerTitle}>
                        <Text style={order.title}>Sản phẩm gần hết</Text>
                    </View>
                </View>
                <View style={order.body}>
                    <ScrollView>
                        <FlatList
                            data={products}
                            keyExtractor={(item, index) => index.toString()}
                            refreshing={refreshing}
                            onRefresh={() => this._refresh()}
                            extraData={this.state}
                            renderItem={({ item }) =>
                                <View style={order.itemCard}>
                                    <View style={order.productImage}>
                                        <Image source={require('../../assets/images/logo_small.png')} />
                                    </View>
                                    <View style={order.productInfo}>

                                        <View style={order.productCardHeader}>
                                            <Text style={order.product_name}>{item.product_name}</Text>
                                        </View>

                                        <View style={order.productCardBody}>
                                            <Text style={order.productAmount}>Tồn kho: {item.amount}</Text>
                                        </View>

                                        <View style={order.amountCounter}>
                                            <TextInput style={order.productQuantity}
                                                onChangeText={(amount) => this.setState({ taken: amount })}
                                                keyboardType={'numeric'}
                                            />
                                        </View>
                                    </View>
                                    <View style={[order.addButton, orderItems.length === 0 ? BackgroundColor.success : (this.isItemValid(item.product_id) ? BackgroundColor.disable : BackgroundColor.success)]}>
                                        <Button transparent
                                            onPress={() => this.handleAddPress(item.product_name, item.product_id)}>
                                            <Icon style={{ marginLeft: 30, color: 'white' }} type="FontAwesome5" name={orderItems.length === 0 ? "plus" : this.isItemValid(item.product_id) ? "times" : "plus"} />
                                        </Button>
                                    </View>
                                </View>
                            }
                        />
                    </ScrollView>
                </View>
                <View style={order.footer}>
                    <TouchableOpacity style={order.totalAmount} onPress={() => this.refs.modal1.open()}>
                        <Text style={order.amount}>Số lượng mặt hàng: {orderItems.length}</Text>
                    </TouchableOpacity>
                    <View style={order.navButton}>
                        <Icon onPress={() => this.handleConfirmNav()} style={{ color: 'black' }} type="FontAwesome5" name="arrow-right" />
                    </View>
                </View>
                {/* modal */}
                <Modal
                    coverScreen={true}
                    style={[order.modal]}
                    ref={"modal1"}
                    swipeToClose={true}>
                    <View style={order.modalHeader}>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[order.title, textColor.headerButton, order.backTitle]}
                                onPress={() => this.refs.modal1.close()}>
                                Quay Lại
                            </Text>
                        </View>
                        <View style={order.headerTitle}>
                            <Text style={order.title}>Chi tiết đơn hàng</Text>
                        </View>
                    </View>
                    <ScrollView>
                        <FlatList
                            data={orderItems}
                            keyExtractor={(item, index) => index.toString()}
                            extraData={this.state}
                            renderItem={({ item }) =>
                                <View style={order.itemCard}>
                                    <View style={order.productImage}>
                                        <Image source={require('../../assets/images/logo_small.png')} />
                                    </View>
                                    <View style={order.productInfo}>

                                        <View style={order.productCardHeader}>
                                            <Text style={order.product_name}>{item.product_name}</Text>
                                        </View>

                                        <View style={order.productCardBody}>
                                            <Text style={order.productAmount}>Số lượng: {item.order_amount}</Text>
                                        </View>
                                    </View>
                                </View>
                            }
                        />
                    </ScrollView>
                </Modal>
            </ImageBackground>

        );
    };
}

const order = StyleSheet.create({
    modal: {
        flex: 1
    },
    modalHeader: {
        height: 55,
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: '#000000', //Set color
        shadowOffset: {
            width: 0,     //Set width and height for shadow
            height: 5
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 1.0, //Set Opacity
        elevation: 3, // Set elevation - A must have for android 5+,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: '#000000', //Set color
        shadowOffset: {
            width: 0,     //Set width and height for shadow
            height: 5
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 1.0, //Set Opacity
        elevation: 3, // Set elevation - A must have for android 5+,
    },
    body: {
        flex: 8,
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
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
    },
    headerTitle: {
        flex: 3,
        justifyContent: 'center',
    },
    title: {
        marginLeft: 25,
        fontSize: 19,
        color: 'black',
        fontStyle: 'normal'
    },
    backTitle: {
        marginLeft: 5
    },
    itemCard: {
        width: "90%",
        height: "70%",
        backgroundColor: 'white',
        marginLeft: 17,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        flex: 1,
        shadowColor: '#000000', //Set color
        shadowOffset: {
            width: 0,     //Set width and height for shadow
            height: 5
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 1.0, //Set Opacity
        elevation: 3, // Set elevation - A must have for android 5+
    },
    productImage: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
    },
    productInfo: {
        flex: 2,
    },
    addButton: {
        flex: 1,
        width: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    productCardHeader: {
        flex: 1,
    },
    productCardBody: {
        flex: 1,
        alignContent: 'center',
    },
    amountCounter: {
        flex: 1,
        height: 60,
        flexDirection: 'row',
    },
    product_name: {
        color: 'black',
        fontSize: 20,
        fontWeight: '400',
        marginBottom: 5
    },
    productAmount: {
        color: 'black',
        fontSize: 18,
        marginTop: 5
    },
    productStatus: {
        fontSize: 18,
        marginTop: 5,
    },
    quantitytButton: {
        height: 40,
        width: 50,
    },
    productQuantity: {
        fontSize: 15,
        color: 'black',
        fontWeight: '400',
        marginTop: 5,
        marginRight: 15,
        height: 40,
        width: "60%",
        borderWidth: 0.5,
        backgroundColor: '#DEDEDE'
    },
    totalAmount: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navButton: {
        flex: 1,
        borderLeftWidth: 1,
        borderLeftColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    amount: {
        color: 'black',
        fontSize: 19,
    }
});