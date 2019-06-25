import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
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
                    <ScrollView horizontal={true}>
                        <View style={{ width: 314, height: 150 }}>
                            <Text style={styles.content}>Trạng thái: Chưa trả hàng</Text>
                            <Text style={styles.content}>Chi nhánh: Coop mart hóc môn</Text>
                            <Text style={styles.content}>Ngày hẹn: 15/5</Text>
                        </View>
                        <View style={{ width: 314, height: 150 }}>
                            <Text style={styles.content}>Trạng thái: Chưa trả hàng</Text>
                            <Text style={styles.content}>Chi nhánh: Coop mart hóc môn</Text>
                            <Text style={styles.content}>Ngày hẹn: 15/5</Text>
                        </View>
                        <View style={{ width: 314, height: 150 }}>
                            <Text style={styles.content}>Trạng thái: Chưa trả hàng</Text>
                            <Text style={styles.content}>Chi nhánh: Coop mart hóc môn</Text>
                            <Text style={styles.content}>Ngày hẹn: 15/5</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    remindContainer: {
        flex: 2,
        width: 315,
        height: 150,
        backgroundColor: '#FBFBA5',
        marginTop: 20,
        marginLeft: 25,
    },
    remindsHeader: {
        flex: 1,
        backgroundColor: '#EBEBEB',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000000', //Set color
        shadowOffset: {
            width: 2,     //Set width and height for shadow
            height: 3
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 0.7, //Set Opacity
        elevation: 5, // Set elevation - A must have for android 5+
    },
    remindContent: {
        flex: 3,
    },
    remindTilte: {
        fontSize: 18,
        fontWeight: '500',
        color: "black",
    },
    content: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        fontSize: 18,
        color: 'black',
    }
})