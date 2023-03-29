import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../store/detailsSlice";
import { setcount2Qstn } from "../store/count2QstnSlice";
import { setcount2Score } from "../store/count2ScoreSlice";
import axios from "axios";
import { setScore } from "../store/scoreSlice";
import * as Progress from "react-native-progress";
import { images } from "./data";
// import a from './img/1.png'
const data = [
  {
    id: 1,
    Image: require("./img/1.png"),
    style: "styles.ballImage1",
  },
  {
    id: 2,
    Image: require("./img/2.png"),
    style: "styles.ballImage2",
  },
  {
    id: 3,
    Image: require("./img/3.png"),
    style: "styles.ballImage5",
  },
  {
    id: 4,
    Image: require("./img/4.png"),
    style: "styles.ballImage5",
  },
  {
    id: 5,
    Image: require("./img/5.png"),
    style: "styles.ballImage5",
  },
  {
    id: 6,
    Image: require("./img/6.png"),
    style: "styles.ballImage5",
  },
  {
    id: 7,
    Image: require("./img/7.png"),
    style: "styles.ballImage5",
  },
  {
    id: 8,
    Image: require("./img/8.png"),
    style: "styles.ballImage7",
  },
  {
    id: 9,
    Image: require("./img/9.png"),
    style: "styles.ballImage8",
  },
];

