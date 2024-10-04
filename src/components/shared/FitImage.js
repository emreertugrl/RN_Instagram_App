import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FitImage = ({src}) => {
  // pencere genişliğini döndürür
  const width = Dimensions.get('window').width;
  const ratio = 1080 / width;
  const height = 607 / ratio;
  return (
    <Image
      source={{uri: src}}
      style={{
        width,
        height,
      }}
    />
  );
};

export default FitImage;

const styles = StyleSheet.create({});
