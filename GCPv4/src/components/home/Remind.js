import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import {

} from 'native-base';

export default class Remind extends Component {
    render() {
        return (
            <View style={styles.remindContainer}>
                <View style={styles.remindsHeader}>
                    <Text style={styles.remindTilte}>Nhắc nhở</Text>
                </View>
                <View style={styles.remindContent}>
                    <Text>Remind</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    remindContainer: {
        flex: 2,
        width: 315,
        height: 80,
        backgroundColor: '#FBFBA5',
        marginTop: 20,
        marginLeft: 25,
    },
    remindsHeader: {
        flex: 1,
        backgroundColor: '#EBEBEB',
        flexDirection: 'row',
    },
    remindContent: {
        flex: 3,
    },
    remindTilte:{
        flex:1,
        textAlign:"center",
        marginTop:3,
        fontWeight:'600',
        color:"black",
    }
})