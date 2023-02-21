import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";




const ProgressPage = () => {
    const [username, setusername] = useState("")
    const email = useSelector((state) => state.color.value);
    const getName = () => {
        axios.get('http://10.0.2.2:3000/',{
            params: {
                email: email.payload
            },
            headers: {'Content-Type': 'application/json'}
              ,
        })
            .then(res => {
                console.log(res.data)
                setusername(res.data)
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
                <View style={styles.circleProgress}>
                    <View style={styles.circleProgressInner}>
                        <Text style={styles.progressText}>X%</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonTitle}>Dyscalculia Test</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonTitle}>Dyscalculia Test</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonTitle}>Dyscalculia Test</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default ProgressPage

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
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1E1F3B",
        padding: 20,
        paddingRight: 90,
        paddingLeft: 90,
        marginTop: 30,
    },
    buttonTitle: {
        color: '#646577',
        fontSize: 16,
        fontWeight: 'bold',
    },
})