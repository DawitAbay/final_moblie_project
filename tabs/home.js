import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView, SafeAreaView, FlatList, Platform } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import firebase from 'firebase'
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';


const devHeight = Dimensions.get('screen').height;
const devWidth = Dimensions.get('screen').width;



class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    //banner Android : ca-app-pub-1648645426995057/1987145459
    //android inster: ca-app-pub-1648645426995057/9753954833
    //Rewardedinterstitial android: ca-app-pub-1648645426995057/9376596604
    //banner ios :ca-app-pub-1648645426995057/2034412768
    //ios inster: ca-app-pub-1648645426995057/5077424797
    //Rewardedinterstitial ios: ca-app-pub-1648645426995057/2511805357
    this.bannerADId = Platform.OS == 'ios' ? "ca-app-pub-1648645426995057/2034412768" : "ca-app-pub-1648645426995057/1987145459";
    this.interstitialADId = Platform.OS == 'ios' ? "ca-app-pub-1648645426995057/5077424797" : "ca-app-pub-1648645426995057/9753954833"
    this.RewardedinterstitialADId = Platform.OS == 'ios' ? "ca-app-pub-1648645426995057/2511805357" : "ca-app-pub-1648645426995057/9376596604"
  }
  state = {


    mylist: [],
    profile: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpg3HRSCK3YCy9SpEAuAlLAWnaj7oEdbf-Rg&usqp=CAU",
    name: ''

  };

  componentDidMount() {
    const { displayName, email } = firebase.auth().currentUser
    this.setState({ name: displayName, email })
    this.display()
    this.display1()

  }

  display() {       //function to store database value in array 'mylist'
    //console.log('No send pic')
    try {

      const myitems = firebase.database().ref('users/' + firebase.auth().currentUser.uid + "/photos")
      myitems.on("value", datasnapshot => {

        try {

          this.setState({ mylist: Object.values(datasnapshot.val()) })
        }
        catch (error) {

          alert("NO POSTS YET")

        }


      })
    } catch (error) {
      alert("Error")
    }

  }

  display1() {           //function to store profile photo in 'profile' 



    firebase.database().ref('users/' + firebase.auth().currentUser.uid + "/profilephoto").on('value', datasnapshot => {

      try {

        this.setState({ profile: datasnapshot.val().profile })
      }
      catch (error) {


      }

    })
  }

  likeHandler = (item, ind) => {                //handling likes on images

    const { mylist } = this.state

    let arr = mylist.map((item, index) => {
      if (ind == index) {
        item.isLiked = !item.isLiked
      }
      return { ...item }
    })

    this.setState({ mylist: arr })
  }

  // async componentDidMount() {
  //   AdMobInterstitial.setAdUnitID(this.interstitialADId);
  //   await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
  //   await AdMobInterstitial.showAdAsync();
  // }


  renderPost = ({ item, index }) => {                            //flatlist display

    return (
      <View style={styles.item}>

        <View>
          <Image source={{ uri: item.image }} style={{ width: 370, height: 370, alignSelf: 'center' }}></Image>
        </View>

        <Text style={{ margin: 10, textAlign: 'center', fontFamily: 'American Typewriter' }}>{item.text}</Text>
        <View style={{ height: 1, width: '100%', backgroundColor: "red" }}></View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => { this.likeHandler(item, index) }}>
            <Ionicons name="md-heart" size={24} color={item.isLiked ? '#fb7777' : 'gray'} style={{ marginTop: 5 }} />
          </TouchableOpacity>

          <Text style={{ marginTop: 5, fontFamily: 'Cochin-Bold', fontSize: 16, color: "black" }}>{new Date(item.time).toDateString()}</Text>

        </View>
      </View>
    )

  }
  render() {
    return (
      <SafeAreaView >

        <View style={styles.container1}>
          <Text style={{ alignItems: 'center', margin: 20, fontWeight: "bold", fontSize: 18, color: "#fff" }}>{this.state.name} - New Feeds</Text>
          <Image source={{ uri: this.state.profile }}
            style={{ borderRadius: 30, height: 40, width: 40, alignSelf: 'center', marginRight: 20 }}></Image>

        </View>

        <View >

          <ScrollView >
            <View style={{ width: '100%', height: '100%' }}>

              <FlatList style={{ flex: 1, marginHorizontal: 20, marginVertical: 10, marginBottom: 125 }}
                data={this.state.mylist}
                renderItem={this.renderPost}
                keyExtractor={item => item.id}
                extraData={this.state}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}>

              </FlatList>
              <View style={styles.Admobcontainer}>
                <AdMobBanner
                  bannerSize="banner"
                  adUnitID={this.bannerADId}
                  servePersonalizedAds={false}
                />

              </View>



              <View style={styles.AdmobcontainerBottom}>
                <AdMobBanner
                  bannerSize="largeBanner"
                  adUnitID={this.bannerADId}
                  servePersonalizedAds={false}
                />

              </View>
            </View>

          </ScrollView>
        </View>

      </SafeAreaView>

    );
  }
}
const styles = StyleSheet.create({
  item:
  {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 5,
    marginVertical: 8
  },

  container1: {

    height: 60,
    width: '100%',
    backgroundColor: 'black',
    borderBottomColor: "red",
    borderBottomWidth: 2,
    justifyContent: 'space-between',
    flexDirection: 'row'

  },

  deleteAllButton: {
    height: 50,
    width: 200,
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: 'red',
  },
  Admobcontainer: {
    marginBottom: 20,
    marginTop: -128,
    alignItems: "center"


  },
  AdmobcontainerBottom: {
    marginBottom: 20,
    marginTop: 520,
    alignItems: "center"
  }









})
export default HomeScreen