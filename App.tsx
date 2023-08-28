import React from 'react'
import {
  SafeAreaView, StatusBar,
  useColorScheme
} from 'react-native';
import AppRoutes from './src/routes/AppRoutes';

import theme from './src/global/theme';
import {CartProvider}  from 'contexts/ProductContext';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <CartProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppRoutes />
      </SafeAreaView>
    </CartProvider>
  )
}

export default App;
