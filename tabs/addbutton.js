import React from 'react'
import { View, StyleSheet, TouchableHighlight, Button, Text, Platform, TouchableOpacity } from 'react-native'
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
    setTestDeviceIDAsync,
} from 'expo-ads-admob';
//add button in tab navigator

class AddButton extends React.Component {
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

    async componentDidMount() {
        // AdMobRewarded.setAdUnitID(this.RewardedinterstitialADId)

        // await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
        // await AdMobInterstitial.showAdAsync();
    }
    render() {
        return (

            <TouchableOpacity
                onPress={() => this.componentDidMount()}
            >
                <View style={{ position: 'flex', alignItems: 'center', marginRight: 5, marginTop: 80 }}>
                    <View style={styles.button}>
                        <TouchableOpacity>
                            <Text style={{ color: "white", textAlign: 'center', fontSize: 25 }}>+</Text>
                        </TouchableOpacity>

                    </View>


                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    button: {
        alignItems: 'center',
        justifyContent: "center",
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 36,
        position: 'absolute',
        top: -60,
        shadowColor: '#7F58FF',
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 }

    }




})

export default AddButton