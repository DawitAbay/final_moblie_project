import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppCry from "../crpto/AppCry";
import coinDetail from "../crpto/coinDetail";

const Stack = createStackNavigator();

const globalScreenOptions = {
    headerStyle: { backgroundColor: "#2C6BED" },
    headerTitleStyle: { color: "red" },
    headerTintColor: "white",
};

export default function HomeCrypto() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Crypto Market" component={AppCry} />
                <Stack.Screen name="coin Detail" component={coinDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
    },
});