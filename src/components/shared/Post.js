import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Bookmark, Comment, Dots, Heart, Share} from '../../Icon';
import FitImage from './FitImage';
import ReadMore from '@fawazahmed/react-native-read-more';
import CustomText from './../../CustomText';

const Post = ({post}) => {
  console.log(post);
  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <View style={styles.username}>
          <Image style={styles.avatar} source={{uri: post?.user.avatar}} />
          <Text style={styles.title}>{post?.user?.name}</Text>
        </View>
        <Dots />
      </View>
      <FitImage src={post?.image} />
      <View style={styles.content}>
        <View style={styles.actions}>
          <View style={styles.leftActions}>
            <TouchableOpacity style={styles.action} activeOpacity={0.7}>
              <Heart size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} activeOpacity={0.7}>
              <Comment />
            </TouchableOpacity>
            <TouchableOpacity style={styles.action} activeOpacity={0.7}>
              <Share />
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <Bookmark />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.likes}>{post?.likes} likes</Text>
        </View>
        <ReadMore
          style={styles.user}
          seeLessStyle={{color: '#999'}}
          seeLessText="Daha az"
          seeMoreText="Daha fazla"
          seeMoreStyle={{color: '#999'}}
          allowFontScaling={false}
          numberOfLines={2}>
          <Text>
            {post?.user.name} {` `}
            {post?.description}
          </Text>
        </ReadMore>
        {post?.comments > 0 && (
          <TouchableOpacity style={{paddinBottom: 7}}>
            <Text style={styles.comments}>
              View all {post?.comments} comments
            </Text>
          </TouchableOpacity>
        )}

        <View>
          <CustomText style={styles.date}>{post?.date}</CustomText>
          <CustomText style={styles.translation}>See Translation</CustomText>
        </View>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  post: {
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  username: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  content: {
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  leftActions: {
    flexDirection: 'row',
  },
  action: {
    marginRight: 12,
  },
  footer: {
    backgroundColor: 'blue',
    width: '100%',
    height: '100%',
  },

  user: {
    color: 'black',
  },
  comments: {
    opacity: 0.5,
    color: 'black',
    marginVertical: 7,
  },
  date: {
    fontSize: 13,
    opacity: 0.5,
  },
  translation: {
    fontSize: 13,
    fontWeight: '600',
    marginTop: 10,
  },
  likes: {
    fontWeight: '600',
    marginVertical: 4,
    color: 'black',
  },
});
