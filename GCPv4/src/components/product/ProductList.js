import React, {Component} from 'react';
import {
    ImageBackground,
    StyleSheet,
} from 'react-native';
import {
    Button,
    Text,
} from 'native-base';
import ActionButton from 'react-native-action-button';

export default class ProductList extends Component {
    render() {
        return (
            <ImageBackground style={styles.container} source={require('../../assets/images/background.png')}>
                <Button success>
                    <Text>Chi tiết sản phẩm</Text>
                </Button>
                <ActionButton buttonColor='#21C184' onPress={()=>this.props.navigation.navigate('ProductModal')}></ActionButton>
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