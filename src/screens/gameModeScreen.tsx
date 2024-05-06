import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import ButtonMode from '../components/buttonMode';
import { styles } from './../utils/style';

const GameModeScreen = ({ navigation } : any) => {

  const gameModes = ["Normal", "Guerre", "J'ai déja / je n'ai jammais", "qui pourrait"]
    
  return (
    <View style={styles.container}>
      <Text style={styles.gameModetitle}>Modes</Text>
      <View style={styles.buttonContainer}>
        {gameModes.map((gameMode, index) => {
          return <ButtonMode key={index} title={gameMode} navigation={navigation}/> ;
        })}
      </View>
    </View>
  );
};
  
export default GameModeScreen;