import React from "react"
import { StyleSheet, View, Image, Text } from "react-native"
import { LinearGradient } from 'expo-linear-gradient'

import AppButton from '../components/AppButton'
import Screen from "../components/Screen"
import colours from "../config/colours"
import defaultStyles from "../config/defaultStyles"


const WelcomeScreen = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
        <LinearGradient
        // Background Linear Gradient
        colors={['#0f3057', '#00587a', '#008891', '#e7e7de']}
        start={[1, 0]}
        end={[0, 1]}
        locations={[0.0, 0.33, 0.67, 1.0]}
        style={styles.background}
      />
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/b-fit-logo.png")} />
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
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  bgLogo: {
    flex: 1,
    resizeMode: "cover",
    width: '100%'
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: '80%',
    height: '100%',
  },
  logoContainer: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
  caption: {
    ...defaultStyles.text,
    color: colours.plightEve,
    fontSize: 22,
    paddingTop: 20
  },
});

export default WelcomeScreen;
