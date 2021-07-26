import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ImageScreen from './screens/image.js'
import Inputs from './screens/login.js'
import AppTabNavigator from './tabs/tabnavigator.js'
import SignInputs from './screens/signup.js'
import PostScreen from './screens/post.js'
import EditScreen from './editdetails/edit.js'
import EditmailScreen from './editdetails/editmail.js'
import EditpassScreen from './editdetails/editpass.js'
import AboutScreen from './screens/about.js'
import MessageBoard from './tabs/MessageBoard'
import HomeCrypto from './tabs/HomeCrypto.js';
import coinDetail from './crpto/coinDetail.js';
import addFollwers from './listname/addFollwers.js';
import followek from './tabs/followek.js'
import { LogBox, ignoreLogs } from 'react-native';


LogBox.ignoreLogs([
    'Require cycle:'
])
const RootStack = createStackNavigator(
    {
        ImageScreen: ImageScreen,
        Login: Inputs,
        SignUp: {
            screen: SignInputs,
            navigationOptions: {

                headerShown: false

            },
        },
        MainHome: {
            screen: AppTabNavigator,
            navigationOptions: {

                headerShown: false

            },

        },
        crypto: {
            screen: HomeCrypto,
            navigationOptions: {

                headerShown: true

            },

        },
        coinDetail: {
            screen: coinDetail,
            navigationOptions: {

                headerShown: false

            },

        },

        Message: {
            screen: MessageBoard,
            navigationOptions: {

                headerShown: false

            },

        },


        Post: {
            screen: PostScreen,
            navigationOptions: {

                headerShown: false

            },
        },
        Edit: {
            screen: EditScreen,
            navigationOptions: {

                headerShown: false

            },
        },
        Editmail: {
            screen: EditmailScreen,
            navigationOptions: {

                headerShown: false

            },

        },
        Editpass: {
            screen: EditpassScreen,
            navigationOptions: {

                headerShown: false

            },

        },



        About: {
            screen: AboutScreen,
            navigationOptions: {

                headerShown: false

            },

        },

    },
    {
        initialRouteName: 'ImageScreen',


    },



)




const AppContainer = createAppContainer(RootStack);
class App extends React.Component {

    render() {
        return (<AppContainer />)
    }
}

export default App