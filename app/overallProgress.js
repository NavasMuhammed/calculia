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
import { useSelector } from "react-redux";

const OverallProgress = ({ navigation }) => {
  const countQstn = useSelector((state) => state.countQstn.value);
  const countScore = useSelector((state) => state.countScore.value);
  const count2Qstn = useSelector((state) => state.count2Qstn.value);
  const count2Score = useSelector((state) => state.count2Score.value);
  const count3Qstn = useSelector((state) => state.count3Qstn.value);
  const count3Score = useSelector((state) => state.count3Score.value);
  const count4Qstn = useSelector((state) => state.count4Qstn.value);
  const count4Score = useSelector((state) => state.count4Score.value);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainTitle}>OVERALL PROGRESS</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.progressWrapper}
      >
        <View style={styles.progressContainer}>
          {/* <Text style={styles.progressTitle}>Total Questions percentage</Text>
          <Progress.Bar
            progress={}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          /> */}
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Total Questions Corrected:{(countScore + count2Score + count3Score + count4Score) }/{(count2Qstn + countQstn + count3Qstn + count4Qstn)}</Text>
          <Progress.Bar
            progress={((countScore + count2Score + count3Score + count4Score) /(count2Qstn + countQstn + count3Qstn + count4Qstn)).toFixed(1)}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Total Questions Incorrect:{((countQstn+count2Qstn+count3Qstn+count4Qstn)-(countScore + count2Score + count3Score + count4Score))} /{(count2Qstn + countQstn + count3Qstn + count4Qstn)}</Text>
          <Progress.Bar
            progress={(((countQstn+count2Qstn+count3Qstn+count4Qstn)-(countScore + count2Score + count3Score + count4Score)) /(count2Qstn + countQstn + count3Qstn + count4Qstn)).toFixed(1)}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Total Numerical Correct :{(countScore)}/{(countQstn)}</Text>
          <Progress.Bar
            progress={(countScore/countQstn).toFixed(1)}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Total Counting Correct:{(count2Score)}/{(count2Qstn)}</Text>
          <Progress.Bar
            progress={(count2Score/count2Qstn).toFixed(1)}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Total Direction Correct:{(count3Score)}/{(count3Qstn)}</Text>
          <Progress.Bar
            progress={(count3Score/count3Qstn).toFixed(1)}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Total Colors Correct:{(count4Score)}/{(count4Qstn)}</Text>
          <Progress.Bar
            progress={(count4Score/count4Qstn).toFixed(1)}
            color="#FC6746"
            unfilledColor={"#646577"}
            borderRadius={50}
            borderWidth={0}
            height={20}
            width={300}
          />
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Your Average learning rate </Text>
          <Progress.Bar
            progress={0.4}
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
