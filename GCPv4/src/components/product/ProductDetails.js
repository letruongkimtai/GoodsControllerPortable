import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
    Button,
    TouchableOpacity,
    Image,
    TextInput,
    ToastAndroid
} from 'react-native';
import * as Action from '../../api/product.api'
import { styles } from '../../styling/styles';


export default class ProductDetails extends Component {
    constructor(props) {
        super(props),
            this.state = {
                data: {},
                taken: 0,
                status: ''
            }
    }


    async getProductInfo() {
        const id = await this.props.navigation.getParam('product_id');
        console.log(id)
        return await Action.productById(id).then(res => {
            this.setState({
                data: res
            })
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    async getStatus() {
        const { data } = this.state;
        if (data.amount > 0) await this.setState({ status: 'Còn hàng' })
        else await this.setState({ status: 'Hết hàng' })
    }

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

    handleTakePress(id, taken) {
        if (taken != 0) {
            const { data } = this.state
            const updatedAmount = data.amount - taken
            return Action.takeProduct(id, updatedAmount).then(res => {
                console.log(res);
                ToastAndroid.show('Lấy hàng thành công', 2)
                this.getProductInfo();
            }).catch(err => {
                console.log(err)
            })
        } else {
            alert('Hàng lấy phải lớn hơn 0..!!');
        }
    }

    async componentDidMount() {
        await this.getProductInfo();
        await this.getStatus()
    }

    render() {
        const { data, taken, status } = this.state;
        console.log('đã lấy ' + taken)
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                <View style={detail.product}>
                    <View style={detail.info}>
                        <View style={detail.productImage}>
                            <Image source={require('../../assets/images/logo_small.png')} />
                        </View>
                        <View style={detail.productInfo}>
                            <Text style={detail.productName}>{data.product_name}</Text>
                            <Text style={detail.productStatus}>Tồn kho: {data.amount}</Text>
                            <Text style={detail.productStatus}>Vị trí: {data.storage.name}</Text>
                            <Text style={detail.productStatus}>Trạng thái: {status}</Text>
                        </View>
                    </View>

                    <Text style={{fontSize:19,color:'black',marginBottom:8}}>Lấy hàng</Text>
                    <View style={detail.getProduct}>
                        
                        <TouchableOpacity 
                            style={detail.minus}
                            onPress={()=>this.minusPressCounter()}>
                            <Text style={detail.title}>-</Text>
                        </TouchableOpacity>

                        <View style={detail.amountTaken}>
                            <Text style={{fontSize:19,marginTop:8,textAlign:'center',color:'black'}}>{taken}</Text>
                        </View>

                        <TouchableOpacity 
                            style={detail.plus} 
                            onPress={()=>this.addPressCounter()}>
                            <Text style={detail.title}>+</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={detail.confirmButton}
                            onPress={()=>this.handleTakePress(data.product_id,taken)}>
                            <Text style={detail.title}>Lấy hàng</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={detail.productBottom}>
                        <Text style={detail.productId}>{data.product_id}</Text>
                    </View>
                </View>
                <View style={detail.nearby}>
                    <Text style={detail.nearbyTitle}></Text>
                </View>
            </ImageBackground>
        );
    }
}
const detail = StyleSheet.create({
    product: {
        flex: 3,
        width: '94%',
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: '#EBEBEB',
        borderRadius: 4,
    },
    nearby: {
        flex: 2,
        width: '94%',
        marginLeft: 10,
        marginTop: 20,
    },
    info: {
        flex: 3,
        flexDirection: 'row',
    },
    getProduct: {
        flex: 2,
        flexDirection: 'row',
    },
    productBottom: {
        flex: 1
    },
    productImage: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        height: "70%",
        borderRightWidth: 0.5,
        borderBottomWidth: 1,
        borderColor: '#B9B9B9',
    },
    productInfo: {
        flex: 2,
    },
    productName: {
        fontSize: 23,
        color: 'black',
        textAlign: 'center',
        fontWeight: '500',
        fontFamily: 'open sans',
        marginBottom:10,
    }, 
    productId: {
        marginBottom: 7,
        marginTop: 8,
        marginLeft: 5,
        fontSize: 19,
        textAlign: 'center',
        color: 'black',
    },
    productStatus: {
        marginTop: 8,
        marginLeft: 5,
        fontSize: 18,
        color: 'black',
    },
    minus: {
        flex: 1,
        height:"40%",
        borderRadius:4,
        marginRight: 3,
        backgroundColor:'#DAAB6C'
    },
    amountTaken: {
        flex: 2,
        height:"40%",
        borderWidth:0.8,
        borderRadius:3,
        backgroundColor:'white'
    },
    plus: {
        flex: 1,
        height:"40%",
        borderRadius:4,
        marginLeft:3,
        backgroundColor:'#DAAB6C'
    },
    confirmButton: {
        flex: 2,
        height:"40%",
        marginLeft:4,
        marginRight:4,
        backgroundColor:'#0CA60C'
        ,borderRadius:4
    },
    title:{
        fontSize:18,
        color:'white',
        textAlign:'center',
        marginTop:8
    }

})