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
import { setScore } from "../store/scoreSlice";
import { setcountQstn, setCountQstn } from "../store/countQstnSlice";
import { setcountScore } from "../store/countScoreSlice";
import axios from "axios";
import * as Progress from "react-native-progress";
import { images } from "./data";
const TestPage = ({ navigation }) => {
  let data = [];
  let singleData = [];
  // var questionArr = [];
  let ansarray = [];
  const [data1, setdata1] = useState([]);
  const [singleData1, setsingleData1] = useState([]);
  const [ansarray1, setansarray1] = useState([]);
  const [qnNum, setQnNum] = useState(0);
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const [response, setResponse] = useState(null);
  const [ans, setAns] = useState(false);
  const [question, setquestion] = useState();
  const [correctAnswer, setcorrectAnswer] = useState();
  const [options, setOptions] = useState([1, 2, 3, 4]);
  // const [score, setScore] = useState(0);
  const [Finished, setFinished] = useState(true);
  // let timeouttime = false
  const [timeouttime, settimeouttime] = useState(false);
  const [QNcount, setQNcount] = useState(0);
  //   function addScore({ id }){
  //     dispatch(setScore(score + 1));
  // }
  const dispatch = useDispatch();

  const details = useSelector((state) => state.details.value);
  const score = useSelector((state) => state.score.value);
  const countQstn = useSelector((state) => state.countQstn.value);
  const countScore = useSelector((state) => state.countScore.value);
  let level = 2;
  let time = 1000;
  const getquestion = async () => {
    if (!timeouttime) {
      setTimeout(() => {
        setquestion(singleData[qnNum]);
        setOptions(data[qnNum]);
        setcorrectAnswer(ansarray[qnNum]);
        console.log(ansarray);
        settimeouttime(true);
      }, time);
    } else if (qnNum < QNcount) {
      setquestion(singleData1[qnNum]);
      setOptions(data1[qnNum]);
      setcorrectAnswer(ansarray1[qnNum]);
      console.log(data1);
      console.log(singleData1);
    } else {
      console.log("executed");
      setFinished(false);
    }
  };
  const getDetails = async (n) => {
    console.log("reached here");
    await axios
      .get("http://10.0.2.2:5000/question", {
        params: {
          level: details.payload.level,
        },
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        res.data.forEach((element) => {
          data.push([element.opt1, element.opt2, element.opt3, element.opt4]);
          ansarray.push(element.answer);
          singleData.push(element.question);
          console.log(element);
        });
        setQNcount(data.length - 1);
        setdata1(data);
        setsingleData1(singleData);
        setansarray1(ansarray);
      })
      .catch((err) => {
        console.log(err + "here");
      });
  };
  useEffect(() => {
    getquestion();
  }, [qnNum]);

  useEffect(() => {
    dispatch(setScore(0));
    (async () => {
      await getDetails();
      // getquestion();
      console.log(qnNum);
    })();
  }, []);

  useEffect(() => {
    update();
  }, [countQstn]);

  const update = async () => {
    await axios
      .post("http://10.0.2.2:5000/update", {
        data: {
          countQstn: countQstn,
          countScore: countScore,
          name: details.payload.name,
          reqFields: ["countQstn", "countScore"],
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
    setAns(correctAnswer);
    setIsOptionDisabled(true);
    addScore(response);
  };
  const addScore = (response) => {
    if (response == correctAnswer) {
      dispatch(setScore(score + 1));
      dispatch(setcountScore(countScore + 1));
      console.log(score + "reach");
    }
    dispatch(setcountQstn(countQstn + 1));
  };
  const [active, setActive] = useState(false);
  useEffect(() => {
    if (qnNum == QNcount) {
      setActive(!active);
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {Finished ? (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>Question {qnNum}/10</Text>
          </View>
          <View style={styles.progressContainer}>
            {/* <View style={styles.progressBar}>
              <View style={styles.progressBarInner}></View>
            </View> */}
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
          <View style={styles.questionContainer}>
            <Text style={styles.question}>FIND {question}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            {options.map((option) => (
              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:
                    option == ans
                      ? "#00FF19"
                      : option == response
                      ? "#FF0330"
                      : "#1E1F3B",
                  padding: 20,
                  width: "70%",
                  paddingRight: 90,
                  paddingLeft: 90,
                  marginTop: 30,
                }}
                key={option}
                onPress={() => {
                  if (!isOptionDisabled) validateAns(option);
                }}
              >
                <Text style={styles.buttonTitle}>{option}</Text>
              </TouchableOpacity>
            ))}
            {isOptionDisabled && (
              <TouchableOpacity
                onPress={() => handlePress()}
                style={styles.submitWrapper1}
              >
                <Text style={styles.submitTitle1}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
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
                    source={images.numbers.level1.imgPath}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  ></Image>
                ) : level == 2 ? (
                  <Image
                    source={images.numbers.level2.imgPath}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  ></Image>
                ) : level == 3 ? (
                  <Image
                    source={images.numbers.level3.imgPath}
                    style={{
                      width: 100,
                      height: 100,
                    }}
                  ></Image>
                ) : level == 4 ? (
                  <Image
                    source={images.numbers.level4.imgPath}
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
                    {images.numbers.level1.title}
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
                  {images.numbers.level2.title}
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
                  {images.numbers.level3.title}
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
                  {images.numbers.level4.title}
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
                }}
              >
                CONGRATULATION
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setActive(!active);
                }}
                style={styles.submitWrapperN}
              >
                <Text style={styles.submitTitle}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.titleContainer}>
            <Text style={styles.mainTitle}>GAME OVER</Text>
            <Text style={styles.mainTitle}>Score: {score}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("testSelectionPage");
            }}
            style={styles.submitWrapperN}
          >
            <Text style={styles.submitTitle}>Back to Menu</Text>
          </TouchableOpacity>
        </SafeAreaView>
      )}
    </SafeAreaView>
  );
};

export default TestPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#141527",
  },
  ballContainer: {
    alignSelf: "center",
    width: "auto",
    height: 125,
  },
  optionContainerBalls: {
    flex: 4,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 80,
    alignItems: "center",
    justifyContent: "center",
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
    paddingTop: 25,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "10%",
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "900",
    color: "#fff",
  },
  mainTitleG: {
    fontSize: 24,
    fontWeight: "900",
    color: "#fff",
  },
  questionContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "10%",
  },
  question: {
    fontSize: 24,
    fontWeight: "900",
    color: "#fff",
  },
  progressContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: -20,
    // backgroundColor:"#fff"
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
    top: -50,
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
  submitWrapperN: {
    top: 0,
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
