import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// import { setDetails } from "../store/detailsSlice";
import CircularProgress from "react-native-circular-progress-indicator";
import { setDetails } from '../store/detailsSlice';
import { setcountQstn } from '../store/countQstnSlice';
import { setcountScore } from '../store/countScoreSlice';
import { setcount2Qstn } from '../store/count2QstnSlice';
import { setcount2Score } from '../store/count2ScoreSlice';
import { setcount3Qstn } from '../store/count3QstnSlice';
import { setcount3Score } from '../store/count3ScoreSlice';
import { setcount4Qstn } from '../store/count4QstnSlice';
import { setcount4Score } from '../store/count4ScoreSlice';


const ProgressPage = ({ navigation }) => {
  const [username, setusername] = useState("");

  const [progress, setprogress] = useState(0);
  const email = useSelector((state) => state.color.value);
  const details = useSelector((state) => state.details.value);
  const dispatch = useDispatch();

  function addDetails({ id }) {
    dispatch(setDetails({ payload: id }));
  }

    const getName = () => {
        axios.get('http://10.0.2.2:5000/', {
            params: {
                email: email.payload
            },
            headers: { 'Content-Type': 'application/json' }
            ,
        })
            .then(res => {
                console.log(res.data)
                setusername(res.data)
                getDetails(res.data)
            })
            .catch(err => {
                console.log(err)
            })
        }
        
    const getDetails = async(name) => {
            axios.get('http://10.0.2.2:5000/test', {
                params: {
                    name: name
                },
                headers: { 'Content-Type': 'application/json' }
                ,
            })
            .then(res => {
                // console.log(res.data.progress)
                // setprogress(res.data.progress)
                setprogress(parseInt((res.data.countScore+res.data.count2Score+res.data.count3Score+res.data.count4Score)*100/(res.data.countQstn+res.data.count2Qstn+res.data.count3Qstn+res.data.count4Qstn)))
                addDetails({id:res.data})
                dispatch(setcountQstn(res.data.countQstn))
                dispatch(setcountScore(res.data.countScore))
                dispatch(setcount2Qstn(res.data.count2Qstn))
                dispatch(setcount2Score(res.data.count2Score))
                dispatch(setcount3Qstn(res.data.count3Qstn))
                dispatch(setcount3Score(res.data.count3Score))
                dispatch(setcount4Qstn(res.data.count4Qstn))
                dispatch(setcount4Score(res.data.count4Score))
                console.log(details.payload)
            })
            .catch(err => {
                console.log(err)
            })
    }
    

    useEffect(() => {
        getName();
    }, [])
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.mainTitle}>Hi {username}</Text>
        <View style={styles.progressContainer}>
          {/* <View style={styles.circleProgress}>
            <View style={styles.circleProgressInner}>
              <Text style={styles.progressText}>{progress}</Text>
            </View>
          </View> */}
          <CircularProgress
            value={progress}
            inActiveStrokeColor={"#646577"}
            activeStrokeColor={"#FC6746"}
            activeStrokeWidth={25}
            inActiveStrokeWidth={25}
            inActiveStrokeOpacity={0.5}
            allowFontScaling={true}
            duration={1000}
            radius={80}
            progressValueColor={"#FC6746"}
            valueSuffix={"%"}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => navigation.navigate("diagnosis")}
          >
            <Text style={styles.buttonTitle}>Dyscalculia Test</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => navigation.navigate("testSelectionPage")}
          >
            <Text style={styles.buttonTitle}>Complete Lessons</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonWrapper}
            onPress={() => navigation.navigate("progressSelection")}
          >
            <Text style={styles.buttonTitle}>View Progress</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ProgressPage;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      backgroundColor: "#141527",
    },
    mainTitle: {
      fontSize: 24,
      fontWeight: "900",
      color: "#fff",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      paddingLeft: 22,
    },
    progressContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    circleProgress: {
      width: 150,
      height: 150,
      borderRadius: 150,
      backgroundColor: "#FC6746",
      alignItems: "center",
      justifyContent: "center",
    },
    circleProgressInner: {
      width: 110,
      height: 110,
      borderRadius: 110,
      backgroundColor: "#141527",
      alignItems: "center",
      justifyContent: "center",
    },
    progressText: {
      color: "#FC6746",
      fontWeight: "700",
      fontSize: 32,
    },
    buttonsContainer: {
      alignItems: "center",
    },
    buttonWrapper: {
      width: "70%",
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#1E1F3B",
      padding: 20,
      // paddingRight: 90,
      // paddingLeft: 90,
      marginTop: 30,
    },
    buttonTitle: {
      color: "#646577",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  