import React, { Component, useReducer } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground, Dimensions, SafeAreaView } from 'react-native'
import { Ionicons } from "@expo/vector-icons"

const devHeight = Dimensions.get('screen').height;
const devWidth = Dimensions.get('screen').width;

class AboutScreen extends React.Component {

  static navigationOptions = {
    headerShown: null,
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.container1}>

          <TouchableOpacity onPress={() => { this.props.navigation.goBack() }}>
            <Ionicons name="md-arrow-back" size={35} color={"#fff"} style={{ marginVertical: 20, marginHorizontal: 20 }}></Ionicons>
          </TouchableOpacity>
          <Text style={{ color: "#fff", marginVertical: 28, fontSize: 20, marginRight: 150 }}>About Us</Text>
        </View>
        <View style={styles.item}>
          <Text style={{ padding: 10, textAlign: 'center', color: 'white', fontSize: 20 }}> Welcome  </Text>
          <Text style={{ padding: 10, textAlign: 'center', color: 'white', fontSize: 20 }}>  to  </Text>
          <Text style={{ padding: 10, textAlign: 'center', color: 'white', fontSize: 20 }}> Dawit Fan page !!! </Text>
          <Image style={{ height: 350, width: 285 }}
            source={require('/Users/dawitabay/Desktop/mobile_app/myFanpage/assets/images/me.jpeg')}
          />

        </View>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({

  container1: {

    height: 80,
    width: '100%',
    backgroundColor: 'black',
    borderBottomColor: "#bdbdbd",
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',

  },
  item: {
    height: 500,
    width: 300,

    backgroundColor: "black",
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: 70,
    padding: 8,
  },

})

export default AboutScreen