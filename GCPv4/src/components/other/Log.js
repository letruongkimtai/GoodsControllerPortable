import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    ScrollView,
    FlatList,
} from 'react-native';
import { styles } from '../../styling/styles'
import * as action from '../../api/log.api'

export default class Log extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            logs: [],
            refreshing:false,
        }
    }

    async getLogs() {
        return await action.getLog().then(value => {
            this.setState({
                logs: value,
                refreshing:false
            })
        })
    }

    async componentWillMount() {
        this.getLogs();
    }

    _onRefresh(){
        this.setState({
            refreshing:true
        })
        this.getLogs();
    }

    render() {
        const { logs,refreshing } = this.state
        console.log(this.state.logs)
        return (
            <ScrollView style={{ backgroundColor: '#e2e2e2', flex: 1 }}>
                <FlatList
                    data={logs}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={refreshing}
                    onRefresh={()=>this._onRefresh()}
                    extraData={this.state}
                    renderItem={({item}) => 
                        <View style={log.container}>
                            <View style={log.contentContainer}>
                                <Text style={log.content}>{item.user} đã lấy {item.amount} {item.product_name}</Text>
                            </View>
                            <View style={log.createDateContainer}>
                                <Text style={log.date}>{item.created.toString().substring(0,10)}</Text>
                            </View>
                        </View>
                    }
                />
            </ScrollView>
        );
    }
}

const log = StyleSheet.create({
    container: {
        height: 80,
        width: "100%",
        marginBottom: "1%",
        marginTop: "3%",
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 3
        },
        shadowRadius: 3,
        shadowOpacity: 0.5,
        elevation: 5,
        flex: 1
    },
    contentContainer: {
        flex: 2,
        textAlign: 'left',
        marginLeft: '1%'
    },
    createDateContainer: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: "1%"
    },
    content: {
        fontSize: 18,
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: 'black'
    },
    date: {
        fontSize: 16,
        fontFamily: 'Muli',
        fontStyle: 'italic',
        fontWeight: 'normal',
        color: 'black'
    }
})
