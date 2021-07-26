import React, { Component } from 'react';
import { View, ImageBackground, Dimensions } from 'react-native'

const devHeight = Dimensions.get('screen').height;
const devWidth = Dimensions.get('screen').width;

//splash screen

class ImageScreen extends React.Component {
  static navigationOptions = {

    alignItems: 'center',

    headerShown: null,
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login')

    }, 2000);
  }
  render() {
    return (
      <View>

        <ImageBackground
          source={require('/Users/dawitabay/Desktop/mobile_app/myFanpage/assets/images/me.jpeg')}
          style={{ height: 500, width: 500 }}
        ></ImageBackground>


      </View>

    )

  }



}



export default ImageScreen