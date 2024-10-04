import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import ReelScreen from './screens/Reel';
import ShopScreen from './screens/Shop';
import ProfileScreen from './screens/Profile/Profile';
import {
  Home,
  HomeField,
  Reel,
  ReelField,
  Search,
  SearchField,
  Shop,
  ShopField,
} from './Icon';

const Tab = createBottomTabNavigator();

const Screen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <HomeField size={30} /> : <Home size={30} />,
        }}
        name="home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SearchField size={30} /> : <Search size={30} />,
        }}
        name="search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ReelField size={26} /> : <Reel size={30} />,
        }}
        name="reel"
        component={ReelScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <ShopField size={30} /> : <Shop size={30} />,
        }}
        name="shop"
        component={ShopScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./../assets/profile.png')}
              style={[
                styles.avatar,
                {borderColor: focused ? '#000' : 'transparent'},
              ]}
            />
          ),
        }}
        name="profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default Screen;

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderWidth: 2,
    borderRadius: 25,
  },
});
