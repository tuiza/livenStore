import React from 'react'
import {
  SafeAreaView, StatusBar,
  useColorScheme
} from 'react-native';
import Home from 'screens/Home';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Home />
    </SafeAreaView>
  )
}

export default App;
