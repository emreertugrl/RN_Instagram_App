import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomText from '../../../CustomText';

const ProfileStory = () => {
  return (
    <ScrollView
      horizontal
      style={styles.stories}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/9896/5e35/0498ea571a77d83499fec5a7c723f6a6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F7OCG7npHru70E~nlK2WszC9chb0D9aIS28rfhpDhInpMM1OPLu1-o0rxlIlj8S-OWeT-jXLJcAbMk3rD3oZjOqXb~NhVXfCidt2s19W8pMADoAANZwu3yvZvn7xiaH2JWzk8hM7M~G~KMiEr4rt19YCU3NgRymSH4~2RcXbjrNpQBpKcm-D~AnGpE2PpTy~rGWKVyPT5sOr6l8HyQxtIM2X2d8RSTfSWz4~WBk232We~Lopc7LPA-qlauU-Jt-I2W5rD9dcmVg2cBH6cF1wQcae655PqyEf788aADtnnXpqPktAWyn3qZdFo5B2DtGRSBWYPvwaBh3Xt5b81K4yEg__',
            }}
            style={styles.storyImage}
          />
        </View>
        <CustomText style={styles.storyLabel}>Story 1</CustomText>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/a70b/2387/3b980a6618ac762aedb38933fa0860a4?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U~oeJtQuy6owFnJ8MJtuPhe9fQ9lkzdgAhtQ~TSQTqAmTDfC2FpzuxrCtQWV9ZWzJcAZBI-oMN82RdEG2KUO0LeRnhzPMTjRUOVmTxnmnrnSvWQ4cJSgbyyRSR1bugPEFW9h2dbrPyBzwsgTHXcN3JcEAous141LBYo2A9E3bB98Ge~kTC5KHRiNWTT8zPmILtcflTUxMgQnD4fRQux1nBGN6rCRblG4MjDb4tEiF4Itx-Rjib0WusiWcTMCUpr0zikTJ-wCUQsVoHDfrcoZ5IZelKPzK9c~FaMMEkzaLTMcoSOnI~Ms-htxbT4y6XcIr5nxUbaAD54VEKCjtWj31Q__',
            }}
            style={styles.storyImage}
          />
        </View>
        <CustomText style={styles.storyLabel}>Story 2</CustomText>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/27e7/fb4b/c4e919dfff0275543abdfa47f480cce6?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IC3HqngKES6LEsYgsN-w43VDrmu3LH1vOKlW0m4Mcermy1DWCsJ0L0IZDr9biCPA8UNGM1vi2hSyJsGqVCCC3noaPsTtNJU7AlR24UAt~IPgF1Q2MjdSy8joSm1tktjiiVSz8NqFV4gB9arN-b315vw29utcahddHCJenIky~v7XsA8HxlEWPwf7gcZAs0ShCY1oyaP942ev0qApgM-J4PE1QHHNEvoJqe3XNZdIkQ-riCxDGJ~-bwTyNI1NyeO1eI8bkyoULlR~Z9ih-jJOHads68W~GQgw3RpTxp0TqY3O~5pC3B7A-kDIk2Gi7m9L~sOYAKFaxBTSbh5FLWmKoQ__',
            }}
            style={styles.storyImage}
          />
        </View>
        <CustomText style={styles.storyLabel}>Story 3</CustomText>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={{
              uri: 'https://s3-alpha-sig.figma.com/img/7768/f396/28e8130d48cd115b029fa0cb022605b3?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KXif2ZFtDaE4bHiU6InqPjRgAcJsKeIFl0b03k6V3-sdxYsDxwkM48ttfWsS7mZ63g1E2WrD0WwEAP7QgNqrIC2dTBmz03chy0kF4F-BUrgLyCe9eAXxjk9hOZhJ2eoaYNSaqap0NgTUn2tmF9Q1eNzEqw8dS7syn41oTeMIy1AFBqhVzSSzVYN0BdW~bEydlIxQP5~Ub~wQFHGHrXHoy3gOUa9ehI1fcOx~elLVP36x4VX0KH-viuufeIDTGnx4rMhIPLZ~FTskQ-bple-Gtyry~RylLZ1yg--h~2qdXKQB-stUrPHoII-zXwO384CNX2Qbx2E2jXMwyVfMjhfXuA__',
            }}
            style={styles.storyImage}
          />
        </View>
        <CustomText style={styles.storyLabel}>Story 4</CustomText>
      </View>
      <View style={styles.story}>
        <View
          style={{
            borderColor: '#DCDCDC',
            borderWidth: 1,
            width: 70,
            height: 70,
            borderRadius: 35,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity style={styles.newStoryButton}>
            <CustomText style={styles.plusSign}>+</CustomText>
          </TouchableOpacity>
        </View>
        <CustomText style={styles.storyLabel}>New</CustomText>
      </View>
    </ScrollView>
  );
};

export default ProfileStory;

const styles = StyleSheet.create({
  stories: {
    paddingHorizontal: 10,
  },
  story: {
    marginRight: 5,
    alignItems: 'center',
  },
  storyImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
  },
  storyLabel: {
    color: '#000000',
    paddingTop: 3,
  },
  plusSign: {
    fontSize: 40,
  },
  newStoryButton: {},
});
