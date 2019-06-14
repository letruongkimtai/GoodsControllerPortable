import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Text,
} from 'react-native';
import {
    
} from 'native-base';

export default class ProductDetails extends Component {
    static navigationOptions={
        headerStyle:{
            backgroundColor:'#095FC8'
        }
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/images/background.png')}>
                <Text>Chi tiết sản phẩm</Text>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        height: '100%',
    }
});