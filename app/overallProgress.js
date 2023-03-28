import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import * as Progress from "react-native-progress";

const OverallProgress = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>OVERALL PROGRESS</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.progressWrapper}
      >
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Total Questions attended</Text>
          <Progress.Bar
            progress={0.6}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Total Questions Corrected</Text>
          <Progress.Bar
            progress={0.8}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Total Questions Incorrect</Text>
          <Progress.Bar
            progress={0.6}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Total Numerical Correct</Text>
          <Progress.Bar
            progress={0.6}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Total Counting Correct</Text>
          <Progress.Bar
            progress={0.6}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Total Direction Correct</Text>
          <Progress.Bar
            progress={0.6}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Total Colors Correct</Text>
          <Progress.Bar
            progress={0.6}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Your Average learning rate</Text>
          <Progress.Bar
            progress={0.6}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          />
        </View>
        <View style={styles.progressContainer}></View>
        <View style={styles.progressContainer}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OverallProgress;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#141527",
    paddingTop: 10,
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
    fontSize: 32,
    fontWeight: "900",
    color: "#fff",
  },
  progressTitle: {
    fontSize: 20,
    fontWeight: "900",
    color: "#fff",
    padding: 12,
  },
  progressContainer: {
    marginTop: 50,
  },
});
