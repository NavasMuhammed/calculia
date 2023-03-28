import {
  ImageBackground,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../store/detailsSlice";

const ProgressSelectionPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Select Category</Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("testPage")}
        style={styles.ButtonContainer}
      >
        <ImageBackground
          source={require("./stati.png")}
          style={styles.bgNImage}
        >
          <Text style={styles.buttonText}>STATISTICS</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("achievment")}
        style={styles.ButtonContainer}
      >
        <ImageBackground
          source={require("./achiv.png")}
          style={styles.bgcImage}
        >
          <Text style={styles.buttonCText}>ACHIEVEMENTS</Text>
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProgressSelectionPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#141527",
  },
  titleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
  },
  mainTitle: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 32,
  },
  ButtonContainer: {
    width: 300,
    height: 100,
    flex: 1,
    bottom: 25,
  },
  bgNImage: {
    width: "100%",
    height: "78%",
    alignItems: "center",
    justifyContent: "center",
  },

  bgcImage: {
    width: "100%",
    height: "78%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 24,
    bottom: 6,
  },
  buttonCText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 24,
    bottom: 8,
  },
});
