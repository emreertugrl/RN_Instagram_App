import {StyleSheet, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Plus, BurgerMenu, Dropdown} from '../../../Icon';
import CustomText from '../../../CustomText';
const Header = () => {
  return (
    <View style={styles.header}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 5,
        }}>
        <CustomText style={styles.username}>Username</CustomText>
        <Dropdown />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
        }}>
        <TouchableOpacity activeOpacity={0.7}>
          <Plus size={30} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <BurgerMenu size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
