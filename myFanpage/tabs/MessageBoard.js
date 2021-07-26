import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Message/HomeScreen";
import AddChatScreen from "../Message/AddChatScreen";
import ChatScreen from "../Message/ChatScreen";
import start from "../componentschat/Start"

import Chat from '../componentschat/Chat';

const Stack = createStackNavigator();

const globalScreenOptions = {
    headerStyle: { backgroundColor: "#2C6BED" },
    headerTitleStyle: { color: "black" },
    headerTintColor: "white",
};

export default function MessageBoard() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={start} />
                <Stack.Screen
                    name='Chat'
                    component={Chat}
                    options={({ route }) => ({ title: route.params.name })}
                />
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