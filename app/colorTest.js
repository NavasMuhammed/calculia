import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScore } from "../store/scoreSlice";
import { setcount4Qstn } from "../store/count4QstnSlice";
import { setcount4Score } from "../store/count4ScoreSlice";
import axios from "axios";
import { images } from "./data";

const DsirectionTest = ({ navigation }) => {
  const [newqn, setNewqn] = useState([]);
  const [qN, setQN] = useState(0);
  const [qNarray, setQNarray] = useState([]);
  const [count, setCount] = useState(0);
  const levels = useSelector((state) => state.levels.value);

  useEffect(() => {
    setQN(Math.floor(Math.random() *5));
    // setQNarray([...qNarray, qN]);
    console.log(levels);
    dispatch(setScore(0));
  }, []);
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();
  const options = ["RED", "BLUE", "BLACK", "GREEN", "WHITE", "YELLOW"];
  const [isOptionDisabled, setIsOptionDisabled] = useState(true);
  const [ans, setAns] = useState("");
  const qnArr = ["YELLOW", "WHITE", "GREEN", "BLACK", "BLUE", "RED"];
  const [response, setResponse] = useState(0);
  const reqQuestions = [5, 10, 15];
  const [achievment, setAchievment] = useState(false);

  const details = useSelector((state) => state.details.value);
  // const score = useSelector((state) => state.score.value);
  const count4Qstn = useSelector((state) => state.count4Qstn.value);
  const count4Score = useSelector((state) => state.count4Score.value);

  useEffect(() => {
    (async () => {
      console.log("update called");
      await update();
    })();
  }, [count4Qstn]);

  const update = async () => {
    await axios
      .post("http://10.0.2.2:5000/update", {
        data: {
          countQstn: count4Qstn,
          countScore: count4Score,
          name: details.payload.name,
          reqFields: ["count4Qstn", "count4Score"],
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

  const validateAns = (response) => {
    setResponse(response);
    if(count==reqQuestions[levels-1]-1){
      if(score/reqQuestions[levels-1]>=0.8){
        setAchievment(true);
      }
    }
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
        dispatch(setScore(score + 1));
        dispatch(setcount4Score(count4Score + 1));
        console.log(count4Score + "reach");
      }
      dispatch(setcount4Qstn(count4Qstn + 1));
    }, 500);
  };
  const handlePress = () => {
    setQN(Math.floor(Math.random() * 5));
    // if(qNarray.includes(qN)){
    //   setNewqn([0,1,2,3,4,5].filter((item) => !qNarray.includes(item)));
    //   setQN(newqn[0]);
    //   // console.log(newqn);
    // }
    // setQNarray([...qNarray, qN]);
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
      {count <= reqQuestions[levels-1] ? (
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
          {active && (
            <View
              style={{
                left: "8%",
                top: "25%",
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
                    source={images.colors.level1.imgPath}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  ></Image>
                ) : level == 2 ? (
                  <Image
                    source={images.colors.level2.imgPath}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  ></Image>
                ) : level == 3 ? (
                  <Image
                    source={images.colors.level3.imgPath}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  ></Image>
                ) : level == 4 ? (
                  <Image
                    source={images.colors.level4.imgPath}
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
                  {images.colors.level1.title}
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
                  {images.colors.level2.title}
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
                  {images.colors.level3.title}
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
                  {images.colors.level4.title}
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
                  paddingTop: 40,
                  marginBottom: 20,
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
          {achievment && <Text style={styles.mainTitle}>Achievment Unlocked</Text>}
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
