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
import Animated, { ZoomIn } from "react-native-reanimated";

const Achievement = ({ navigation }) => {
  const [active, setActive] = useState(false);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState();
  const modalData = {
    number: [],
    count: [],
    direction: [],
    color: [],
  };
  const handlePress = () => {
    setIndex(1000);
    setActive(!active);
  };
  return (
    <SafeAreaView style={styles.container}>
      {active && (
        <View
          entering={ZoomIn}
          style={{
            left: "8%",
            top: "20%",
            willChange: "transform",
            marginLeft: "auto",
            marginRight: "auto",
            height: 400,
            alignItems: "center",
            justifyContent: "center",
            width: 350,
            borderRadius: 20,
            backgroundColor: "#1E1F3B",
            position: "absolute",
            zIndex: index,
            shadowOffset: { width: -2, height: 4 },
            shadowColor: "#000",
            shadowOpacity: 2,
            shadowRadius: 10,
            elevation: 10,
          }}
        >
          <TouchableOpacity style={styles.cross} onPress={() => handlePress()}>
            <Image source={require("./Cross.png")}></Image>
          </TouchableOpacity>
          <Text style={styles.modalTitle}>Achievements Unlocked</Text>
          <Text style={styles.achivedTitle}>Number master</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={styles.progressBarInner}></View>
            </View>
          </View>

          <Text style={styles.progresText}>Correct Answered 95/100</Text>
          <Text style={styles.Congrates}>CONGRATULATION</Text>
        </View>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Achievements</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.column}>
            <TouchableOpacity
              onPress={() => handlePress()}
              style={styles.button}
            >
              <Image
                source={require("./numberA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePress()}
              style={styles.button}
            >
              <Image
                source={require("./countA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handlePress()}
              style={styles.button}
            >
              <Image
                source={require("./directionA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePress()}
              style={styles.button}
            >
              <Image
                source={require("./colorA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity
              onPress={() => handlePress()}
              style={styles.button}
            >
              <Image
                source={require("./numberA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePress()}
              style={styles.button}
            >
              <Image
                source={require("./countA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => handlePress()}
              style={styles.button}
            >
              <Image
                source={require("./directionA.png")}
                style={styles.image}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePress()}
              style={styles.button}
            >
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
  modal: {
    left: "8%",
    top: "20%",
    willChange: "transform",
    marginLeft: "auto",
    marginRight: "auto",
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    borderRadius: 20,
    backgroundColor: "#1E1F3B",
    position: "absolute",
    zIndex: 100,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#000",
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 10,
  },
  cross: {
    padding: 15,
    position: "absolute",
    left: "86%",
    top: 0,
    // backgroundColor: "#ffff",
  },
  progressContainer: {
    top: 20,
    width: "100%",
    height: "10%",
    // padding:0
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "#fff",
  },
  progresText: {
    color: "#646577",
    fontWeight: "900",
    paddingTop: 10,
    fontSize: 16,
  },
  progressBar: {
    width: "60%",
    height: "35%",
    backgroundColor: "#646577",
    borderRadius: 20,
  },
  progressBarInner: {
    width: "90%",
    height: "100%",
    backgroundColor: "#FC6746",
    borderRadius: 20,
  },
  achivedTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    paddingTop: 30,
  },
  modalTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
  },
  Congrates: {
    fontSize: 24,
    fontWeight: "900",
    color: "#fff",
    paddingTop: 40,
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
