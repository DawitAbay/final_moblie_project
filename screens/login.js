import React, { Component } from 'react';
import {
  View,

  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions,
  AsyncStorage,
} from 'react-native';
import firebase from '/Users/dawitabay/Desktop/mobile_app/myFanpage/config/config';
import { SafeAreaView } from 'react-navigation';
import { color } from 'react-native-reanimated';
import * as Facebook from 'expo-facebook';
import { Alert } from 'react-native';
import { db, auth } from '../config/config'
import * as Google from 'expo-google-app-auth';
import { MainHome } from '/Users/dawitabay/Desktop/mobile_app/myFanpage/App.js'

const devHeight = Dimensions.get('screen').height;
const devWidth = Dimensions.get('screen').width;



class Inputs extends React.Component {
  static navigationOptions = {
    headerShown: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      uid: '',
      email: '',
      password: '',
      name: ''
    };
  }

  handleEmail = text => {
    this.setState({ email: text });
  };
  handlePassword = text => {
    this.setState({ password: text });
  };

  Login = (email, password) => {              //firebase authentication in login
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() =>
          this.props.navigation.navigate('MainHome', { email: this.state.email }),

        )
        .catch(error => {
          alert(error.message);
        });
    } catch (err) {
      alert(err);
    }
  };
  Anonymous = (uid) => {              //firebase authentication in login
    try {
      firebase
        .auth()
        .signInAnonymously()
        .then(() =>
          this.props.navigation.navigate('MainHome', { uid: this.state.uid }),

        )
        .catch(error => {
          alert(error.message);
        });
    } catch (err) {
      alert(err);
    }
  };

  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        //console.log(user)
      }
    })
  }
  async facebooklogIn() {
    try {
      await Facebook.initializeAsync({
        appId: '3992560854112603',
      });
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const doc = await db.collection("users/").doc(result.user.name).get();

      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      alert(`Facebook Login Error: ${message}`);
    }
  }


  signInWithGoogle = async () => {

    try {

      const result = await Google.logInAsync({
        androidClientId: '515888161199-ifuk51cvbrk5vh42arjtc9so9en8lbck.apps.googleusercontent.com',
        iosClientId: '515888161199-knk47ufkhl2qnl1afjnejsh8tlt4img0.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === "success") {
        //console.log("HomeSceern| ", result.user.email);

        const doc = db.collection("users/").doc(result.user.email).get();
        if (!doc.exists) {
          firebase.database()
            .ref('/users/' + firebase.auth().currentUser.uid + "/profile")
            .set({
              UserName: this.state.name,
              UserEmail: this.state.email,

            });
        } else {
          dispatch({
            UserName: this.state.name,
            UserEmail: this.state.email,
          });
        }
        //navigation.navigate('MainHome')
        //this.props.navigation.navigate('HomeScreen')

        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {

      return { error: true };
    }
  };

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <ImageBackground
          style={{ height: devHeight, width: devWidth }}
          source={require('/Users/dawitabay/Desktop/mobile_app/myFanpage/assets/images/wall.jpg')}
        >
          <SafeAreaView>
            <Text style={{ color: "white", marginHorizontal: 40, marginTop: 50, fontSize: 20, fontWeight: 'bold' }}>Welcome To</Text>
            <Text style={{ color: "white", marginHorizontal: 40, marginTop: 50, fontSize: 30, fontWeight: 'bold' }}>CRYPTO</Text>
            <Text style={{ color: "white", marginHorizontal: 40, marginTop: 50, fontSize: 20, fontWeight: 'bold' }}>Social</Text>

            <Text style={{ color: "black", backgroundColor: 'white', marginTop: 70, fontSize: 18, marginHorizontal: 31 }}>Email</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              autoCapitalize="none"
              onChangeText={this.handleEmail}


            />

            <Text style={{ color: "black", backgroundColor: 'white', marginTop: 30, fontSize: 18, marginHorizontal: 31 }}>Password</Text>

            <TextInput
              style={styles.input}

              underlineColorAndroid="transparent"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={this.handlePassword}

            />

            <TouchableOpacity
              onPress={() => this.Login(this.state.email, this.state.password)}
              style={{
                height: 35,
                width: 160,
                fontWeight: 'bold',
                backgroundColor: 'red',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 60
              }}>
              <Text style={{ color: '#FFF', textAlign: 'center' }}>Sign In</Text>
            </TouchableOpacity>



            <TouchableOpacity
              onPress={() => this.facebooklogIn()}
              style={{ alignContent: 'center' }}
              style={{
                height: 35,
                width: 160,
                backgroundColor: 'blue',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 20
              }}>
              <Text style={{ color: '#FFF', textAlign: 'center' }}>FaceBook Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.signInWithGoogle()}

              style={{
                height: 35,
                width: 160,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 20
              }}>
              <Text style={{ color: '#FFF', textAlign: 'center' }}>Google Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.Anonymous()}
              style={{ alignContent: 'center' }}
              style={{
                height: 35,
                width: 160,
                backgroundColor: 'black',
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 20
              }}>
              <Text style={{ color: '#FFF', textAlign: 'center' }}>Anonymous</Text>
            </TouchableOpacity>


            <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SignUp')}
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row'
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginTop: 30,
                    marginLeft: 80
                  }}>
                  Not a Member yet?
                </Text>
                <Text style={{ color: '#7F58FF', textDecorationLine: 'underline', marginTop: 30, fontSize: 18, marginRight: 80 }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ImageBackground>
      </View >

    );
  }
}

const styles = StyleSheet.create({
  input: {

    height: 30,
    padding: 5,
    width: 350,
    color: 'black',
    fontSize: 18,
    alignSelf: 'center',
    borderBottomColor: "red",
    borderBottomWidth: 5,
    backgroundColor: 'white'
  },



});

export default Inputs
