import { ImageBackground, View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from '../store/detailsSlice';


const TestSelectionPage = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer} >
                <Text style={styles.mainTitle}>CHOSE A TEST</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("testPage")} style={styles.ButtonContainer}>
                <ImageBackground source={require('./numBG.png')} resizeMode="cover" style={styles.bgNImage}>
                    <Text style={styles.buttonText}>NUMERICALS</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("countingTest")} style={styles.ButtonContainer}>
                <ImageBackground source={require('./countBG.png')} resizeMode="cover" style={styles.bgcImage}>
                    <Text style={styles.buttonCText}>COUNTING</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("directionTest")} style={styles.ButtonContainer}>
                <ImageBackground source={require('./dirBg.png')} resizeMode="cover" style={styles.bgImage}>
                    <Text style={styles.buttonCText}>DIRECTIONS</Text>
                </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("colorTest")} style={styles.ButtonContainer}>
                <ImageBackground source={require('./colorBG.png')} resizeMode="cover" style={styles.bgImage}>
                    <Text style={styles.buttonCText}>COLORS</Text>
                </ImageBackground>
            </TouchableOpacity>

        </SafeAreaView>

    )
}

export default TestSelectionPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "#141527",

    },
    titleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 100
    },
    mainTitle: {
        color: "#fff",
        fontWeight: "900",
        fontSize: 32,
    },
    ButtonContainer: {
        width: 300,
        height: 100,
        flex: 1,
        bottom:25,
    },
    bgNImage: {
        width: "100%",
        height: "95%",
        alignItems: "center",
        justifyContent: "center",
    },
    bgImage: {
        width: "100%",
        height: "90%",
        alignItems: "center",
        justifyContent: "center",
    },
    bgcImage: {
        width: "100%",
        height: "88%",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "900",
        fontSize: 24,
        bottom: 22,
    },
    buttonCText: {
        color: "#fff",
        fontWeight: "900",
        fontSize: 24,
        bottom: 12,
    }

})