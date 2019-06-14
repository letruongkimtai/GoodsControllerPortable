import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    Icon,
    Button,
} from 'native-base';


export default class UnconfirmedOrders extends Component {
   
    render() {
        return (
            <View style={styles.ordersBackground}>
                <View style={styles.ordersHolder}>
                    <View style={styles.titleSection}>
                        <Text style={styles.title}>HOC1456107</Text>
                        <Text style={styles.status}>Đang giao hàng</Text>
                    </View>
                    <View style={styles.navigateButton}>
                        <Button transparent style={styles.navigateImg} onPress={()=>this.props.navigation.navigate('DeliveryDetail')}>
                            <Image source={require('../../assets/images/navigateButton.png')}/>
                        </Button>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    ordersBackground: {
        flex: 2,
        backgroundColor: '#5CCC8B',
        width: 315,
        height: '100%',
        marginLeft: 25,
    },
    ordersHolder: {
        flex: 1,
        width: 270,
        height: 40,
        marginLeft: 25,
        marginTop: 23,
        marginBottom: 23,
        backgroundColor: '#EBEBEB',
        flexDirection: 'row',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: "OpenSans",
        color: "black",
        marginTop: 5,
        marginLeft: 10,
    },
    status: {
        marginTop: 5,
        textAlign: 'center',
        borderTopWidth: 1,
        color: '#FF9900',
    },
    titleSection: {
        flex: 3,
        marginLeft: 15,
        marginRight: 15,
    },
    navigateButton: {
        flex: 1,
        borderLeftWidth: 1,
    },
    navigateImg: {
        alignSelf: 'center',
        marginTop: 8,
    }
})