import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
} from 'react-native';
import ActionButton from 'react-native-action-button';

export default class Home extends Component {
    render() {
        // function handleAddPress(){
        //     this.props.navigation.navigate('Products');
        // }
        return (
            <ImageBackground style={styles.container} source={require('../../../assets/images/background.png')}>
                <View style={styles.header}>
                    <Text>Menu</Text>
                </View>
                <View style={styles.reminds}>
                    <View style={styles.remindsHeader}></View>
                    <View style={styles.remindContent}>
                        <Text>Remind</Text>
                    </View>
                </View>
                <View style={styles.unconfirmedOrders}>
                    <Text>unconfirmedOrders</Text>
                </View>
                <View style={styles.outOfStock}>
                    <Text>outOfStock</Text>
                </View>
                <ActionButton buttonColor='#21C184' onPress={() => this.props.navigation.navigate('Product')}>
                </ActionButton>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    header: {
        flex: 1,
        backgroundColor: '#095FC8',
    },
    reminds: {
        flex: 2,
        width: 315,
        height: 50,
        backgroundColor: '#FBFBA5',
        marginTop: 50,
        marginLeft: 25,
    },
    unconfirmedOrders: {
        flex: 2,
        backgroundColor: '#5CCC8B',
        width: 315,
        height: 50,
        marginTop: 50,
        marginLeft: 25,
    },
    outOfStock: {
        flex: 4,
        backgroundColor: '#EBEBEB',
        marginTop: 50,
        marginLeft: 25,
        width: 315,
        borderRadius: 10,
    },
    remindsHeader: {
        flex: 1,
        backgroundColor: '#EBEBEB',
    },
    remindContent: {
        flex: 3,
    },
});