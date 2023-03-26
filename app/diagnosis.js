import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const Diagnosis = ({ navigation }) => {
  const questions = [
    "Does your child still count on his fingers past third grade?",
    "Does your child struggle to connect the concept of numbers to real-world items? When you ask him how many cookies are left, for example, does he seem confused by the question or answer incorrectly?",
    "Does your child get unnaturally upset or complain of feeling ill while completing math homework?",
    "Does your child say numbers out of order — long after peers have mastered this skill?",
    "Does your child struggle to understand money, and have difficulty making change or sticking to a budget?",
    "Does your child get lost, even in familiar surroundings?",
    "Does your child reverse or mix up numbers? for example 63 for 36, or 785 for 875?",
  ];
  const [questionNum, setQuestionNum] = useState(0);
  const options = ["Often", "Sometimes", "Rarely", "Never"];
  return (
    <SafeAreaView style={styles.container}>
      {questionNum < questions.length ? (
        <>
          <Text style={styles.mainTitle}>Answer the fllowing questions</Text>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{questions[questionNum]}</Text>
          </View>
          <View style={styles.optionContainer}>
            {options.map((item, index) => {
              return (
                <TouchableOpacity style={styles.optionButton}>
                  <Text style={styles.option}>{item}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.submitContainer}>
            <TouchableOpacity
              style={styles.submitWrapper}
              onPress={() => {
                setQuestionNum(questionNum + 1);
              }}
            >
              <Text style={styles.submitTitle}>Next</Text>
            </TouchableOpacity>
          </View>
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
    flex: 0.5,
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
