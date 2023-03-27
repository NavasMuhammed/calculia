import {
  Image,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../store/detailsSlice";

const Achievement = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Achievements</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.column}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("./numberA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("./countA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Image
                source={require("./directionA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("./colorA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("./numberA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("./countA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
              <Image
                source={require("./directionA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("./colorA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Achievement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#141527",
  },
  titleContainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
    // backgroundColor: "#000",
  },
  mainTitle: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 32,
  },
  column: {
    // backgroundColor: "#fff",
    // width: "100%",
    // padding: 20,
    // margin: 90,
    width: 400,
    height: "25%",
    flexWrap: "wrap",
    // flexDirection: "row",
    // alignItems: "center",
    paddingLeft: 50,
    marginTop: 25,
    // justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    // width:150,
    height: 125,
    margin: 20,
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
  },
  buttonTitle: {
    fontWeight: "900",
    color: "#fff",
    fontSize: 16,
  },
});
