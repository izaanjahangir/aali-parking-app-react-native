import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {LogBox} from 'react-native';

import Navigation from './src/navigation';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };
  
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NativeBaseProvider>
        <Navigation />
      </NativeBaseProvider>
    </SafeAreaView>
  );
};

export default App;
