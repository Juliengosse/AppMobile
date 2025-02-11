import React, { useContext, useState } from 'react';
import { View, Button, Text, ScrollView, StyleSheet } from 'react-native';
import { useRouter } from "expo-router";
import Input from './../components/input';

export default function Index() {

  const [count, setCount] = useState<number>(3);
  const [playerNames, setPlayerNames] = useState<string[]>(Array(count).fill(""));

  const inputs = Array.from({ length: count }, (_, index) => index + 1);
  const router = useRouter();

  const handleInputChange = (text: string, index: number) => {
    const newPlayerNames = [...playerNames];
    newPlayerNames[index] = text;
    setPlayerNames(newPlayerNames);
  };

  const choseGameMode = () => {
    router.push({
      pathname: "/gameModeScreen",
      params: { playerNames },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>On se la colle ouuuuuu ...</Text>
      <View style={styles.inputsWrapper}>
        <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.scrollView}>
          <View style={styles.inputsContainer}>
            <Text style={styles.text}>Entrez le nom des joueurs</Text>
            {inputs.map((input, index) => (
              <Input
                key={index}
                nbInput={input}
                value={playerNames[index]}
                onChangeText={(text) => handleInputChange(text, index)}
              />
            ))}
            <Button onPress={() => setCount(count + 1)} title="Ajouter un joueur" />
          </View>
        </ScrollView>
      </View>
      <View style={styles.bouttonContainer}>
        <Button title="Jouez !" onPress={choseGameMode} />
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
  inputsWrapper: {
    flex: 1,
    width: '90%',
    maxHeight: '60%',
    top: '5%',
  },
  scrollView: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: '#333840',
  },
  scrollViewContent: {
    padding: 20,
    alignItems: 'center',
  },
  inputsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  bouttonContainer: {
    position: 'absolute',
    bottom: 50,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginVertical: 50,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
});
