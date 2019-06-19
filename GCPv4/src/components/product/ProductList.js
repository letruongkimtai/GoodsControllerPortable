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
    RefreshControl ,
    Picker
} from 'react-native';
import { styles } from '../../styling/styles';
import ActionButton from 'react-native-action-button';
import * as Action from '../../api/product.api'
import { textColor } from '../../styling/colors';
import { Button } from 'native-base';

export default class ProductList extends Component {
    constructor(props) {
        super(props),
        this.state = {
            product: [],
            loading: true,
            status: '',
            refreshing:false,
        }
    }
    
    async productList(){
        return await Action.showProducts().then(res=>{
            console.log(res);
            this.setState({
                product:res
            })
            return res;
        }).then(err=>{
            console.log(err)
        })
    }

    async componentDidMount() {

        this.productList();

        this.setState({
            loading: false,
        })
    }

    handleItemTouch(id) {
        this.props.navigation.navigate('ProductDetail', { product_id: id })
        console.log(id)
    }

     _onRefresh(){
         console.log('pulled');
         this.setState({refreshing: true});
         this.productList.then(() => {
          this.setState({refreshing: false});
        });
      }

    render() {
        if (this.state.loading == true) {
            return (
                <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                    <View style={list.loading}>
                        <Text style={{ fontSize: 25, color: 'white' }}>Just a sec</Text>
                    </View>
                </ImageBackground>
            )
        } else {
            return (
                <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                    <View style={list.filter}>
                        <Button onPress={()=>this.productList()}>
                            <Text>refresh</Text>
                        </Button>
                    </View>
                    <View style={list.list}>
                        <ScrollView>
                            <FlatList
                                data={this.state.product}
                                keyExtractor={(item,index) => index.toString()}
                                extraData={this.state.product}
                                renderItem={({ item }) =>
                                    <TouchableOpacity
                                        style={list.itemCard}
                                        onPress={() => this.handleItemTouch(item.product_id)}>
                                        <View style={list.productImage}>
                                            <Image source={require('../../assets/images/logo_small.png')} />
                                        </View>
                                        <View style={list.productInfo}>

                                            <View style={list.productCardHeader}>
                                                <Text style={list.product_name}>{item.product_name}</Text>
                                            </View>

                                            <View style={list.productCardBody}>
                                                <Text style={list.productAmount}>Số lượng: {item.amount}</Text>
                                                <Text style={[list.productStatus, textColor.black]}>{item.area}</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                }
                               
                            />

                        </ScrollView>
                        <ActionButton buttonColor='#21C184' onPress={() => this.props.navigation.navigate('ProductModal')}></ActionButton>
                    </View>
                </ImageBackground>
            );
        }
    }
}

const list = StyleSheet.create({
    filter: {
        flex: 1,
        alignSelf:'center',
        alignItems:'center',
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
        alignItems: 'center',
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
        marginBottom:20
    },
    productAmount: {
        color: 'black',
        fontSize: 18,
    },
    productStatus: {
        fontSize: 18,
        marginTop: 5,
    },
})
