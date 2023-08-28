import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Cart from 'screens/Cart';
import Favorites from 'screens/Favorites';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductRoutes from './ProductRoutes';
import theme from '../global/theme';
import { ProductContext } from '../contexts/ProductContext';
import { Text } from 'react-native';


const Tab = createBottomTabNavigator();

const AppRoutes = () => {
    const { totalProducts } = useContext(ProductContext)
    const getIcon = (routeName: string) => {
        let iconName: string;

        switch (routeName) {
            case 'Carrinho':
                iconName = 'cart';
                break;
            case 'Favoritos':
                iconName = 'heart';
                break;
            default:
                iconName = 'home';
                break;

        }

        return iconName;
    };

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        const iconName = getIcon(route.name);
                        const isCartAndHasProducts = route.name === 'Carrinho' && totalProducts > 0;
                        return (
                            <>
                                {isCartAndHasProducts && <Text style={{
                                    position: 'absolute',
                                    zIndex: 1,
                                    right: 40,
                                    top: 2,
                                    backgroundColor: theme.colors.roxoClaro,
                                    color: theme.colors.roxo,
                                    borderRadius: 50,
                                    width: 20,
                                    height: 20,
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    fontSize: 10,
                                    fontWeight: 'bold'
                                }}>{totalProducts}</Text>}
                                <Icon name={iconName} size={size} color={color} />
                            </>
                        );


                    },
                    headerShown: false,
                    tabBarActiveTintColor: theme.colors.roxoClaro,
                    tabBarInactiveTintColor: theme.colors.cinza,
                    tabBarStyle: {
                        paddingBottom: 5,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        height: 50,
                        backgroundColor: theme.colors.roxo,
                    },
                    tabBarShowLabel: false,
                })}
            >
                <Tab.Screen name="Home" component={ProductRoutes} />
                <Tab.Screen name="Favoritos" component={Favorites} />
                <Tab.Screen name="Carrinho" component={Cart} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppRoutes;
