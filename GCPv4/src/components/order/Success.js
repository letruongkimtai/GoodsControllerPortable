import React,{Component} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image
 } from 'react-native';
import { styles } from '../../styling/styles';
import { Button,Icon } from 'native-base';
import { BackgroundColor } from '../../styling/colors';

export default class Success extends Component {
    constructor(props){
        super(props)
        this.state={
            id:'',
        }
    }
    componentDidMount(){
       const order_id = this.props.navigation.getParam('order_id');
       this.setState({
           id:order_id
       })
    }

    render() {
        const{id}=this.state;
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                <View style={success.image}>
                    <Image source={require('../../assets/images/Check.png')}/>
                </View>
                <View style={success.message}>
                    <Text style={success.text}>Đơn hàng</Text>
                    <Text style={success.id}>{id}</Text>
                    <Text style={success.text}>Đã được đặt thành công</Text>
                    <Text style={success.text}>Nhấn nút để về trang chủ</Text>
                </View>
                <View style={success.button}>
                    <Button large iconLeft style={BackgroundColor.success}
                        onPress={()=>this.props.navigation.navigate('Home')}>
                        <Icon type='FontAwesome5' name='home' style={{color:'white'}}/>
                    </Button>
                </View>
            </ImageBackground>
        );
    }
}

const success = StyleSheet.create({
    image:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    message:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    button :{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: 150,
    },
    id:{
        fontSize:25,
        textAlign:'center',
        fontWeight: '500',
        color:'white'
    },
    text:{
        fontSize:25,
        textAlign:'center',
        color:'white'
    }

})


