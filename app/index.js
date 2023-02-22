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


