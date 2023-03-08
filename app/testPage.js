import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { setDetails } from '../store/detailsSlice';
import axios from 'axios';


const TestPage = () => {
    let data = []
    let singleData = []
    var questionArr = []
    let ansarray = []
    const [qnNum, setQnNum] = useState(0)
    const [isOptionDisabled, setIsOptionDisabled] = useState(false)
    const [response, setResponse] = useState(null)
    const [ans, setAns] = useState(false)
    const [question, setquestion] = useState()
    const [correctAnswer, setcorrectAnswer] = useState()
    const [options, setOptions] = useState([]);
    let timeouttime = false

    const details = useSelector((state) => state.details.value);

    let time = 2000
    const getquestion = async () => {
        if (!timeouttime) {
            setTimeout(() => {
                setquestion(singleData[qnNum])
                setOptions(data[qnNum])
                setcorrectAnswer(ansarray[qnNum]);
                console.log(ansarray);
                timeouttime = true
            }, time);
        }
        else {
            setquestion(singleData[qnNum])
            setOptions(data[qnNum])
            setcorrectAnswer(ansarray[qnNum]);
            console.log(ansarray);
        }
    }
    const getDetails = async (n) => {
        await axios.get('http://10.0.2.2:5000/question', {
            params: {
                level: details.payload.level
            },
            headers: { 'Content-Type': 'application/json' }
            ,
        })
            .then(res => {
                res.data.forEach(element => {
                    let answersArr = []

                    answersArr[0] = element.opt1
                    answersArr[1] = element.opt2
                    answersArr[2] = element.opt3
                    answersArr[3] = element.opt4
                    questionArr[0] = element.question
                    data.push(answersArr)
                    ansarray.push(element.answer)
                    singleData.push(element.question)
                    console.log(data)
                });
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        getDetails();
        getquestion();
    }, [qnNum])



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



    const validateAns = (response) => {
        setResponse(response);
        setAns(correctAnswer);
        setIsOptionDisabled(true)

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
            {true ?
                <>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}>FIND {question}</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        {options.map(option => (
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
                        {isOptionDisabled && <TouchableOpacity onPress={() => handlePress()
                        } style={styles.submitWrapper1}>
                            <Text style={styles.submitTitle1}>Next</Text>
                        </TouchableOpacity>
                        }
                    </View>
                </> : <>
                    <View style={styles.questionContainer}>
                        <Text style={styles.question}>COUNT THE BALLS</Text>
                    </View>
                    <View style={styles.ballContainer} >
                        <Image source={require('./3.png')} />
                    </View>
                    <View style={styles.optionContainerBalls}>
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
                    </View>
                    {isOptionDisabled && <TouchableOpacity onPress={() => handlePress()
                    } style={styles.submitWrapper}>
                        <Text style={styles.submitTitle}>Next</Text>
                    </TouchableOpacity>
                    }
                </>
            }
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
        backgroundColor: '#1E1F3B',
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
        top: -50,
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