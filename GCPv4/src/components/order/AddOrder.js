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

export default class AddOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            order: [],
            totalProducts: 0,
            taken: 0,
        }
    };

    async getOutOfStockProducts() {
        return ProductAction.outOfStockItems().then(res => {
            console.log(res);
            this.setState({
                products: res
            })
        }).catch(err => {
            console.log(err);
        })
    };

    async componentDidMount() {
        this.getOutOfStockProducts();
    };

    //Check xem hang co trong danh sach chua
    isItemValid(id) {
        const { order } = this.state;
        let flag = false;
        for (i = 0; i < order.length; i++) {
            if (order[i].product_id == id) {
                flag = true;
            }
        }
        return flag;
    };

    handleAddPress(name, id) {
        const { order, taken } = this.state;
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
                order.push(product);
                console.log(order)
                this.setState({
                    totalProducts: order.length,
                })
            }
        } else {
            alert('Chưa nhập số lượng..!!')
        }
    };

    addPressCounter() {
        const countPress = this.state.taken + 1;
        this.setState({ taken: countPress });
    }

    minusPressCounter() {
        if (this.state.taken > 0) {
            const countPress = this.state.taken - 1;
            this.setState({ taken: countPress });
        } else {
            alert('Hàng lấy không được nhỏ hơn 0')
        }
    }

    handleConfirmNav() {
        const { order,totalProducts } = this.state;
        if(totalProducts == 0){
            alert('Đơn hàng trống');
        }
        else{
            this.props.navigation.navigate('Confirm',{
                productsList: order,
            });
        };
        // this.props.navigation.navigate('Confirm', {
        //     productsList: order,
        // })
    };

    render() {
        const { products, totalProducts, taken } = this.state
        console.log(taken)
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                <View style={order.header}>
                    <Text style={order.headerTitle}>Sản phẩm gần hết</Text>
                </View>
                <View style={order.body}>
                    <ScrollView>
                        <FlatList
                            data={products}
                            keyExtractor={(item, index) => index.toString()}
                            extraData={this.state}
                            renderItem={({ item }) =>
                                < View
                                    style={order.itemCard}>
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
                                    <View style={[order.addButton, BackgroundColor.success]}>
                                        <Button transparent
                                            onPress={() => this.handleAddPress(item.product_name, item.product_id)}>
                                            <Icon style={{ marginLeft: 30, color: 'white' }} type="FontAwesome5" name="plus" />
                                        </Button>
                                    </View>
                                </View>
                            }
                        />
                    </ScrollView>
                </View>
                <View style={order.footer}>
                    <View style={order.totalAmount}>
                        <Text style={order.amount}>Số lượng mặt hàng: {totalProducts}</Text>
                    </View>
                    <View style={order.navButton}>
                        <Icon onPress={() => this.handleConfirmNav()} style={{ color: 'black' }} type="FontAwesome5" name="arrow-right" />
                    </View>
                </View>
            </ImageBackground>
        );
    };
}

const order = StyleSheet.create({
    header: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'center',
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
        fontSize: 19,
        color: 'black',
        fontWeight: '500',
        height: "80%"
    },
    itemCard: {
        width: "90%",
        height: 200,
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
        marginLeft: 15,
        height: 50,
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