import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const Diagnosis = ({ navigation }) => {
  var level = 1;
  const questions =
    level == 1
      ? [
          "How many fingers are on your right hand",
          "how many eyes you have",
          "how many nose you have",
          "how many legs you have",
          "how many fingers are there in your both hands",
          "count the number of balls present",
          "count the number of balls present",
          "count the number of balls present",
          "count the number of balls present",
          "count the number of boys present",
          "select ten form below",
          "select two from below",
          "select nine from below",
          "select seven from below",
          "what is one added to one ",
          "find direction of arrow ⬆️",
          "find direction of arrow ⬇️",
          "find the direction of arrow ⬅️",
          "find the direction of arrow ➡️",
          "which hand you use for eating",
        ]
      : level == 2
      ? [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "19",
          "20",
        ]
      : level == 3
      ? [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "19",
          "20",
        ]
      : level == 4
      ? [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "19",
          "20",
        ]
      : [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "19",
          "20",
        ];
  const answers = [
    [5, 2, 1, 2, 10],
    [1, 3, 4, 2, 1],
    [10, 2, 9, 7, 2],
    ["up", "down", "left", "right", "right"],
  ];
  const [ans, setAns] = useState();
  const [response, setResponse] = useState();
  const [questionNum, setQuestionNum] = useState(0);
  var options =
    (level == 1) & (questionNum < 5)
      ? ["2", "1", "5", "10"]
      : (level == 1) & (questionNum < 10)
      ? ["3", "4", "2", "1"]
      : (level == 1) & (questionNum < 15)
      ? ["7", "2", "9", "10"]
      : (level == 1) & (questionNum < 20)
      ? ["down", "up", "right", "left"]
      : (level == 2) & (questionNum < 5)
      ? ["0", "2", "1", "4"]
      : (level == 2) & (questionNum < 10)
      ? ["new", "pew", "new", "aww"]
      : (level == 2) & (questionNum < 15)
      ? ["an", "pon", "se", "ss"]
      : (level == 2) & (questionNum < 20)
      ? ["brr", "srr", "ree", "trr"]
      : (level == 3) & (questionNum < 5)
      ? ["0", "2", "1", "4"]
      : (level == 3) & (questionNum < 10)
      ? ["new", "pew", "new", "aww"]
      : (level == 3) & (questionNum < 15)
      ? ["an", "pon", "se", "ss"]
      : (level == 3) & (questionNum < 20)
      ? ["brr", "srr", "ree", "trr"]
      : (level == 4) & (questionNum < 5)
      ? ["0", "2", "1", "4"]
      : (level == 4) & (questionNum < 10)
      ? ["new", "pew", "new", "aww"]
      : (level == 4) & (questionNum < 15)
      ? ["an", "pon", "se", "ss"]
      : (level == 4) & (questionNum < 20)
      ? ["brr", "srr", "ree", "trr"]
      : (level == 5) & (questionNum < 5)
      ? ["0", "2", "1", "4"]
      : (level == 5) & (questionNum < 10)
      ? ["new", "pew", "new", "aww"]
      : (level == 5) & (questionNum < 15)
      ? ["an", "pon", "se", "ss"]
      : (level == 5) & (questionNum < 20)
      ? ["brr", "srr", "ree", "trr"]
      : [];
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const validateAns = async (response) => {
    setResponse(response);
    setIsOptionDisabled(true);
    if (level == 1 && questionNum == 0) {
      setAns(answers[0][0]);
    } else if (level == 1 && questionNum == 1) {
      setAns(answers[0][1]);
    } else if (level == 1 && questionNum == 2) {
      setAns(answers[0][2]);
    } else if (level == 1 && questionNum == 3) {
      setAns(answers[0][3]);
    } else if (level == 1 && questionNum == 4) {
      setAns(answers[0][4]);
    }
  };
  const resetToDefault = () => {
    setResponse(null);
    setAns(null);
    setIsOptionDisabled(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      {questionNum < questions.length ? (
        <>
          <Text style={styles.mainTitle}>level: {ans}</Text>
          <Text style={styles.mainTitle}>question number: {questionNum}</Text>
          <Text style={styles.mainTitle}>Answer the fllowing questions</Text>
          {(level == 1) & (questionNum == 5) ? (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require("./1.png")}></Image>
            </View>
          ) : (level == 1) & (questionNum == 6) ? (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require("./3.png")}></Image>
            </View>
          ) : (level == 1) & (questionNum == 7) ? (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require("./4.png")}></Image>
            </View>
          ) : (level == 1) & (questionNum == 8) ? (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={require("./2.png")}></Image>
            </View>
          ) : (level == 1) & (questionNum == 9) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./child.png")}
              ></Image>
            </View>
          ) : (
            <></>
          )}
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{questions[questionNum]}</Text>
          </View>
          <View style={styles.optionContainer}>
            {options.map((option) => {
              return (
                <TouchableOpacity
                  style={{
                    borderRadius: 15,
                    alignItems: "center",
                    justifyContent: "center",
                    width: "70%",
                    padding: 20,
                    marginTop: 20,
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
                  <Text style={styles.option}>{option}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          {isOptionDisabled && (
            <View style={styles.submitContainer}>
              <TouchableOpacity
                style={styles.submitWrapper}
                onPress={() => {
                  setQuestionNum(questionNum + 1);
                  resetToDefault();
                }}
              >
                <Text style={styles.submitTitle}>Next</Text>
              </TouchableOpacity>
            </View>
          )}
        </>
      ) : (
        <>
          <View>
            <Text style={styles.mainTitle}>Your results</Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Diagnosis;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    // paddingTop: 104,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "#141527",
  },
  mainTitle: {
    flex: 0.2,
    color: "#fff",
    fontSize: 24,
    // backgroundColor: "#fff",
    fontWeight: "900",
    // marginTop: 20,
  },
  questionContainer: {
    width: "100%",
    alignItems: "center",
  },
  imageContainer: {
    margin: 10,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  question: {
    color: "white",
    padding: 5,
    fontSize: 20,
    fontWeight: "800",
  },
  optionContainer: {
    // flex: 3,
    width: "100%",
    // height: "100%",
    // backgroundColor: "#000",
    margin: 10,
    alignItems: "center",
  },
  optionButton: {
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E1F3B",
    width: "70%",
    padding: 20,
    marginTop: 20,
  },
  option: {
    color: "#646577",
    fontSize: 16,
    fontWeight: "bold",
  },
  submitContainer: {
    flex: 1,
    width: "100%",
    // backgroundColor: "#FFFFFF",
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
    marginTop: 15,
    // marginBottom: 30,
  },
  submitTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "900",
  },
});

// flexDirection: "row",
//  borderRadius: 15,
//  alignItems: 'center',
//  justifyContent: 'center',
// //  backgroundColor: option == ans ? '#00FF19' : option == response ? "#FF0330" : "#1E1F3B",
//  padding: 20,
//  width: "70%",
//  paddingRight: 90,
//  paddingLeft: 90,
//  marginTop: 30,
