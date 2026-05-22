// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import AddictionTrackerScreen from './src/screens/AddictionTrackerScreen';
import AddTaskScreen from './src/screens/AddTaskScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import DiaryScreen from './src/screens/DiaryScreen';
import HabitsScreen from './src/screens/HabitsScreen';
import HealthScreen from './src/screens/HealthScreen';
import MedicineTrackerScreen from './src/screens/MedicineTrackerScreen';
import MoodAnalysisScreen from './src/screens/MoodAnalysisScreen';
import PlannerScreen from './src/screens/PlannerScreen';
import ReminderScreen from './src/screens/ReminderScreen';
import WeatherScreen from './src/screens/WeatherScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="AddictionTracker" component={AddictionTrackerScreen} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Diary" component={DiaryScreen} />
        <Stack.Screen name="Habits" component={HabitsScreen} />
        <Stack.Screen name="Health" component={HealthScreen} />
        <Stack.Screen name="MedicineTracker" component={MedicineTrackerScreen} />
        <Stack.Screen name="MoodAnalysis" component={MoodAnalysisScreen} />
        <Stack.Screen name="Planner" component={PlannerScreen} />
        <Stack.Screen name="Reminder" component={ReminderScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
