import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { setDetails } from '../store/detailsSlice';
import axios from 'axios';


const CountingTest = () => {

    const [isOptionDisabled, setIsOptionDisabled] = useState(false)
    const [ans, setAns] = useState(Number)
    const [correctAnswer, setCorrectAnswer] = useState(Number)
    const [qnNum, setQnNum] = useState(0)
    const [response, setResponse] = useState(0)
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const incrementQnNum = () => {
        setQnNum(qnNum + 1)
    }

    const handlePress = () => {
        incrementQnNum();
        resetToDefault();
    };

    const resetToDefault = () => {
        setResponse(null);
        setAns(null);
    }

    const images = ['./3.png', './1.png']

    const validateAns = (response) => {
        setResponse(response);
        setAns(correctAnswer);


    }

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
                <Text style={styles.question}>COUNT THE BALLS</Text>
            </View>
            <View style={styles.ballContainer} >
                {qnNum == 0 ? <Image source={require('./3.png')} /> :
                    qnNum == 1 ? <Image source={require('./1.png')} /> :
                        <></>}
            </View>
            {/* <View style={styles.optionContainerBalls}>
                <TouchableOpacity style={styles.ballOption}>
                    <Text style={styles.buttonTitle1}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ballOption}>
                    <Text style={styles.buttonTitle1}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ballOption}>
                    <Text style={styles.buttonTitle1}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ballOption}>
                    <Text style={styles.buttonTitle1}>6</Text>
                </TouchableOpacity>
            </View> */}
            <View style={styles.optionContainerBalls}>
                {options.map(option => (
                    <TouchableOpacity
                        style={
                            {

                                width: 60,
                                height: 60,
                                backgroundColor: '#1E1F3B',
                                margin: 10,
                                borderRadius: 10,
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: option == ans ? '#00FF19' : option == response ? "#FF0330" : "#1E1F3B",
                            }}
                        key={option}
                        onPress={() => validateAns(option)}
                    >
                        <Text style={styles.buttonTitle1}>{option}</Text>
                    </TouchableOpacity>
                ))

                }
                {isOptionDisabled && <TouchableOpacity onPress={() => handlePress()
                } style={styles.submitWrapper1}>
                    <Text style={styles.submitTitle1}>Next</Text>
                </TouchableOpacity>
                }
            </View>
            {!isOptionDisabled && <TouchableOpacity onPress={() => handlePress()
            } style={styles.submitWrapper}>
                <Text style={styles.submitTitle}>Next</Text>
            </TouchableOpacity>
            }


        </SafeAreaView >

    )
}

export default CountingTest

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
        bottom: 40,
    },
    optionContainerBalls: {
        alignSelf: 'center',
        width: '80%',
        height: 300,
        // containContent: true,
        // overflow: "hidden",
        // // flex: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        // padding: 80,
        alignItems: "center",
        justifyContent: "center",
        top: 40
        // backgroundColor: "#000"
    },
    ballOption: {
        width: 80,
        height: 80,
        backgroundColor: '#1E1F3B',
        margin: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    titleContainer: {
        paddingTop: 55,
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
        bottom: 20
    },
    question: {
        fontSize: 24,
        fontWeight: "900",
        color: "#fff",
    },
    progressContainer: {
        top: 30,
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
        top: -40,
        borderRadius: 15,
        alignItems: 'center',
        alignSelf: 'center',
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
    submitWrapper1: {
        // top: -50,
        borderRadius: 15,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: "#FC6746",
        padding: 20,
        width: "70%",
        paddingRight: 90,
        paddingLeft: 90,
        marginTop: 30,
    },
    submitTitle1: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '900',
    },
    buttonTitle: {
        color: '#646577',
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonTitle1: {
        color: '#646577',
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
    }
})