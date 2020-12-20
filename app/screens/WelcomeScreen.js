import React from "react"
import { StyleSheet, View, Image, Text } from "react-native"

import AppButton from '../components/AppButton'
import Screen from "../components/Screen"
import colours from "../config/colours"
import defaultStyles from "../config/defaultStyles"


const WelcomeScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/BearFitnessLogo.png")} />
        <Text style={styles.caption}>Workouts that suit you</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title="Sign In" onPress={() => navigation.navigate("Login")} />
        <AppButton title="Register" colour="secondary" onPress={() => navigation.navigate("Register")}/>
      </View>
    </Screen>
      
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#061833"
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  caption: {
    ...defaultStyles.text,
    color: colours.secondary,
    fontSize: 22,
    paddingTop: 20
  },
});

export default WelcomeScreen;
