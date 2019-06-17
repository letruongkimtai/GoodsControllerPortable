import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Picker,
    ToastAndroid,
    Alert,
} from 'react-native';
import { styles } from '../../styling/styles';
import { textColor, BackgroundColor } from '../../styling/colors';
import * as Action from '../../api/product.api'

export default class AddProductForm extends Component {

    constructor(props) {
        super(props),
            this.state = {
                loading: true,

                //loading lists
                brandData: [],
                typeData: [],

                //add info
                prName: '',
                area: '',
                amount: 0,
                brand_id: null,
                type_id: null,

                brand_label: 'Nhãn hàng',
                type_label: 'Loại hàng',
            }
    }

    async getBrands() {
        const brand = await Action.getBrand();
        return brand;
    };

    async getType() {
        const type = await Action.getType();
        return type;
    };

    brandPickerChange(index) {
        this.state.brandData.map((v, i) => {
            if (index === i) {
                this.setState({
                    brand_label: this.state.brandData[index].brand_name,
                    brand_id: this.state.brandData[index].brand_id
                })
            }
        })
    };

    typePickerChange(index) {
        this.state.typeData.map((v, i) => {
            if (index === i) {
                this.setState({
                    type_label: this.state.typeData[index].type_name,
                    type_id: this.state.typeData[index].type_id
                })
            }
        })
    };

    handleAddPress() {
        const { prName, area, amount, type_id, brand_id } = this.state;
        try {
            if (prName != null && area != null && amount != null && type_id != null && brand_id != null) {
                return Action.addProduct(prName, area, amount, type_id, brand_id).then(res => {
                    console.log(res);
                    ToastAndroid.show('Thêm sản phẩm thành công', 2);
                    this.props.nav.goBack();
                })
            } else {
                Alert.alert('Cảnh báo', 'Thông tin không được để trống')
            }
        } catch (err) {
            console.log(err)
        }
    };

    handleBackPress() {
        this.props.nav.goBack();
    }

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
    };

    render() {
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
                            onChangeText={(name) => { this.setState({ prName: (name) }) }} />

                        <TextInput style={styles.infoInput}
                            placeholder='Kho chứa'
                            placeholderTextColor='black'
                            onChangeText={(area) => { this.setState({ area: (area) }) }} />

                        <TextInput style={[styles.infoInput, styles.amount]}
                            placeholder='Số lượng'
                            placeholderTextColor='black'
                            keyboardType={'numeric'}
                            onChangeText={(amount) => { this.setState({ amount: (amount) }) }} />

                        <Picker
                            style={{ marginTop: 10 }}
                            onValueChange={(itemValue, itemIndex) => this.brandPickerChange(itemIndex)}
                            selectedValue={this.state.brand_label}>
                            {this.state.brandData.map(
                                (item) => {
                                    return (
                                        <Picker.Item key={item.brand_id} label={item.brand_name} value={item.brand_name} />
                                    )
                                }
                            )}
                        </Picker>

                        <Picker
                            style={{ marginTop: 10 }}
                            onValueChange={(itemValue, itemIndex) => this.typePickerChange(itemIndex)}
                            selectedValue={this.state.type_label}>
                            {this.state.typeData.map(
                                (item) => {
                                    return (
                                        <Picker.Item key={item.type_id} label={item.type_name} value={item.type_name} />
                                    )
                                }
                            )}
                        </Picker>
                    </View>

                    <View style={styles.modalButton}>
                        <TouchableOpacity
                            style={[styles.button, BackgroundColor.success]}
                            onPress={() => this.handleAddPress()}>
                            <Text style={[styles.buttonTitle, textColor.white]}>
                                Thêm sản phẩm
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={[styles.button, BackgroundColor.danger]}
                            onPress={()=>this.handleBackPress()}>
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