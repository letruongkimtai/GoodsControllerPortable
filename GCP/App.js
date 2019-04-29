/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import Home from './src/components/Home';
import Product from './src/components/Products'
import {createAppContainer,createStackNavigator} from 'react-navigation'

const Navigation = createStackNavigator({
    Home: { screen: Home },
    Product: { screen: Products }
});

export default App = createAppContainer(Navigation);
