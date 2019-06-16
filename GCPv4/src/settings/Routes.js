
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import Home from '../components/home/Home';
import ProductList from '../components/product/ProductList';
import ProductDetails from '../components/product/ProductDetails';
import Login from '../components/user/Login'
import SignUp from '../components/user/SignUp';
import Order from '../components/order/Order';
import Other from '../components/other/Other';
import DeliveryDetail from '../components/delivery/DeliveryDetail'
import AddProductModal from '../components/product/AddProductModal'

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
    }
},
    { initialRouteName: 'Home' }
)

const MainStack = createBottomTabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            tabBarLabel: 'Trang chủ'
        },
    },
    Product: {
        screen: ProductList,
        navigationOptions: {
            tabBarLabel: 'Sản phẩm'
        },
    },
    Order: {
        screen: Order,
        navigationOptions: {
            tabBarLabel: 'Đặt hàng'
        },
    },
    Others: {
        screen: Other,
        navigationOptions: {
            tabBarLabel: 'Khác'
        },
    },

},
    {
        tabBarOptions: {
            tabStyle: {
                fontSize: 18,
            }
        }
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