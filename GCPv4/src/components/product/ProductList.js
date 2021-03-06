import React, { Component } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    Text,
    FlatList,
    RefreshControl,
    Picker,
    TextInput
} from 'react-native';
import { styles } from '../../styling/styles';
import ActionButton from 'react-native-action-button';
import * as Action from '../../api/product.api'
import { textColor } from '../../styling/colors';
import { Button, Icon } from 'native-base';

export default class ProductList extends Component {
    constructor(props) {
        super(props),
            this.state = {
                product: [],
                loading: true,
                status: '',
                refreshing: false,
                update: false,
            }
    }

    async productList() {
        return await Action.showProducts().then(res => {
            console.log(res);
            this.setState({
                product: res,
                refreshing: false
            })
            return res;
        }).then(err => {
            console.log(err)
        })
    }

    async componentDidMount() {
        const update = this.props.navigation.getParam('update')
        if (update != null) {
            this.productList();
        } else {
            await this.setState({
                refreshing: true,
            })
            this.productList();

            this.setState({
                loading: false,
            })
        }

    }

    handleItemTouch(id) {
        this.props.navigation.navigate('ProductDetail', { product_id: id })
        console.log(id)
    }

    _refresh = () => {
        this.setState({refreshing: true});
        this.productList();
      }

    render() {
        const { refreshing } = this.state
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                <ScrollView>
                    <View style={list.filter}>
                        <View style={list.searchBox}>
                            <View style={list.searchInput}>
                                <TextInput
                                    style={list.textInput}
                                    placeholder='Bạn cần tìm gì...'
                                    placeholderTextColor='gray' />
                            </View>
                            <View style={list.searchButton}>
                                <Button transparent icon>
                                    <Icon style={{ color: '#000' }} type='FontAwesome5' name='search' />
                                </Button>
                            </View>
                        </View>
                        <View style={list.filter}>
                        </View>
                    </View>
                    <View style={list.list}>
                        <ScrollView>
                            <FlatList
                                data={this.state.product}
                                keyExtractor={(item, index) => index.toString()}
                                refreshing={refreshing}
                                onRefresh={() => this._refresh() }
                                extraData={this.state}
                                renderItem={({ item }) =>
                                    <TouchableOpacity
                                        style={list.itemCard}
                                        onPress={() => this.handleItemTouch(item.product_id)}>
                                        <View style={list.productImage}>
                                            <Image style={{ marginTop: 15 }} source={require('../../assets/images/logo_small.png')} />
                                        </View>
                                        <View style={list.productInfo}>

                                            <View style={list.productCardHeader}>
                                                <Text style={list.product_name}>{item.product_name}</Text>
                                            </View>

                                            <View style={list.productCardBody}>
                                                <Text style={list.productAmount}>Số lượng: {item.amount}</Text>
                                                <Text style={[list.productStatus, textColor.black]}>{item.storage.name}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                        </ScrollView>
                    </View>
                </ScrollView>
                <ActionButton buttonColor='#21C184' onPress={() => this.props.navigation.navigate('ProductModal')}></ActionButton>
            </ImageBackground>
        );
    }
}

const list = StyleSheet.create({
    filter: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
    },
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
        height: 110,
        backgroundColor: 'white',
        marginLeft: 17,
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
    searchBox: {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        elevation: 5,
        flexDirection: 'row',
    },
    filter: {
        flex: 1,
    },
    searchInput: {
        flex: 3,
        height: 40,
        width: "100%",
        borderColor: '#d4d6d9',
        borderBottomWidth: 1.5,
        borderRightWidth: 1.5,
        marginTop: 12,
    },
    searchButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
    },
    textInput: {
        height: "100%",
        width: "100%",
        fontSize: 17,
    }
})
