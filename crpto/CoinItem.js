import React from 'react';
import { Card, View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Button, Image, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';

import Item from '../components/Item';
import astronaut from '../assets/astronaut.json';

const CoinItem = ({ coin }) => {

    const navigation = useNavigation();
    function formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }



    return (

        <View style={styles.container}>
            <View style={{ marginHorizontal: 20, }}>
                <Item color='black' cabecalho={coin.name}>
                    <View style={{ alignItems: 'center', justifyContent: 'right' }}>
                        <Image source={{ uri: coin.image }} style={styles.image} />
                        <Text style={styles.text}>{coin.name}</Text>
                        <Text style={styles.textSymbol}>{coin.symbol}</Text>
                        <Text style={styles.textPrice}>${coin.current_price.toFixed(3)}</Text>
                        <Text style={[
                            styles.pricePercentage,
                            coin.price_change_percentage_24h > 0
                                ? styles.priceUp
                                : styles.priceDown,
                        ]}
                        >
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </Text>
                        <Text style={styles.textSymbol}>Market Cap : $ {coin.market_cap.toFixed(3)}</Text>
                        <Text style={styles.textSymbol}>Total Volume : $ {coin.total_volume.toFixed(1)}</Text>

                        <Text style={styles.textSymbol}>Total Supply :${coin.total_supply}</Text>
                    </View>
                </Item>

            </View>

        </View>

    );
};

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: "#242C40",
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",


    },
    containerNames: {
        marginLeft: 20,



    },
    detailButton: {

        position: 'absolute',
        bottom: 5,
        right: -100,
    },
    coinName: {
        flexDirection: "row",

    },
    containerPrice: {
        textAlign: "center",

    },
    image: {
        width: 60,
        height: 60,
    },
    text: {
        color: "#ffffff",
    },
    textSymbol: {
        color: "white",
        textTransform: "uppercase",
        textAlign: "left",
    },
    pricePercentage: {
        textAlign: "right",
    },
    textPrice: {
        color: "#fff",
        textAlign: "right",
    },
    priceUp: {
        color: "#00B5B9",
    },
    priceDown: {
        color: "#fc4422",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'gray'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        marginVertical: 20,
        alignItems: 'center',

    },
    button: {
        height: 100,
        width: 150,
        borderRadius: 20,
        backgroundColor: '#fefefe',
        marginHorizontal: 9,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: .8,
        borderWidth: 2

    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    }
});

export default CoinItem;