import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Picker,
} from 'react-native';
import { styles } from '../../styling/styles';
import { textColor, BackgroundColor } from '../../styling/colors';
import { Dropdown } from 'react-native-material-dropdown';
import * as Action from '../../api/product.api'

export default class AddProductForm extends Component {

    constructor(props) {
        super(props),
            this.state = {
                loading: true,
                brandData:[],
                typeData:[],
                prName:'',
                area:'',
                amount:0,
                brand:0,
                type:0,
            }
    }
    //=======================================function=========================================//
    async getBrands() {
        const brand = await Action.getBrand();
        return brand;
    }

    async getType() {
        const type = await Action.getType();
        return type;
    }

    addProduct(){
        const {prName,area,amount,brand,type} = this.state;
        return Action.addProduct(prName,area,amount,brand,type).then(res=>{
            console.log('=================result in render===================');
            console.log(res);
            console.log('====================================================');
        })
    }
    //============================================================================//

    async componentDidMount() {
        let brandData = await this.getBrands();
        console.log('================result in render====================');
        console.log(brandData);

        let typeData = await this.getType();
        console.log('================result in render====================');
        console.log(typeData);

        await this.setState({
            brandData: brandData,
            typeData: typeData,
            loading: false
        })
        //this.setState({  })
    }
    render() {
        console.log(this.state.brand);
        if (this.state.loading) {
            return (
                <View>
                    <Text>
                        Just a sec
                    </Text>
                </View>
            )
        } else {
            return (
                <View style={styles.modalBody}>
                    <View style={styles.modalForm}>
                        <TextInput style={styles.infoInput}
                            placeholder='Tên sản phẩm'
                            placeholderTextColor='black'
                            onChangeText={(name)=>{this.setState({prName:(name)})}} />

                        <TextInput style={styles.infoInput}
                            placeholder='Kho chứa'
                            placeholderTextColor='black'
                            onChangeText={(area)=>{this.setState({area:(area)})}} />

                        <TextInput style={[styles.infoInput, styles.amount]}
                            placeholder='Số lượng'
                            placeholderTextColor='black'
                            keyboardType={'numeric'}
                            onChangeText={(amount)=>{this.setState({amount:(amount)})}} />

                        <Picker style={{marginTop:10}}
                            onValueChange={(itemValue,itemPosition)=>{this.setState({brand:itemPosition.brand_name})}}>
                            {this.state.brandData.map(
                                (item) => {
                                    return (
                                        <Picker.Item key={item.brand_id} label={item.brand_name} value={item.brand_id} />
                                    )
                                }
                            )}
                        </Picker>
                        <Picker style={{marginTop:10}}
                            onValueChange={(value)=>{this.setState({type:value})}}>
                            {this.state.typeData.map(
                                (item) => {
                                    return (
                                        <Picker.Item key={item.type_id} label={item.type_name} value={item.type_id} />
                                    )
                                }
                            )}
                        </Picker>
                    </View>
                    <View style={styles.modalButton}>
                        <TouchableOpacity 
                            style={[styles.button, BackgroundColor.success]}
                            onPress={()=>this.addProduct()}>
                            <Text style={[styles.buttonTitle, textColor.white]}>
                                Thêm sản phẩm
                    </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, BackgroundColor.danger]}>
                            <Text style={[styles.buttonTitle, textColor.white]}>
                                Quay lại
                    </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }

    }
}