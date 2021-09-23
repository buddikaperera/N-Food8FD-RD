/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *  <Stack.Screen name="Home" component={Tabs} />
 * @format
 * @flow strict-local
 */

import React from "react";

import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Home, Restaurant, OrderDelivery } from "./screens";
import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
     return (
          <NavigationContainer>
               <Stack.Navigator
                    screenOptions={{
                         headerShown: false,
                    }}
                    initialRouteName={"Home"}
               >
                    <Stack.Screen name="Home" component={Tabs} />
                    <Stack.Screen name="Restaurant" component={Restaurant} />
                    <Stack.Screen
                         name="OrderDelivery"
                         component={OrderDelivery}
                    />
               </Stack.Navigator>
          </NavigationContainer>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
});

export default App;
