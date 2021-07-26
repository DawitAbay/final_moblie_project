import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import addFollwers from "../listname/addFollwers";


const Stack = createStackNavigator();

const globalScreenOptions = {
    headerStyle: { backgroundColor: "#2C6BED" },
    headerTitleStyle: { color: "red" },
    headerTintColor: "white",
};

export default function followek() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Follow Page" component={addFollwers} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

