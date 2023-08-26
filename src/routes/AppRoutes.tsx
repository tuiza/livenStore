import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from 'screens/Home';
import Cart from 'screens/Cart';
import Favorites from 'screens/Favorites';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Cart" component={Cart} />
                <Tab.Screen name="Favorites" component={Favorites} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppRoutes;
