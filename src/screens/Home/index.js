import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import Post from '../../components/shared/Post';
import posts from '../../data/post';
const index = () => {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView>
        <Stories />
        {posts?.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </ScrollView>
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
