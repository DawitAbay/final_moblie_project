import { createBottomTabNavigator } from 'react-navigation-tabs';
import React, { Component } from 'react';
import HomeScreen from './home'
import SettingsScreen from './settings'
import AddButton from './addbutton'
import { Ionicons, AntDesign, SimpleLineIcons } from "@expo/vector-icons"
import MessageBoard from './MessageBoard'
import HomeCrypto from './HomeCrypto';
import followek from './followek'


//tab navigator

const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} ></Ionicons>

      }
    },

    crypto: {
      screen: HomeCrypto,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <AntDesign name="areachart" size={24} color={tintColor} ></AntDesign>

      }
    },
    followek: {
      screen: followek,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <SimpleLineIcons name="user-following" size={24} color={tintColor} ></SimpleLineIcons>

      }
    },

    Add: {

      screen: () => null,
      navigationOptions: {
        tabBarIcon: <AddButton />
      }

    },
    Message: {
      screen: MessageBoard,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <AntDesign name="message1" size={24} color={tintColor} />
      }
    },

    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Ionicons name="ios-settings" size={24} color={tintColor} ></Ionicons>

      }
    },

  },

  {
    defaultNavigationOptions: {
      tabBarOnPress: ({ navigation, defaultHandler }) => {

        if (navigation.state.key === 'Add') {
          navigation.navigate('Post')
        }
        else {
          defaultHandler()
        }

      }
    },
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
      showLabel: false

    },
  },



)


export default AppTabNavigator