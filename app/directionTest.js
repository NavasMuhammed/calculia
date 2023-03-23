import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useRef,useEffect } from "react";
const DsirectionTest = ({ navigation }) => {
  const [qN, setQN] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setQN(Math.floor(Math.random() * 4));
  }, [])
  
  const options = ["UP", "LEFT", "RIGHT", "DOWN"];
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const [ans, setAns] = useState("");
  const [response, setResponse] = useState(0);
  const validateAns = (response) => {
    setResponse(response);
    setIsOptionDisabled(true);
    if (qN == 0) {
      setAns("DOWN");
    } else if (qN == 1) {
      setAns("LEFT");
    } else if (qN == 2) {
      setAns("UP");
    } else if (qN == 3) {
      setAns("RIGHT");
    }
  };
  const handlePress = () => {
    // setQN(qN + 1);
    setQN(Math.floor(Math.random() * 4));
    setCount(count + 1);
    resetToDefault();
  };

  const resetToDefault = () => {
    setResponse(null);
    setAns(null);
    setIsOptionDisabled(false);
  };
  return (
    <>
      {count <= 3 ? (
        <SafeAreaView style={styles.container}>
          <Text style={styles.mainTitle}>GUESS THE DIRECTION</Text>
          <View style={styles.questionBox}>
            <View style={styles.row1}>
              {qN == 2 ? (
                <View style={styles.boxU}></View>
              ) : (
                <View style={styles.box}></View>
              )}
            </View>

            <View style={styles.row2}>
              {qN == 1 ? (
                <View style={styles.boxU}></View>
              ) : (
                <View style={styles.box}></View>
              )}
              <View style={styles.boy}>
                <Image source={require("./child.png")} />
              </View>
              {qN == 3 ? (
                <View style={styles.boxU}></View>
              ) : (
                <View style={styles.box}></View>
              )}
            </View>
            <View style={styles.row3}>
              {qN == 0 ? (
                <View style={styles.boxU}></View>
              ) : (
                <View style={styles.box}></View>
              )}
            </View>
          </View>
          <View style={styles.optionsBox}>
            {options.map((option) => (
              <TouchableOpacity
                style={{
                  width: 80,
                  height: 80,
                  backgroundColor: "#1E1F3B",
                  margin: 10,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:
                    option == ans
                      ? "#00FF19"
                      : option == response
                      ? "#FF0330"
                      : "#1E1F3B",
                }}
                key={option}
                onPress={() => validateAns(option)}
              >
                <Text style={styles.optionsText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {isOptionDisabled && (
            <TouchableOpacity
              onPress={() => {
                handlePress();
              }}
              style={styles.submitWrapper}
            >
              <Text style={styles.submitTitle}>Next</Text>
            </TouchableOpacity>
          )}
        </SafeAreaView>
      ) : (
        <SafeAreaView style={styles.containerL}>
          <Text style={styles.mainTitle}>GAME OVER</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("testSelectionPage");
            }}
            style={styles.submitWrapperL}
          >
            <Text style={styles.submitTitle}>Back to Menu</Text>
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </>
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
  submitWrapperL: {
    top: 100,
    borderRadius: 15,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#FC6746",
    padding: 20,
    width: "70%",
    paddingRight: 90,
    paddingLeft: 90,
  },
  containerL: {
    flex: 1,
    gap: 100,
    justifyContent: "flex-start",
    alignItems: "center",
    justifyContent: "center",
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
    backgroundColor: "#141527",
    margin: 20,
  },
  boxU: {
    width: 80,
    height: 80,
    borderRadius: 14,
    backgroundColor: "#FC6746",
    margin: 20,
  },
  boxL: {
    width: 80,
    height: 80,
    borderRadius: 14,
    backgroundColor: "#1E1F3B",
    margin: 20,
  },
  boxR: {
    width: 80,
    height: 80,
    borderRadius: 14,
    backgroundColor: "#1E1F3B",
    margin: 20,
  },
  boxD: {
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
  boy: {
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  row1: {
    alignItems: "center",
  },
  row2: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  row3: {
    alignItems: "center",
  },
  optionsBox: {
    alignSelf: "center",
    width: "50%",
    marginBottom: 30,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  optionsText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "900",
  },
  submitWrapper: {
    borderRadius: 15,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#FC6746",
    padding: 20,
    width: "70%",
    paddingRight: 90,
    paddingLeft: 90,
  },
  submitTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "900",
  },
});
