import React from 'react';
import { Card, state, View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Button, Image, Alert } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

const coinDetail = ({ coin }) => {
    state = {
        name: '',
    };
    return (
        <View style={styles.containerItem}>
            <View style={styles.containerNames}>
                <Text style={styles.text}> {coin.name}</Text>

            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    containerItem: {
        backgroundColor: "red",



    },

});



export default coinDetail;