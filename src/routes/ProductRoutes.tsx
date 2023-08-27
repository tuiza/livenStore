import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Details from 'screens/Details';
import Home from 'screens/Home';

const Stack = createStackNavigator();

const AppRoutes = () => {
    return (
        <Stack.Navigator
            screenOptions={
                {
                    headerShown: false,
                }
        }
        >
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
    );
};

export default AppRoutes;
