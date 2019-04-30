/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import Home from './src/components/home/Home';
import Product from './src/components/product/Product';
import { createAppContainer, createStackNavigator } from 'react-navigation';

const Navigation = createStackNavigator({
    Home: {
        screen: Home,
    },
    Product: {
        screen: Product,
    }
});

export default App = createAppContainer(Navigation);
