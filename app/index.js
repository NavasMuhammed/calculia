import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./home";
import SignUp from "./signUp";
import ProgressPage from "./progresPage";
import TestPage from "./testPage";
import { store } from '../store/store'
import { Provider } from 'react-redux'
import TestSelectionPage from "./testSelectionPage";
import CountingTest from "./countingTest";
import DsirectionTest from "./directionTest";
import ColorTest from "./colorTest";

function App() {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer independent={true} >
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="progressPage" component={ProgressPage}></Stack.Screen>
        <Stack.Screen name="testPage" component={TestPage} />
        <Stack.Screen name="testSelectionPage" component={TestSelectionPage} />
        <Stack.Screen name="countingTest" component={DsirectionTest} />
        <Stack.Screen name="directionTest" component={DsirectionTest} />
        <Stack.Screen name="colorTest" component={ColorTest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};


