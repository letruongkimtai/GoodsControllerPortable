import React,{Component} from 'react';
import { 
    View,
    Text,
    ImageBackground,
 } from 'react-native';
import { styles } from '../../styling/styles';


export default class Order extends Component {
    render() {
        return (
            <ImageBackground style={styles.backGround} source={require('../../assets/images/background.png')}>
                
            </ImageBackground>
        );
    }
}

