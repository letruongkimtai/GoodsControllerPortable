/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import Home from './src/components/home/Home';
import ProductList from './src/components/product/ProductList';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import ProductDetails from './src/components/product/ProductDetails';
import OrderDetail from './src/components/order/OrderDetail';
import UnconfirmedOrders from './src/components/home/UnconfirmedOrders';
import Login from './src/components/user/Login'
import SignUp from './src/components/user/SignUp';

const Navigation = createStackNavigator({
    Login:{
        screen: Login,
    },
    SignUp:{
        screen:SignUp,
    },
    Home: {
        screen: Home,
    },
    OrderDetail:{
        screen: OrderDetail,
    },
    ProductList: {
        screen: ProductList,
    },
    ProductDetails:{
        screen: ProductDetails,
    },
   
    
});

export default App = createAppContainer(Navigation);
