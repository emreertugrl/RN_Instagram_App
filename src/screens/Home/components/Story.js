import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Story = ({story}) => {
  return (
    <View key={story.id} style={styles.story}>
      <LinearGradient style={styles.cover} colors={['#DE0046', '#F7A34B']}>
        <Image source={{uri: story.user.avatar}} style={styles.avatar} />
      </LinearGradient>
      <Text numberOfLines={1} style={styles.username}>
        {story.user.name}
      </Text>
    </View>
  );
};

export default Story;

const styles = StyleSheet.create({
  username: {
    color: 'black',
    fontSize: 12,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
  },
  cover: {
    width: 65,
    height: 65,
    borderRadius: 61,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 5,
  },
  story: {
    width: 67,
    marginHorizontal: 8,
  },
});
