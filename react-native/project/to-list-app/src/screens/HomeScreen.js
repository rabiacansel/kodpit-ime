import { StyleSheet } from 'react-native';
import React from 'react';
import BackGround from '../components/BackGround';
import Planner from '../components/Planner';
import Health from '../components/Health';
import Reminder from '../components/Reminder';
import MedicineTracker from '../components/MedicineTracker';
import Calendar from '../components/Calendar';
import Diary from '../components/Diary';
import Weather from '../components/Weather';
import MoodAnalysis from '../components/MoodAnalysis';
import Habits from '../components/Habits';
import AddictionTracker from '../components/AddictionTracker';
import Option from '../components/Option';
import SettingsButton from '../components/SettingsButton';

const HomeScreen = ({navigation}) => {

  return (
    <BackGround>
      <MedicineTracker 
        text="Medicine Tracker" 
        position={{top: 120, left: 28}} 
        navigation={navigation}
      />
      <Health 
        text="Health" 
        position={{top: 120, right: 28}} 
        navigation={navigation}
      />
      <Planner 
        text="Planner" 
        position={{top: 260, left: 28}} 
        navigation={navigation}
      />
      <Reminder 
        text="Reminder" 
        position={{top: 260, right: 28}} 
        navigation={navigation}
      />
      <Calendar 
        text="Calendar" 
        position={{top: 400, left: 28}} 
        navigation={navigation}
      />
      <Diary 
        text="Diary" 
        position={{top: 400, right: 28}} 
        navigation={navigation}
      />
      <Weather 
        text="Weather" 
        position={{top: 540, left: 28}} 
        navigation={navigation}
      />
      <MoodAnalysis 
        text="Mood Analysis" 
        position={{top: 540, right: 28}} 
        navigation={navigation}
      />
      <Habits 
        text="Habits" 
        position={{top: 680, left: 28}} 
        navigation={navigation}
      />
      <AddictionTracker 
        text="Addiction Tracker" 
        position={{top: 680, right: 28}} 
        navigation={navigation}
      />
      <Option onPress={() => navigation.navigate('AddTaskScreen')} />
        <SettingsButton/>
    </BackGround>
  );
}

export default HomeScreen;