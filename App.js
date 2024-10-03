//import liraries
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Screen from './src/Screen';
import {SafeAreaView} from 'react-native-safe-area-context';

// create a component
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Screen />
      </NavigationContainer>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
  color: {
    color: 'black',
  },
});

//make this component available to the app
export default App;
