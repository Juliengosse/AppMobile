import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../constants/rootStackParamList';
import { useLocalSearchParams, useRouter } from 'expo-router';
import StyledButton from './../components/styledBouton';
import { Question, useData } from './../hooks/useData';
import { RouteProp } from '@react-navigation/native';
//import { NativeStackNavigationProp } from '@react-navigation/native-stack';

//type GameModeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'gameModeScreen'>;
//type GameModeScreenRouteProp = RouteProp<RootStackParamList, 'gameModeScreen'>;

/* interface Props {
  navigation: GameModeScreenNavigationProp;
  route: GameModeScreenRouteProp;
} */


export default function GameModeScreen() {

  const gameModes = ["Tournée générale", "On est débile", "Hot"];
  const router = useRouter();

  const { playerNames } = useLocalSearchParams();
  const players = Array.isArray(playerNames) ? playerNames : [playerNames];

  const choseGameMode = async (gameMode : string) => {
    router.push({
      pathname: "/gameScreen",
      params: { 
        players, 
        gameMode
      },
    });
  };

  if (!players) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Aucun joueur trouvé.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mode de jeu</Text>
      <View style={styles.buttonContainer}>
        {gameModes.map((gameMode, index) => {
          return (
            <StyledButton key={index} title={gameMode} onPress={() => choseGameMode(gameMode)} />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  buttonContainer: {
    top : 200,
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    top : 200,
  },
  button : {
    backgroundColor: '#4CAF50', 
    paddingVertical: 15,   
    paddingHorizontal: 30,     
    borderRadius: 25,          
    alignItems: 'center',    
    shadowColor: '#000',      
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.3,         
    shadowRadius: 4, 
    elevation: 5, 
  },
  subtitle: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 10,
  },
  player: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
});