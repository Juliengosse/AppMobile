import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Orientation from 'react-native-orientation-locker';
import HomeScreen from '../screens/homeScreen';
import PlayerSelectionScreen from '../screens/playerSelectionScreen'
import GameModeScreen from '../screens/gameModeScreen';
import GameScreen from '../screens/gameScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {

  //const [orientation, setOrientation] = useState('portrait');

  // const updateOrientation = (test) => {

  //   Orientation.unlockAllOrientations();

  //   if(test === "portrait"){
  //     Orientation.lockToPortrait();
  //   }

  //   if(test === "paysage"){
  //     Orientation.lockToLandscape();
  //   }
  // };

  // useEffect(() => {
  //   updateOrientation(orientation);
  // }, [orientation]);


  return (
    <NavigationContainer>
      <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{ 
            headerLeft: () => null, 
            headerTitle: () => null, 
            headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PlayerSelectionScreen" component={PlayerSelectionScreen} />
        <Stack.Screen name="GameModeScreen" component={GameModeScreen} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;