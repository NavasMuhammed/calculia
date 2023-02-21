import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./home";
import SignUp from "./signUp";
import ProgressPage from "./progresPage";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true} >
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="progressPage"  component={ProgressPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


