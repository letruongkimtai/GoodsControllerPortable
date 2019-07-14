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
    Alert
} from 'react-native';
import { Icon } from 'native-base'
import { styles } from '../../styling/styles';
import { Button } from 'native-base';
import * as Storage from '../../common/Storage';
import * as Key from '../../common/StorageKey'
import { BackgroundColor } from '../../styling/colors';
import * as OrderAction from '../../api/order.api'

export default class ConfigNConfirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taken: 0,
            productsList: [],
            user: {},
            update: false
        }
    }

    async componentDidMount() {
        const list = this.props.navigation.getParam('productsList');
        const data = await Storage.getData(Key.UserData);
        this.setState({
            productsList: list,
            user: data,
        })
        console.log(list)
    }

    handleOrderPress() {
        Alert.alert('Thông báo', 'Bạn đã kiểm tra đơn hàng kỹ chưa vì đơn hàng này sẽ gửi lên kho tổng', [
            { text: 'Hủy', style: 'cancel' },
            { text: 'Gửi', onPress: () => this.handleOkPress() }
        ], { cancelable: true })
    }

    handleOkPress() {
        const { productsList, user } = this.state;
        OrderAction.createOrder(false, user.user_id).then(res => {
            productsList.map((value) => {
                OrderAction.pushOrder(res, value.product_id, value.order_amount).then(res => {
                    console.log('Successfully pushing product..!!')
                    this.props.navigation.navigate('Success', { order_id: value.product_id })
                }).catch(err => {
                    console.log(err);
                })
            })
        }).catch(err => {
            console.log(err);
        })
    }

    handleBackPress() {
        this.props.navigation.goBack();
    }

    async handleItemDeletePress(index) {
        const { productsList } = this.state;
        await productsList.splice(index);
        if (productsList.length == 0) this.props.navigation.navigate('AddOrder', { reset: "yes" })
        else {
            this.setState({
                update: true,
            })
        }
    }
    
    handleOrderDeletePress(){
        const { productsList } = this.state;
        this.props.navigation.navigate('AddOrder', { reset: "yes" })
        productsList.length = 0;
    }

    render() {
        const { productsList, user } = this.state
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                <View style={confirm.productsList}>
                    <View style={confirm.listHeader}>
                        <Text style={confirm.listTitle}>Danh sách sản phẩm</Text>
                    </View>
                    <View style={confirm.listButton}>
                        <Button style={{ marginRight: 7 }} small danger iconLeft onPress={()=>this.handleOrderDeletePress()}>
                            <Text style={confirm.nonIconButtonTitle}>Hủy đơn hàng</Text>
                            <Icon style={{ color: 'white' }} type='FontAwesome5' name='exclamation-triangle' />
                        </Button>
                        <Button success small>
                            <Icon style={{ color: 'white' }} type='FontAwesome5' name='undo' />
                        </Button>
                    </View>

                    <View style={confirm.listBody}>
                        <View style={confirm.listHeaderTitle}>
                            <View style={[confirm.productName, confirm.seperateLine]}>
                                <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Tên sản phẩm</Text>
                            </View>
                            <View style={[confirm.productAmount, confirm.seperateLine]}>
                                <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Số lượng</Text>
                            </View>
                            <View style={confirm.blank}>
                            </View>
                        </View>
                        <View style={confirm.list}>
                            <ScrollView>
                                <FlatList
                                    data={productsList}
                                    keyExtractor={(item, index) => index.toString()}
                                    extraData={this.state}
                                    renderItem={({ item,index }) =>
                                        <View style={confirm.itemCard}>
                                            <View style={[confirm.productName]}>
                                                <Text style={{ fontSize: 16, color: 'black', }}>{item.product_name}</Text>
                                            </View>
                                            <View style={[confirm.productAmount]}>
                                                <Text style={{ fontSize: 16, color: 'black', }}>{item.order_amount}</Text>
                                            </View>
                                            <TouchableOpacity onPress={() => this.handleItemDeletePress(index)} style={[confirm.deleteButton, BackgroundColor.danger]}>
                                                <Icon style={{ color: 'white' }} type='FontAwesome5' name='trash' />
                                            </TouchableOpacity>
                                        </View>
                                    }
                                />
                            </ScrollView>
                        </View>
                    </View>

                </View>
                <View style={confirm.user}>
                    <View style={confirm.userHeader}>
                        <Text style={confirm.headerTitle}>Thông tin người đặt</Text>
                    </View>
                    <View style={confirm.userBody}>
                        <View style={confirm.userImage}>
                            <Image source={require('../../assets/images/Webp.net-resizeimage.png')} />
                        </View>
                        <View style={confirm.userInfo}>
                            <Text style={confirm.info}>Họ tên:  {user.given_name}</Text>
                            <Text style={confirm.info}>SĐT:  {user.tel}</Text>
                            <Text style={confirm.info}>Chức vụ:  {user.department}</Text>
                            <Text style={confirm.info}>Chi nhánh:  Coop mart Đỗ Văn Dậy</Text>
                        </View>
                    </View>
                </View>
                <View style={confirm.buttonHolder}>

                    <Button block iconLeft large style={BackgroundColor.success}
                        onPress={() => this.handleOrderPress()}>
                        <Text style={confirm.bottomButtonTitle}>Đặt hàng</Text>
                        <Icon style={{ color: 'white' }} type='FontAwesome5' name='check' />
                    </Button>

                    <Button block iconLeft large warning style={confirm.spaceBetween}
                        onPress={() => this.handleBackPress()}>
                        <Text style={confirm.nonIconButtonTitle}>Quay lại</Text>
                    </Button>

                </View>
            </ImageBackground>
        );
    }
}

