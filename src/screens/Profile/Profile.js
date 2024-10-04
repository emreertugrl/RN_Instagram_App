import {
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
} from 'react-native';
import React from 'react';
import ProfileHeader from './components/ProfileHeader.jsx';
import ProfileInfo from './components/ProfileInfo.jsx';
import ProfileBio from './components/ProfileBio.jsx';
import ProfileStory from './components/ProfileStory.jsx';
import post from '../../data/post.js';

const Profile = () => {
  const screenWidth = Dimensions.get('window').width;
  const numColumns = 3;
  const imageSize = (screenWidth - (numColumns + 1) * 2) / numColumns - 4;

  const renderProps = ({item}) => (
    <TouchableOpacity activeOpacity={0.8}>
      <Image
        source={{uri: item.image}}
        style={{
          width: imageSize,
          height: imageSize,
          margin: 2,
        }}
      />
    </TouchableOpacity>
  );
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader />
      <ProfileInfo />
      <ProfileBio />
      <ProfileStory />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={post}
        renderItem={renderProps}
        numColumns={numColumns}
        contentContainerStyle={styles.photoGrid}
        style={{marginTop: 15}}
      />
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  photoGrid: {
    paddingHorizontal: 5,
  },
});
