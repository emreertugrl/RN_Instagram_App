import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Heart, Logo, Messenger, Plus} from '../../../Icon';

export default function Header() {
  return (
    <View style={styles.header}>
      <Logo />
      <View style={styles.actions}>
        <TouchableOpacity activeOpacity={0.8}>
          <Plus size={30} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>
          <Heart size={30} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.dotContainer}>
            <View style={styles.dot} />
          </View>
          <Messenger size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 44,
    padddingBottom: 4,
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    gap: 30,
  },
  dot: {
    backgroundColor: '#FE3650',
    width: 8,
    height: 8,
    borderRadius: 8,
  },
  dotContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2,
    width: 11,
    height: 11,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
