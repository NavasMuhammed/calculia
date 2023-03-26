import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setDetails } from "../store/detailsSlice";
import axios from "axios";
const data = [
  {
    id: 1,
    Image: require("./1.png"),
    style: "styles.ballImage1",
  },
  {
    id: 2,
    Image: require("./2.png"),
    style: "styles.ballImage2",
  },
  {
    id: 3,
    Image: require("./3.png"),
    style: "styles.ballImage5",
  },
  {
    id: 4,
    Image: require("./4.png"),
    style: "styles.ballImage5",
  },
  {
    id: 5,
    Image: require("./5.png"),
    style: "styles.ballImage5",
  },
  {
    id: 6,
    Image: require("./6.png"),
    style: "styles.ballImage5",
  },
  {
    id: 7,
    Image: require("./7.png"),
    style: "styles.ballImage5",
  },
  {
    id: 8,
    Image: require("./8.png"),
    style: "styles.ballImage7",
  },
  {
    id: 9,
    Image: require("./9.png"),
    style: "styles.ballImage8",
  },
];

const CountingTest = () => {
  useEffect(() => {
    selectpic();
  }, []);
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
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.mainTitle}>Question {qnNum}/10</Text>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progressBarInner}></View>
        </View>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.question}>
          {qnNum < 9 ? (
            <Text>COUNT THE BALLS</Text>
          ) : (
            <Text>ADD THE BALLS</Text>
          )}
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
    resizeMode: "stretch",
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
    justifyContent: "flex-start",
    alignItems: "center",
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
    top: 30,
    width: "100%",
    // justifyContent: "flex-start",
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
