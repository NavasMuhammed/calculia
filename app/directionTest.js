import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect } from "react";
import { useRef } from "react";
import { TextInput } from "react-native-gesture-handler";

const DsirectionTest = () => {
  const first = useRef();
  const newname = first.current;
  console.log(newname);
  const num = 4;
  const name1 = false;
  const name2 = false;
  const name3 = false;
  const name4 = false;

  useEffect(() => {
    const randonNumber = 3;
    // {[`name${randonNumber}`]}=true;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>GUESS THE DIRECTION</Text>
      <View style={styles.questionBox}>
        <View style={styles.row1}>
          {name1 ? (
            <View style={styles.box1}></View>
          ) : (
            <View style={styles.box}></View>
          )}
        </View>

        <View style={styles.row2}>
          <View style={styles.box}></View>
          <View style={styles.boy}>
            <Image source={require("./child.png")} />
          </View>
          <View style={styles.box}></View>
        </View>
        <View style={styles.row3}>
          <View style={styles.box}></View>
        </View>
      </View>
      <View style={styles.optionsBox}>
        <View style={styles.row2}>
          <TouchableOpacity style={styles.boxO}>
            <Text style={styles.optionsText}>UP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxO}>
            <Text style={styles.optionsText}>DOWN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row2}>
          <TouchableOpacity style={styles.boxO}>
            <Text style={styles.optionsText}>LEFT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.boxO}>
            <Text style={styles.optionsText}>RIGHT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity  style={styles.submitWrapper}>
                <Text style={styles.submitTitle}>Next</Text>
            </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DsirectionTest;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#141527",
  },
  mainTitle: {
    color: "#fff",
    fontSize: 24,
    // top: 0,
    fontWeight: "900",
  },
  questionBox: {
    alignItems: "center",
    // top: 30,
  },
  box1: {
    width: 80,
    height: 80,
    borderRadius: 14,
    backgroundColor: "#fff",
    margin: 20,
  },
  box: {
    width: 80,
    height: 80,
    borderRadius: 14,
    backgroundColor: "#1E1F3B",
    margin: 20,
  },
  boxO: {
    width: 80,
    height: 80,
    borderRadius: 14,
    backgroundColor: "#1E1F3B",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  boy: {},
  row1: {
    alignItems: "center",
  },
  row2: {
    width: "100%",
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
  },
  row3: {
    alignItems: "center",
  },
  optionsBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 30,
  },
  optionsText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },
  submitWrapper: {
    top: 15,
    borderRadius: 15,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: "#FC6746",
    padding: 20,
    width: "70%",
    paddingRight: 90,
    paddingLeft: 90,
    marginTop: 30,
},
submitTitle: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '900',
},
});



