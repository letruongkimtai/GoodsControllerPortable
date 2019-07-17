
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
import User from '../components/other/User';
import Notification from '../components/other/Notification';
import Log from '../components/other/Log';
import Statistic from '../components/other/Statistic';

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    DeliveryDetail: {
        screen: DeliveryDetail,
        navigationOptions: {
            header: null
        }
    }
},
    { initialRouteName: 'Home' }
);

const ProductStack = createStackNavigator({
    Product: {
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
},
    { initialRouteName: 'Product' }
)

const OrderStack = createStackNavigator({
    OrderList: {
        screen: OrderList,
        navigationOptions: {
            header: null
        }
    },
    OrderDetail: {
        screen: OrderDetail,
        navigationOptions: {
            header: null
        }
    },
},
    { initialRouteName: 'OrderList' }
)


const OtherStack = createStackNavigator({
    OtherMenu: {
        screen: Other,
        navigationOptions: {
            header: null
        }
    },
    User:{
        screen: User,
        navigationOptions:{
            headerTitle:'Thông tin người dùng'
        }
    },
    Notification:{
        screen:Notification,
        navigationOptions:{
            headerTitle:'Thông Báo'
        }
    },
    Log:{
        screen:Log,
        navigationOptions:{
            headerTitle:'Lịch sử lấy hàng',
            
        }
    },
    Statistic:{
        screen:Statistic,
        navigationOptions:{
            headerTitle:'Thống kê tồn kho'
        }
    }
},
    { initialRouteName: 'OtherMenu' }
)

const MainStack = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Trang chủ',
            tabBarIcon: ({ tintColor }) => <TabIcon name='home' color={tintColor} />
        },
    },
    Product: {
        screen: ProductStack,
        navigationOptions: {
            tabBarLabel: 'Sản phẩm',
            tabBarIcon: ({ tintColor }) => <TabIcon name='product' color={tintColor} />
        },
    },
    OrderList: {
        screen: OrderStack,
        navigationOptions: {
            tabBarLabel: 'Đặt hàng',
            tabBarIcon: ({ tintColor }) => <TabIcon name='order' color={tintColor} />
        },
    },
    Others: {
        screen: OtherStack,
        navigationOptions: {
            tabBarLabel: 'Khác',
            tabBarIcon: ({ tintColor }) => <TabIcon name='other' color={tintColor} />,

        },
    },

},
    {
        tabBarComponent: TabBar,
    }
)

//Modal stack
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
        mode: 'modal',
        headerMode: 'none'
    }
)


//Main stack
const rootStack = createStackNavigator({
    Home: {
        screen: AppStack,
        navigationOptions: {
            header: null
        }
    },
    AddOrder: {
        screen: AddOrder,
        navigationOptions: {
            header: null,
        }
    },
    Confirm: {
        screen: ConfigNConfirm,
        navigationOptions: {
            header: null,
        }
    },
    Success: {
        screen: Success,
        navigationOptions: {
            header: null,
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