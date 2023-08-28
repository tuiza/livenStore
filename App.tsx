import React from 'react'
import {
  SafeAreaView, StatusBar,
  useColorScheme
} from 'react-native';
import AppRoutes from './src/routes/AppRoutes';

import theme from './src/global/theme';
import { CartProvider } from 'contexts/ProductContext';
import { FavoritesProvider } from 'contexts/FavoriteContext';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <CartProvider>
      <FavoritesProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.cinza }}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AppRoutes />
        </SafeAreaView>
      </FavoritesProvider>
    </CartProvider>
  )
}

export default App;
