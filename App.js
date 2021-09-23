/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";

import {
     SafeAreaView,
     ScrollView,
     StatusBar,
     StyleSheet,
     Text,
     useColorScheme,
     View,
} from "react-native";

const App = () => {
     return (
          <SafeAreaView style={styles.container}>
               <View>
                    <Text>Sample Project</Text>
               </View>
          </SafeAreaView>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
});

export default App;
