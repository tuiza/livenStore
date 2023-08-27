import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import Cart from 'screens/Cart';
import Favorites from 'screens/Favorites';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductRoutes from './ProductRoutes';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
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
                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    headerShown: false,
                    tabBarActiveTintColor: '#101012',
                    tabBarInactiveTintColor: '#CCC',
                    tabBarStyle: {
                        paddingBottom: 5,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        height: 50,
                        backgroundColor: '#E6E6E6',
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
