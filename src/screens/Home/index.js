import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './components/Header';

const index = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
