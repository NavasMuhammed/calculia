import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState,useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScore } from "../store/scoreSlice";
const DsirectionTest = ({ navigation }) => {
  const [newqn, setNewqn] = useState([]);
  const [qN, setQN] = useState(0);
  const [qNarray, setQNarray] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setQN(Math.floor(Math.random() *6));
    setQNarray([...qNarray, qN]);
    dispatch(setScore(0));
  }, [])
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();
  const options = ["RED", "BLUE", "BLACK", "GREEN", "WHITE", "YELLOW"];
  const [isOptionDisabled, setIsOptionDisabled] = useState(true);
  const [ans, setAns] = useState("");
  const qnArr = ["YELLOW", "WHITE", "GREEN", "BLACK", "BLUE", "RED"];
  const [response, setResponse] = useState(0);
  const validateAns = (response) => {
    setResponse(response);
    setIsOptionDisabled(true);
    if (qN == 0) {
      setAns("YELLOW");
    } else if (qN == 1) {
      setAns("WHITE");
    } else if (qN == 2) {
      setAns("GREEN");
    } else if (qN == 3) {
      setAns("BLACK");
    } else if (qN == 4) {
      setAns("BLUE");
    } else if (qN == 5) {
      setAns("RED");
    }
    addScore(response);
  };
  const addScore = (response) => {
    setTimeout(() => {
    if (response == qnArr[qN]) {
      dispatch(setScore(score + 1))
      console.log(score+"reach");
    }
  },500)};
  const handlePress = () => {
    setQN(Math.floor(Math.random() * 6));
    if(qNarray.includes(qN)){
      setNewqn([0,1,2,3,4,5].filter((item) => !qNarray.includes(item)));
      setQN(newqn[0]);
      // console.log(newqn);
    }
    setQNarray([...qNarray, qN]);
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
      {count <= 6 ? (
        <SafeAreaView style={styles.container}>
          <Text style={styles.mainTitle}>GUESS THE COLOUR</Text>
          <View style={styles.questionBox}>
            <View
              style={{
                width: 250,
                height: 250,
                backgroundColor:
                  qN == 0
                    ? "yellow"
                    : qN == 1
                    ? "white"
                    : qN == 2
                    ? "green"
                    : qN == 3
                    ? "black"
                    : qN == 4
                    ? "blue"
                    : "red",
                borderRadius: 15,
                margin: 30,
              }}
            ></View>
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
          <Text style={styles.mainTitle}>YOUR SCORE</Text>
          <Text style={styles.mainTitle}>{score}</Text>
          <Text style={styles.mainTitle}>GAME OVER</Text>
          <TouchableOpacity
            onPress={() => {
              setCount(0);
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
    top: 15,
    fontWeight: "900",
  },
  questionBox: {
    alignItems: "center",
    // top: 30,
  },
  colourBox: {
    width: 250,
    height: 250,
    backgroundColor: "#fff",
    borderRadius: 15,
    margin: 30,
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
