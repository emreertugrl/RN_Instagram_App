import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CustomText from '../../../CustomText';

const ProfileBio = () => {
  return (
    <View style={styles.bio}>
      <CustomText style={styles.name}>Username</CustomText>
      <CustomText style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        consequuntur quae quam quis.
      </CustomText>
      <CustomText style={styles.link}>Link goes here</CustomText>
      <TouchableOpacity style={styles.editProfileButton} activeOpacity={0.7}>
        <CustomText style={styles.editProfileText}>Edit Profile</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileBio;

const styles = StyleSheet.create({
  bio: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  name: {
    fontWeight: '700',
    color: '#000000',
  },
  description: {
    marginVertical: 5,
    fontSize: 16,
    color: '#000000',
  },
  link: {
    fontSize: 14,
    color: '#004C8B',
  },
  editProfileButton: {
    borderColor: '#CBCBCB',
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    paddingVertical: 5,
  },
  editProfileText: {
    fontWeight: '700',
    color: '#000000',
  },
});
