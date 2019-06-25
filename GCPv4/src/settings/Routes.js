
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import React from 'react';

import Home from '../components/home/Home';
import ProductList from '../components/product/ProductList';
import ProductDetails from '../components/product/ProductDetails';
import Login from '../components/user/Login'
import SignUp from '../components/user/SignUp';
import OrderList from '../components/order/OrderList';
import Other from '../components/other/Other';
import DeliveryDetail from '../components/delivery/DeliveryDetail'
import AddProductModal from '../components/product/AddProductModal'
import OrderDetail from '../components/order/OrderDetail'
import AddOrder from '../components/order/AddOrder';
import ConfigNConfirm from '../components/order/ConfigNConfirm';
import Success from '../components/order/Success';
import TabBar from '../components/tab-bar/TabBar';
// import { Icon } from 'native-base';
import TabIcon from '../components/tab-bar/TabIcon'

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
},
    { initialRouteName: 'Home' }
);

const MainStack = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({tintColor})=><TabIcon name='home' color={tintColor}/>
        },
    },
    Product: {
        screen: ProductList,
        navigationOptions: {
            tabBarLabel: 'Sản phẩm',
            tabBarIcon:({tintColor})=><TabIcon name='product' color={tintColor}/>
        },
    },
    OrderList: {
        screen: OrderList,
        navigationOptions: {
            tabBarLabel: 'Đặt hàng',
            tabBarIcon: ({tintColor})=><TabIcon name='order' color={tintColor}/>
        },
    },
    Others: {
        screen: Other,
        navigationOptions: {
            tabBarLabel: 'Khác',
            tabBarIcon: ({tintColor})=><TabIcon name='other' color={tintColor}/>,
            
        },
    },

},
    {
        tabBarComponent:TabBar,
        swipeEnabled:true,
    }
)

const AppStack = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        ProductModal: {
            screen: AddProductModal,
        }
    },
    {
        mode:'modal',
        headerMode:'none'
    }
)

const rootStack = createStackNavigator({
    Home: {
        screen: AppStack,
        navigationOptions: {
            header: null
        }
    },
    ProductList: {
        screen: ProductList,
        navigationOptions: {
            header: null
        }
    },
    ProductDetail: {
        screen: ProductDetails,
        navigationOptions: {
            header: null
        }
    },
    DeliveryDetail: {
        screen: DeliveryDetail,
        navigationOptions: {
            header: null,
        }
    },
    OrderDetail: {
        screen: OrderDetail,
        navigationOptions: {
            header: null,
        }
    },
    AddOrder:{
        screen: AddOrder,
        navigationOptions:{
            header: null,
        }
    },
    Confirm:{
        screen: ConfigNConfirm,
        navigationOptions:{
            header:null,
        }
    },
    Success:{
        screen: Success,
        navigationOptions:{
            header:null,
        }
    }
})

const AuthenStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null,
        }
    },
    SignUp: {
        screen: SignUp,
        navigationOptions: {
            header: null,
        }
    }
},
    { initialRouteName: 'Login' })

const authenSwitch = createSwitchNavigator({
    Authen: AuthenStack,
    App: {
        screen: rootStack,
    }
})

export default createAppContainer(authenSwitch);