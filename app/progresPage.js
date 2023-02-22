import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


const ProgressPage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.mainTitle}>Hi &apos;$user&apos;</Text>
            <View style={styles.progressContainer}>
                <View style={styles.circleProgress}>
                    <View style={styles.circleProgressInner}>
                        <Text style={styles.progressText}>X%</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => navigation.navigate("testPage")}>
                    <Text style={styles.buttonTitle}>Dyscalculia Test</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonTitle}>Complete Lesson</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonTitle}>View Progress</Text>
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
        width:"70%",
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1E1F3B",
        padding: 20,
        // paddingRight: 90,
        // paddingLeft: 90,
        marginTop: 30,
    },
    buttonTitle: {
        color: '#646577',
        fontSize: 16,
        fontWeight: 'bold',
    },
})