import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../../../CustomText';

const ProfileInfo = () => {
  return (
    <View style={styles.profileInfo}>
      <LinearGradient style={styles.cover} colors={['#DE0046', '#F7A34B']}>
        <Image
          source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
          style={styles.avatar}
        />
      </LinearGradient>
      <View style={styles.stats}>
        <CustomText style={styles.statNumber}>0.000</CustomText>
        <CustomText style={styles.statLabel}>Posts</CustomText>
      </View>
      <View style={styles.stats}>
        <CustomText style={styles.statNumber}>0.000</CustomText>
        <CustomText style={styles.statLabel}>Followers</CustomText>
      </View>
      <View style={styles.stats}>
        <CustomText style={styles.statNumber}>0.000</CustomText>
        <CustomText style={styles.statLabel}>Following</CustomText>
      </View>
    </View>
  );
};

export default ProfileInfo;

const styles = StyleSheet.create({
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  cover: {
    width: 85,
    height: 85,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 5,
  },
  stats: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '400',
    color: '#000000',
  },
});
