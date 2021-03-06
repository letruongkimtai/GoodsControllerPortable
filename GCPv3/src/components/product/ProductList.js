import React, {Component} from 'react';
import {
    ImageBackground,
    StyleSheet,
} from 'react-native';
import {
    Button,
    Text,
} from 'native-base';

export default class ProductList extends Component {
    static navigationOptions={
        headerStyle:{
            backgroundColor:'#095FC8'
        }
    }
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../../assets/images/background.png')}>
                <Button success onPress={()=>{this.props.navigation.navigate('ProductDetails')}}>
                    <Text>Chi tiết sản phẩm</Text>
                </Button>
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