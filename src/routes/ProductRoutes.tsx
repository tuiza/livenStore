import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Details from 'screens/Details';
import Home from 'screens/Home';
import Checkout from 'screens/Checkout';
import theme from '../../src/global/theme';

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
            <Stack.Screen name="Checkout" component={Checkout}
                options={
                    {
                        headerShown: true,
                        headerTitle: 'Checkout',
                        headerStyle: {
                            backgroundColor: 'transparent',
                        },
                        headerTintColor: theme.colors.roxo,
                    }
                }
            />

        </Stack.Navigator>
    );
};

export default AppRoutes;
