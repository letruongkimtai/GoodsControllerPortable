import React, { Component } from 'react';
import ActionButton from 'react-native-action-button';
import {
    View,
} from 'react-native';

export default class AddButton extends Component {
    render() {
        return (
            <ActionButton buttonColor='#21C184' onPress={this.props.nav('ProductModal')}>
            </ActionButton>
        );
    }
}