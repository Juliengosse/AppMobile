import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import ButtonMode from '../components/buttonMode';

const GameModeScreen = ({ navigation } : any) => {

  const gameModes = ["Normal", "Guerre", "J'ai déja / je n'ai jammais", "qui pourrait", "test"]
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Modes</Text>
      <View style={styles.buttonContainer}>
        {gameModes.map((gameMode, index) => {
          return <ButtonMode key={index} title={gameMode} navigation={navigation}/> ;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    top: 100
  },
  title: {
    top: 50,
    fontWeight: 'bold', 
    fontSize: 30,
  }
})
  
export default GameModeScreen;