const CountingTest = ({ navigation }) => {
  const details = useSelector((state) => state.details.value);
  const count2Qstn = useSelector((state) => state.count2Qstn.value);
  const count2Score = useSelector((state) => state.count2Score.value);
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const [ans, setAns] = useState(Number);
  const [correctAnswer, setCorrectAnswer] = useState(Number);
  const [qnNum, setQnNum] = useState(0);
  const [selectedqn, setselectedqn] = useState(Number);
  const [response, setResponse] = useState(0);
  const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const alreadyselected = [];
  let random = 1;
  const questions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score.value);

  useEffect(() => {
    dispatch(setScore(0));
    selectpic();
  }, []);

  useEffect(() => {
    (async () => {
      console.log("update called");
      await update();
    })();
  }, [count2Qstn]);

  const update = async () => {
    await axios
      .post("http://10.0.2.2:5000/update", {
        data: {
          countQstn: count2Qstn,
          countScore: count2Score,
          name: details.payload.name,
          reqFields: ["count2Qstn", "count2Score"],
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

  const incrementQnNum = () => {
    setQnNum(qnNum + 1);
    selectpic();
  };
  const selectpic = () => {
    random = Math.floor(Math.random() * questions.length);
    while (alreadyselected.includes(random)) {
      random = Math.floor(Math.random() * questions.length);
      console.log(random);
    }
    setselectedqn(random);
    alreadyselected.push(random);
  };

  const handlePress = () => {
    incrementQnNum();
    resetToDefault();
  };

  const resetToDefault = () => {
    setResponse(null);
    setAns(null);
    setIsOptionDisabled(false);
  };

  const validateAns = (response) => {
    setResponse(response);
    // setAns(correctAnswer);
    setIsOptionDisabled(true);
    setAns(selectedqn + 1);
    addScore(response);
  };
  const addScore = (response) => {
    if (response == selectedqn + 1) {
      dispatch(setScore(score + 1));
      dispatch(setcount2Score(count2Score + 1));
      console.log(count2Score + "reach");
    }
    console.log("qn updated");
    dispatch(setcount2Qstn(count2Qstn + 1));
  };
  let level = 3;
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (qnNum < 9) {
      setActive(!active);
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {qnNum <= 9 ? (
        <>
          <View style={styles.progressContainer}>
            <Progress.Bar
              progress={qnNum / 10}
              color="#FC6746"
              unfilledColor={"#646577"}
              borderRadius={50}
              borderWidth={0}
              height={20}
              width={300}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>Question {qnNum}/10</Text>
          </View>

          <View style={styles.questionContainer}>
            <Text style={styles.question}>
              <Text>How Many balls are in the image</Text>
            </Text>
          </View>
          <View style={styles.imageContainer}>
            <View style={styles.ballContainer}>
              <Image style={styles.image} source={data[selectedqn].Image} />
            </View>
          </View>
          <View style={styles.optionContainerBalls}>
            {options.map((option) => (
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 60,
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
                <Text style={styles.buttonTitle1}>{option}</Text>
              </TouchableOpacity>
            ))}
            {/* {isOptionDisabled && <TouchableOpacity onPress={() => handlePress()
                } style={styles.submitWrapper1}>
                    <Text style={styles.submitTitle1}>Next</Text>
                </TouchableOpacity>
                } */}
          </View>
          {isOptionDisabled && (
            <TouchableOpacity
              onPress={() => handlePress()}
              style={styles.submitWrapper}
            >
              <Text style={styles.submitTitle}>Next</Text>
            </TouchableOpacity>
          )}
        </>
      ) : (
        <SafeAreaView style={styles.container}>
          {active && (
            <View
              style={{
                left: "8%",
                top: "20%",
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
                    source={images.counts.level1.imgPath}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  ></Image>
                ) : level == 2 ? (
                  <Image
                    source={images.counts.level2.imgPath}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  ></Image>
                ) : level == 3 ? (
                  <Image
                    source={images.counts.level3.imgPath}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  ></Image>
                ) : level == 4 ? (
                  <Image
                    source={images.counts.level4.imgPath}
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
                  {images.counts.level1.title}
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
                  {images.counts.level2.title}
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
                  {images.counts.level3.title}
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
                  {images.counts.level4.title}
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
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>Score: {score}</Text>
            <Text style={styles.mainTitle}>GAME OVER</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("testSelectionPage");
            }}
            style={styles.submitWrapper}
          >
            <Text style={styles.submitTitle}>Back to Menu</Text>
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default CountingTest;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#141527",
  },
  addContainer: {
    flexDirection: "row",
  },
  addIcon: {
    margin: 5,
    marginTop: 30,
    width: 58,
    height: 60,
  },
  addImageRight: {
    width: 105,
    height: 150,
  },
  addImageLeft: {
    width: 102,
    height: 105,
  },

  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  ballContainer: {
    alignSelf: "center",

    overflow: "hidden",
  },
  optionContainerBalls: {
    alignSelf: "center",
    width: "80%",
    height: 300,
    // containContent: true,
    // overflow: "hidden",
    // // flex: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    // padding: 80,
    alignItems: "center",
    justifyContent: "center",
    top: 55,
    // backgroundColor: "#000"
  },
  ballOption: {
    width: 80,
    height: 80,
    backgroundColor: "#1E1F3B",
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  titleContainer: {
    // paddingTop: 55,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    // width: "100%",
    // height: "10%",
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#fff",
  },
  questionContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "10%",
    // bottom: 20,
  },
  question: {
    fontSize: 24,
    fontWeight: "900",
    color: "#fff",
  },
  progressContainer: {
    // top: -60,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  progressBar: {
    width: "80%",
    height: "15%",
    backgroundColor: "#646577",
    borderRadius: 20,
  },
  progressBarInner: {
    width: "10%",
    height: "100%",
    backgroundColor: "#FC6746",
    borderRadius: 20,
  },
  buttonsContainer: {
    alignItems: "center",
  },

  submitWrapper: {
    top: -30,
    borderRadius: 15,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#FC6746",
    padding: 20,
    width: "70%",
    paddingRight: 90,
    paddingLeft: 90,
    marginTop: 30,
  },
  submitTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "900",
  },
  submitWrapper1: {
    // top: -50,
    borderRadius: 15,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "#FC6746",
    padding: 20,
    width: "70%",
    paddingRight: 90,
    paddingLeft: 90,
    marginTop: 30,
  },
  submitTitle1: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "900",
  },
  buttonTitle: {
    color: "#646577",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonTitle1: {
    color: "#646577",
    fontSize: 18,
    fontWeight: "900",
  },
  inCorrectAnswer: {
    width: 10,
    height: 10,
    backgroundColor: "#FF0330",
  },
  correctAnswer: {
    width: 10,
    height: 10,
    backgroundColor: "#00FF19",
  },
});