const confirm = StyleSheet.create({
    productsList: {
        flex: 2,
    },
    buttonHolder: {
        flex: 1,
        width: "95%",
        marginLeft: 9,
        marginTop: 10
    },
    listHeader: {
        flex: 1,
    },
    listButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: -20,
        marginRight: 10,
    },
    listBody: {
        flex: 4,
        backgroundColor: '#DEDEDE',
        shadowColor: '#000000', //Set color
        width: "95%",
        marginLeft: 8,
        shadowOffset: {
            width: 0,     //Set width and height for shadow
            height: 5
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 1.0, //Set Opacity
        elevation: 3, // Set elevation - A must have for android 5+,
    },
    listTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: '500',
        marginLeft: 5,
        marginTop: 20,
        marginBottom: 10,
    },
    amountCounter: {
        flex: 1,
        flexDirection: 'row',
    },
    quantitytButton: {
        height: 40,
        width: 50,
    },
    productQuantity: {
        fontSize: 20,
        color: 'black',
        fontWeight: '400',
        marginTop: 5,
        marginRight: 15,
        marginLeft: 15,
    },
    bottomButtonTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
        marginLeft: 38,
    },
    spaceBetween: {
        marginTop: 10,
    },
    nonIconButtonTitle: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
    },
    listHeaderTitle: {
        flex: 1,
        flexDirection: 'row',
        height: 40,
        marginBottom: 8,
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
    },
    list: {
        flex: 3
    },
    productName: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    productAmount: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blank: {
        flex: 1
    },
    seperateLine: {
        borderRightColor: 'gray',
        borderRightWidth: 1,
    },
    itemCard: {
        flex: 1,
        flexDirection: 'row',
        height: 60,
        marginBottom: 5,
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
            width: 2,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
    },
    deleteButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    user: {
        flex: 1,
        backgroundColor: 'white',
        shadowColor: '#000000', //Set color
        width: "95%",
        marginLeft: 8,
        marginTop: 20,
        shadowOffset: {
            width: 0,     //Set width and height for shadow
            height: 5
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 1.0, //Set Opacity
        elevation: 3, // Set elevation - A must have for android 5+,
    }, userHeader: {
        flex: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        width: "80%",
        marginLeft: 33,
    },
    headerTitle: {
        color: 'black',
        fontFamily: 'open sans',
        fontWeight: '400',
        fontSize: 19,
        marginTop: 5,
        textAlign: 'center',
    },
    userBody: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5,
    },
    userImage: {
        flex: 1,
    },
    userInfo: {
        flex: 2,
        justifyContent: 'flex-start',
    },
    info: {
        fontSize: 17,
        color: 'black',
        textAlign: 'justify',
    },
})