import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from 'screens/Home';
import Cart from 'screens/Cart';
import Favorites from 'screens/Favorites';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
    const getIcon = (routeName: string) => {
        let iconName: string;

        switch (routeName) {
            case 'Cart':
                iconName = 'cart';
                break;
            case 'Favorites':
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
                    tabBarActiveTintColor: '#b82020',
                    tabBarInactiveTintColor: '#000',
                    tabBarStyle: {
                        paddingBottom: 10,
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Cart" component={Cart} />
                <Tab.Screen name="Favorites" component={Favorites} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppRoutes;
