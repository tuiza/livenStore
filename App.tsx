import React from 'react'
import {
  SafeAreaView, StatusBar,
  useColorScheme
} from 'react-native';
import AppRoutes from './src/routes/AppRoutes';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppRoutes />
    </SafeAreaView>
  )
}

export default App;
