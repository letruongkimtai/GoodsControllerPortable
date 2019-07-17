import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    FlatList
} from 'react-native';
import {

} from 'native-base';
import * as ProductAction from '../../api/product.api'

export default class OutOfStock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product:[],
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps){
            this.getOutOfStockProducts()
        }
    }

    async getOutOfStockProducts() {
        return await ProductAction.outOfStockItems().then(res => {
            console.log(res);
            this.setState({
                product:res,
            })
        }).catch(err => {
            console.log(err);
        })
    };


    async componentDidMount() {
        await this.getOutOfStockProducts();
        console.log(this.state.product)
    };

    getStatus(amount) {
        var status = ''
        if (amount == 0) {
            status = 'Hết hàng';
        } else {
            status = 'Gần hết hàng';
        }
        return status
    }

    render() {
        console.log(this.props.update)
            return (
                <View style={list.container}>
                    <ScrollView>
                        <FlatList
                            data={this.state.product}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={list.itemCard}>
                                    <View style={list.productImage}>
                                        <Image style={{ marginTop: 20 }} source={require('../../assets/images/logo_small.png')} />
                                    </View>
                                    <View style={list.productInfo}>

                                        <View style={list.productCardHeader}>
                                            <Text style={list.product_name}>{item.product_name}</Text>
                                        </View>

                                        <View style={list.productCardBody}>
                                            <Text style={list.productAmount}>Số lượng: {item.amount}</Text>
                                            <Text style={[list.productStatus]}>Tình trạng: {this.getStatus(item.amount)}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    </ScrollView>
                </View>
            );
    }
}

const list = StyleSheet.create({
    container: {
        flex: 4,
        backgroundColor: '#DEDEDE',
        marginLeft: 25,
        height: 350,
        width: 315,
        borderRadius: 7,
        shadowColor: '#000000', //Set color
        shadowOffset: {
            width: 2,     //Set width and height for shadow
            height: 3
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 0.7, //Set Opacity
        elevation: 3, // Set elevation - A must have for android 5+
    },
    itemCard: {
        width: "90%",
        height: 140,
        backgroundColor: 'white',
        marginLeft: 15,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        flex: 1,
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
        marginLeft: 10
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
        fontSize: 18,
        marginLeft: 15
    },
    productStatus: {
        fontSize: 18,
        marginLeft: 15
    },
    bold: {
        fontWeight: '400',
    },
    nonProduct: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        fontSize: 25,
        textAlign: 'center',
        color: '#000',
        marginLeft:20,
        marginRight:20
    }
})