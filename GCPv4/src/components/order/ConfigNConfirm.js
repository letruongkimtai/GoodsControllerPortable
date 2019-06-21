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

export default class ConfigNConfirm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            taken: 0,
            productsList:[],
        }
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



    async componentDidMount(){
        const list = this.props.navigation.getParam('productsList')
        this.setState({
            productsList: list,
        })
        console.log(list)
    }

    render() {
        return (
            <View style={confirm.amountCounter}>
                <Button transparent style={confirm.quantitytButton} onPress={() => this.addPressCounter()}>
                    <Icon style={{ marginRight: 15, color: 'black' }} type='FontAwesome5' name='plus' />
                </Button>

                <Text style={confirm.productQuantity}>{this.state.taken}</Text>

                <Button transparent style={confirm.quantitytButton} onPress={() => this.minusPressCounter()}>
                    <Icon style={{ marginLeft: 15, color: 'black' }} type='FontAwesome5' name='minus' />
                </Button>
            </View>
        );
    }
}

const confirm = StyleSheet.create({
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
})