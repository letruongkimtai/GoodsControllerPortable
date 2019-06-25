import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import {
    Icon,
    Button,
} from 'native-base';


export default class UnconfirmedOrders extends Component {

    render() {
        return (
            <View style={styles.ordersBackground}>
                <ScrollView>
                    <View style={styles.ordersHolder}>
                        <View style={styles.titleSection}>
                            <Text style={styles.title}>HOC1456107</Text>
                            <Text style={styles.status}>Đang giao hàng</Text>
                        </View>
                        <View style={styles.navigateButton}>
                            <Button transparent style={styles.navigateImg} onPress={() => this.props.navigation.navigate('DeliveryDetail')}>
                                <Image source={require('../../assets/images/navigateButton.png')} />
                            </Button>
                        </View>
                    </View>
                    <View style={styles.ordersHolder}>
                        <View style={styles.titleSection}>
                            <Text style={styles.title}>HOC1456107</Text>
                            <Text style={styles.status}>Đang giao hàng</Text>
                        </View>
                        <View style={styles.navigateButton}>
                            <Button transparent style={styles.navigateImg} onPress={() => this.props.navigation.navigate('DeliveryDetail')}>
                                <Image source={require('../../assets/images/navigateButton.png')} />
                            </Button>
                        </View>
                    </View>
                    <View style={styles.ordersHolder}>
                        <View style={styles.titleSection}>
                            <Text style={styles.title}>HOC1456107</Text>
                            <Text style={styles.status}>Đang giao hàng</Text>
                        </View>
                        <View style={styles.navigateButton}>
                            <Button transparent style={styles.navigateImg} onPress={() => this.props.navigation.navigate('DeliveryDetail')}>
                                <Image source={require('../../assets/images/navigateButton.png')} />
                            </Button>
                        </View>
                    </View>
                    <View style={styles.ordersHolder}>
                        <View style={styles.titleSection}>
                            <Text style={styles.title}>HOC1456107</Text>
                            <Text style={styles.status}>Đang giao hàng</Text>
                        </View>
                        <View style={styles.navigateButton}>
                            <Button transparent style={styles.navigateImg} onPress={() => this.props.navigation.navigate('DeliveryDetail')}>
                                <Image source={require('../../assets/images/navigateButton.png')} />
                            </Button>
                        </View>
                    </View>
                    <View style={styles.ordersHolder}>
                        <View style={styles.titleSection}>
                            <Text style={styles.title}>HOC1456107</Text>
                            <Text style={styles.status}>Đang giao hàng</Text>
                        </View>
                        <View style={styles.navigateButton}>
                            <Button transparent style={styles.navigateImg} onPress={() => this.props.navigation.navigate('DeliveryDetail')}>
                                <Image source={require('../../assets/images/navigateButton.png')} />
                            </Button>
                        </View>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    ordersBackground: {
        flex: 2,
        backgroundColor: '#5CCC8B',
        width: 315,
        height: 300,
        marginLeft: 25,
        shadowColor: '#000000', //Set color
        shadowOffset: {
            width: 3,     //Set width and height for shadow
            height: 3
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 1.0, //Set Opacity
        elevation:5, // Set elevation - A must have for android 5+
    },
    ordersHolder: {
        flex: 1,
        width: 270,
        height: 70,
        marginLeft: 25,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#EBEBEB',
        flexDirection: 'row',
        shadowColor: '#000000', //Set color
        shadowOffset: {
            width: 2,     //Set width and height for shadow
            height: 3
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 0.7, //Set Opacity
        elevation:3, // Set elevation - A must have for android 5+
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
        alignItems: 'center',
        justifyContent:'center',
    },
    navigateImg: {
        alignSelf: 'center',
    }
})