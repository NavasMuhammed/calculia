import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { setScore } from "../store/scoreSlice";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { Questions, Answers, Options } from "./data";
import { setLevels } from "../store/levelsSlice";
import axios from "axios";
// import { setScore} from "../store/detailsSlice";


const Diagnosis = ({ navigation }) => {

  const details = useSelector((state) => state.details.value);
  const [level, setLevel] = useState(details.payload.level);
  const levels = useSelector((state) => state.levels.value);

  const questions =
    level == 0
      ? Questions.level1
      : level == 1
      ? Questions.level2
      : level == 2
      ? Questions.level3
      : level == 3
      ? Questions.level4
      : [];
  const answers = [
    Answers.level1,
    Answers.level2,
    Answers.level3,
    Answers.level4,
  ];
  const optionst = [
    Options.level1,
    Options.level2,
    Options.level3,
    Options.level4,
  ];
  const [ans, setAns] = useState();
  const [response, setResponse] = useState();
  const [questionNum, setQuestionNum] = useState(0);
  const [option, setOption] = useState([]);
  const score = useSelector((state) => state.score.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setScore(0));
  }, []);

  const buddi = (levelt, questiont, ranget) => {
    setOption(
      (level == levelt) & (questiont < ranget) ? optionst[levelt][ranget] : []
    );
  };

  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const correctAnswer = (questionNumt, levelt, response) => {
    if (level == levelt && questionNum == questionNumt) {
      setAns(answers[levelt][questionNumt]);
    }
    if(answers[levelt][questionNumt] == response){
      dispatch(setScore(score + 1));
      console.log(score);
    }
  };

  const validateAns = async (response) => {
    setResponse(response);
    setIsOptionDisabled(true);
    correctAnswer(questionNum, level,response);
    console.log(score);
  };

  const setlevels = async ()=>{
    // console.log(levels);
    if(score>10){
      dispatch(setLevels(1));
      update(1)
    }
    else if(score>5){
      dispatch(setLevels(2));
      update(2)
    }
    else {
      dispatch(setLevels(3));
      update(3)
    }
  }

  const update = async (levels) => {
    await axios.post("http://10.0.2.2:5000/updatelevel", {
        data: {
          levels:levels,
          name: details.payload.name,
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

  const resetToDefault = () => {
    setResponse(null);
    setAns(null);
    setIsOptionDisabled(false);
  };

  const [range, setRange] = useState(0);
  useEffect(() => {
    questionNum < 5
      ? setRange(5)
      : questionNum < 10
      ? setRange(10)
      : questionNum < 15
      ? setRange(15)
      : questionNum < 20
      ? setRange(20)
      : 0;
    console.log(range);
    buddi(level, questionNum, range);
  }, [range, questionNum]);

  return (
    <SafeAreaView style={styles.container}>
      {questionNum < questions.length ? (
        <>
          <Text style={styles.mainTitle}>level: {level}</Text>
          <Text style={styles.mainTitle}>question number: {questionNum}</Text>
          <Text style={styles.mainTitle}>
            Answer the fllowing questions{range}
          </Text>
          {(level == 0) & (questionNum == 5) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/1.png")}
              ></Image>
            </View>
          ) : (level == 0) & (questionNum == 6) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/3.png")}
              ></Image>
            </View>
          ) : (level == 0) & (questionNum == 7) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/4.png")}
              ></Image>
            </View>
          ) : (level == 0) & (questionNum == 8) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/2.png")}
              ></Image>
            </View>
          ) : (level == 0) & (questionNum == 9) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/child.png")}
              ></Image>
            </View>
          ) : (level == 1) & (questionNum == 5) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/1.png")}
              ></Image>
            </View>
          ) : (level == 1) & (questionNum == 6) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/3.png")}
              ></Image>
            </View>
          ) : (level == 1) & (questionNum == 7) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/4.png")}
              ></Image>
            </View>
          ) : (level == 1) & (questionNum == 8) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/2.png")}
              ></Image>
            </View>
          ) : (level == 1) & (questionNum == 9) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/child.png")}
              ></Image>
            </View>
          ) : (level == 2) & (questionNum == 5) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/1.png")}
              ></Image>
            </View>
          ) : (level == 2) & (questionNum == 6) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/3.png")}
              ></Image>
            </View>
          ) : (level == 2) & (questionNum == 7) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/4.png")}
              ></Image>
            </View>
          ) : (level == 2) & (questionNum == 8) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/2.png")}
              ></Image>
            </View>
          ) : (level == 2) & (questionNum == 9) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/child.png")}
              ></Image>
            </View>
          ) : (level == 3) & (questionNum == 5) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/1.png")}
              ></Image>
            </View>
          ) : (level == 3) & (questionNum == 6) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/3.png")}
              ></Image>
            </View>
          ) : (level == 3) & (questionNum == 7) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/4.png")}
              ></Image>
            </View>
          ) : (level == 3) & (questionNum == 8) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/2.png")}
              ></Image>
            </View>
          ) : (level == 3) & (questionNum == 9) ? (
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={require("./img/child.png")}
              ></Image>
            </View>
          ) : (
            <></>
          )}
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{questions[questionNum]}</Text>
          </View>
          <View style={styles.optionContainer}>
            {option.map((option) => {
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
            <Text style={styles.mainTitle}>Score: {score}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={styles.submitWrapper}
              onPress={() => {
                //call a function without maximum call stack exceeded
                setlevels();
                // console.log(levels);
                navigation.navigate("progressPage");
              }}
            >
              <Text style={styles.submitTitle}>Return</Text>
            </TouchableOpacity>
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