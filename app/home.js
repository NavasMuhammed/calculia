import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { auth } from "../firebase2";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../store/colorSlice";

const Home = ({ navigation }) => {
  const color = useSelector((state) => state.color.value);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isValidUser,setIsValidUser] = useState(false);
  const dispatch = useDispatch();

  function addColor({ id }) {
    dispatch(setColor({ payload: id }));
  }

  const handleLogIn = () => {
    console.log(color.payload);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        addColor({ id: user.email });
        console.log("Logged in with ", user.email);
        // setIsValidUser(true);
        navigation.navigate("progressPage");
      })
      .catch((error) => alert(error));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.mainTitle}>CALCULIA</Text>
      </View>
      <View style={[styles.formWrapper, styles.shadowProp]}>
        <TextInput
          style={[styles.input, styles.shadowProp]}
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          placeholderTextColor="#646577"
        />
        <TextInput
          style={[styles.input, styles.shadowProp]}
          placeholder="Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          placeholderTextColor="#646577"
        />
        <TouchableOpacity
          onPress={() => handleLogIn()}
          style={styles.buttonWrapper}
        >
          <Text style={styles.buttonTitle}>Log In</Text>
        </TouchableOpacity>
        <View style={styles.subTitleWrapper}>
          <Text style={styles.logSubTitle}>Forgot your password?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={styles.logSubTitle}> Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("achievment")}>
            <Text style={styles.logSubTitle}> test</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 104,
    backgroundColor: "#141527",
  },
  mainTitle: {
    color: "#FC6746",
    fontSize: 48,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "900",
  },
  formWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 100,
  },
  input: {
    width: "85%",
    margin: 12,
    padding: 10,
    backgroundColor: "#1E1F3B",
    color: "#646577",
    borderRadius: 6,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "#000",
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonWrapper: {
    width: 200,
    width: "85%",
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FC6746",
    marginTop: 20,
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitleWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  logSubTitle: {
    marginBottom: 5,
    color: "#646577",
    fontWeight: "bold",
  },
});
