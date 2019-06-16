import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { styles } from '../../styling/styles';
import { textColor, BackgroundColor } from '../../styling/colors';
import { Dropdown } from 'react-native-material-dropdown';
import AddProductForm from './AddProductForm';



export default class AddProduct extends Component {
    render() {
        return (
            <View style={styles.modalContainer}>
                <View style={styles.modalHeader}>
                    <Text style={[styles.headerTitle,textColor.black]}>
                        Thêm sản phẩm mới
                    </Text>
                </View>
                <AddProductForm/>
            </View>
        );
    }
}