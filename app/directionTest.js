import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScore } from "../store/scoreSlice";
import { setcount3Qstn } from "../store/count3QstnSlice";
import { setcount3Score } from "../store/count3ScoreSlice";
import axios from "axios";
import { images } from "./data";

const DsirectionTest = ({ navigation }) => {
  const [qN, setQN] = useState(0);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setQN(Math.floor(Math.random() * 4));
    dispatch(setScore(0));
  }, []);
  const details = useSelector((state) => state.details.value);
  const score = useSelector((state) => state.score.value);
  const count3Qstn = useSelector((state) => state.count3Qstn.value);
  const count3Score = useSelector((state) => state.count3Score.value);

  const dispatch = useDispatch();
  const options = ["UP", "LEFT", "RIGHT", "DOWN"];
  const qnArr = ["DOWN", "LEFT", "UP", "RIGHT"];
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
    addScore(response);
  };

  useEffect(() => {
    (async () => {
      console.log("update called");
      await update();
    })();
  }, [count3Qstn]);

  const update = async () => {
    await axios
      .post("http://10.0.2.2:5000/update", {
        data: {
          countQstn: count3Qstn,
          countScore: count3Score,
          name: details.payload.name,
          reqFields: ["count3Qstn", "count3Score"],
        },
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addScore = (response) => {
    setTimeout(() => {
      if (response == qnArr[qN]) {
        dispatch(setScore(score + 1));
        dispatch(setcount3Score(count3Score + 1));
        console.log(count3Score + "reach");
      }
      dispatch(setcount3Qstn(count3Qstn + 1));
    }, 500);
  };

  const handlePress = () => {
    // setQN(qN + 1);
    setQN(
      [0, 1, 2, 3].filter((item) => item != qN)[Math.floor(Math.random() * 3)]
    );
    setCount(count + 1);
    resetToDefault();
  };

  const resetToDefault = () => {
    setResponse(null);
    setAns(null);
    setIsOptionDisabled(false);
  };
  let level = 3;
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (qN == count) {
      setActive(!active);
    }
  }, []);
  return (
    <>
      {count < 4 ? (
        <SafeAreaView style={styles.container}>
          <Text style={styles.mainTitle}>FIND DIRECTION OF THE BOX</Text>
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
                <Image source={require("./img/child.png")} />
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
        <>
          <SafeAreaView style={styles.containerL}>
            {active && (
              <View
                style={{
                  left: "8%",
                  top: "22%",
                  willChange: "transform",
                  marginLeft: "auto",
                  marginRight: "auto",
                  height: 450,
                  alignItems: "center",
                  justifyContent: "center",
                  width: 350,
                  borderRadius: 20,
                  backgroundColor: "#1E1F3B",
                  position: "absolute",
                  zIndex: 99,
                  shadowOffset: { width: -2, height: 4 },
                  shadowColor: "#000",
                  shadowOpacity: 2,
                  shadowRadius: 10,
                  elevation: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    padding: 15,
                    position: "absolute",
                    left: "86%",
                    top: 0,
                    // backgroundColor: "#ffff",
                  }}
                  onPress={() => setActive(!active)}
                >
                  <Image source={require("./img/Cross.png")}></Image>
                </TouchableOpacity>

                <Text
                  style={{
                    color: "#fff",
                    fontSize: 24,
                    fontWeight: "900",
                  }}
                >
                  Achievements Unlocked
                </Text>
                <View
                  style={{
                    marginTop: 15,
                    borderWidth: 2,
                    borderRadius: 30,
                    borderColor: "#FC6746",
                  }}
                >
                  {level == 1 ? (
                    <Image
                      source={images.directions.level1.imgPath}
                      style={{
                        width: 100,
                        height: 100,
                      }}
                    ></Image>
                  ) : level == 2 ? (
                    <Image
                      source={images.directions.level2.imgPath}
                      style={{
                        width: 100,
                        height: 100,
                      }}
                    ></Image>
                  ) : level == 3 ? (
                    <Image
                      source={images.directions.level3.imgPath}
                      style={{
                        width: 100,
                        height: 100,
                      }}
                    ></Image>
                  ) : level == 4 ? (
                    <Image
                      source={images.directions.level4.imgPath}
                      style={{
                        width: 100,
                        height: 100,
                      }}
                    ></Image>
                  ) : (
                    <></>
                  )}
                </View>
                {level == 1 ? (
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 20,
                      fontWeight: "700",
                      paddingTop: 30,
                    }}
                  >
                    {images.directions.level1.title}
                  </Text>
                ) : level == 2 ? (
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 20,
                      fontWeight: "700",
                      paddingTop: 30,
                    }}
                  >
                    {images.directions.level2.title}
                  </Text>
                ) : level == 3 ? (
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 20,
                      fontWeight: "700",
                      paddingTop: 30,
                    }}
                  >
                    {images.directions.level3.title}
                  </Text>
                ) : level == 4 ? (
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 20,
                      fontWeight: "700",
                      paddingTop: 30,
                    }}
                  >
                    {images.directions.level4.title}
                  </Text>
                ) : (
                  <></>
                )}

                <Text
                  style={{
                    color: "#646577",
                    fontWeight: "900",
                    paddingTop: 10,
                    fontSize: 16,
                  }}
                >
                  Correct Answered 95/100
                </Text>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "900",
                    color: "#fff",
                    paddingTop: 30,
                    marginBottom: 15,
                  }}
                >
                  CONGRATULATION
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setActive(!active);
                  }}
                  style={styles.submitWrapper}
                >
                  <Text style={styles.submitTitle}>Next</Text>
                </TouchableOpacity>
              </View>
            )}
            <Text style={styles.mainTitle}>SCORE</Text>
            <Text style={styles.mainTitle}>{score}</Text>
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
        </>
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
