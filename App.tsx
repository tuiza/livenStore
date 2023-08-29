import React, { useEffect } from 'react'
import {
  Platform,
  SafeAreaView, StatusBar,
  useColorScheme
} from 'react-native';
import AppRoutes from './src/routes/AppRoutes';

import theme from './src/global/theme';
import { CartProvider } from 'contexts/ProductContext';
import { FavoritesProvider } from 'contexts/FavoriteContext';

function App(): React.JSX.Element {
  StatusBar.setBarStyle("light-content");
  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor("rgba(0,0,0,0)");
      StatusBar.setTranslucent(true);
    }
  }, [])

  const padding = Platform.OS === "android" ? StatusBar.currentHeight : 0 

  return (
    <CartProvider>
      <FavoritesProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.cinza, marginTop: padding }}>
          <StatusBar barStyle={'dark-content'} />
          <AppRoutes />
        </SafeAreaView>
      </FavoritesProvider>
    </CartProvider>
)
  
}

export default App;
