import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    TouchableOpacity,
    Image,
    Text,
    FlatList,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import * as Action from '../../api/product.api'
import { styles } from '../../styling/styles';
import { textColor } from '../../styling/colors';

export default class ProductCard extends Component {
    constructor(props) {
        super(props),
            this.state = {
                product: [],
                loading: true,
                status:''
            }
    }
    async getProducts() {
        const products = Action.showProducts();
        return products;
    }

    async componentDidMount() {
        let productsData = await this.getProducts();
        console.log(productsData);

        this.setState({
            loading: false,
            product: productsData
        })
    }

    async getStatus(index) {
        const status = '';
        this.state.product.map((v, i) => {
            if (index === i) {
                if (v.amount < 10){
                    this.setState({
                        status : 'Gần hết hàng'
                    })
                    //return (<Text style={[list.productStatus,textColor.warning]}>{status}</Text>)
                }
                else if (v.amount === 0) {
                    this.setState({
                        status : 'Hết hàng'
                    })
                    //return(<Text style={[list.productStatus,textColor.danger]}>{status}</Text>)
                }
                else{
                    this.setState({
                        status : 'Còn hàng'
                    })
                    //return(<Text style={[list.productStatus,textColor.success]}>{status}</Text>)
                }
            }
        })
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={list.loading}>
                    <Text style={{ fontSize: 25, color: 'white' }}>Just a sec</Text>
                </View>
            )
        } else {
            return (
                <View style={list.list}>
                    <ScrollView>
                        <FlatList
                            data={this.state.product}
                            keyExtractor={(item, index) => item.product_id}
                            renderItem={({ item ,index}) =>
                                <TouchableOpacity style={list.itemCard}>
                                    <View style={list.productImage}>
                                        <Image source={require('../../assets/images/logo_small.png')} />
                                    </View>
                                    <View style={list.productInfo}>

                                        <View style={list.productCardHeader}>
                                            <Text style={list.product_name}>{item.product_name}</Text>
                                        </View>

                                        <View style={list.productCardBody}>
                                            <Text style={list.productAmount}>Số lượng: {item.amount}</Text>
                                            <Text style={[list.productStatus]}>Trạng thái: Còn hàng</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            }
                        />

                    </ScrollView>
                    <ActionButton buttonColor='#21C184' onPress={() => this.props.nav.navigate('ProductModal')}></ActionButton>
                </View>
            );
        }

    }
}

const list = StyleSheet.create({
    list: {
        flex: 4,
        width: "94%",
        height: "100%",
        marginLeft: 10,
    },
    loading: {
        flex: 4,
        alignItems: 'center',
    },
    itemCard: {
        width: "90%",
        height: 100,
        backgroundColor: 'white',
        marginLeft: 17,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
        flex: 1,
    },
    productImage: {
        flex: 1,
        alignSelf: 'center',
        alignItems:'center'
    },
    productInfo: {
        flex: 2,
    },
    productCardHeader: {
        flex: 1,
    },
    productCardBody: {
        flex: 2,
        alignContent: 'center',
    },
    product_name: {
        color: 'black',
        fontSize: 20,
        fontWeight: '400',
        marginLeft: 20,
    },
    productAmount: {
        color: 'black',
        fontSize: 18,
    },
    productStatus: {
        fontSize: 18,
        marginTop: 5,
    }
})
