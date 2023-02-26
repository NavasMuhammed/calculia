import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { setDetails } from '../store/detailsSlice';
import axios from 'axios';


const TestPage = () => {
    const [data, setData] = useState([])

    const details = useSelector((state) => state.details.value);
    const getDetails = async () => {
        axios.get('http://10.0.2.2:5000/question', {
            params: {
                level: details.payload.level
            },
            headers: { 'Content-Type': 'application/json' }
            ,
        })
            .then(res => {
                res.data.forEach(element => {
                    setData(element)
                });
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        getDetails();
    }, [])


    const [isOptionDisabled, setIsOptionDisabled] = useState(false)
    const [response, setResponse] = useState(null)
    const [ans, setAns] = useState(false)
    const answers = [20, 25, 30, 35];
    // const correctAnswer = 25;

    const answersArr = []
    answersArr[0] = data.opt1
    answersArr[1] = data.opt2
    answersArr[2] = data.opt3
    answersArr[3] = data.opt4
    // console.log(data.question)
    const question = data.question
    const validateAns = (response) => {
        let correctAnswer = data.answer;
        setResponse(response);
        setAns(correctAnswer);
        setIsOptionDisabled(true)

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.mainTitle}>Question 1/10</Text>
            </View>
            <View style={styles.progressContainer}>
                <View style={styles.progressBar}>
                    <View style={styles.progressBarInner}></View>
                </View>
            </View>
            <View style={styles.questionContainer}>
                <Text style={styles.question}>FIND {question}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                {answersArr.map(option => (
                    <TouchableOpacity
                        style={
                            {
                                flexDirection: "row",
                                borderRadius: 15,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: option == ans ? '#00FF19' : option == response ? "#FF0330" : "#1E1F3B",
                                padding: 20,
                                width: "70%",
                                paddingRight: 90,
                                paddingLeft: 90,
                                marginTop: 30,
                            }}
                        key={option}
                        onPress={() => validateAns(option)}
                    >
                        <Text style={styles.buttonTitle}>{option}</Text>
                    </TouchableOpacity>
                ))

                }
                {isOptionDisabled && <TouchableOpacity style={styles.submitWrapper}>
                    <Text style={styles.submitTitle}>Next</Text>
                </TouchableOpacity>}
            </View>
        </SafeAreaView >

    )
}

export default TestPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#141527",

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
        top: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FC6746",
        padding: 20,
        width: "70%",
        paddingRight: 90,
        paddingLeft: 90,
        marginTop: 30,
    },
    submitTitle: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '900',
    },
    buttonTitle: {
        color: '#646577',
        fontSize: 16,
        fontWeight: 'bold',
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
    }
})