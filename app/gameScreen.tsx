import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useQuestionContext } from './../hooks/questionContext';
import { useData } from './../hooks/useData';

export default function GameScreen() {

  const { players, gameMode } = useLocalSearchParams() as { players: string; gameMode: string };
  const { questions } = useData(gameMode);

  const [question, setQuestion] = useState<
    { id: number; text: string; categorie: string; joueur: boolean; reponse: boolean; ifReponse: string }[]
  >([]);

  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        
        setQuestion(questions); 
        question.forEach(q =>{
          console.log(q.text);
        })
        
      } catch (error) {
        console.error("Erreur lors du chargement des questions :", error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mode {gameMode}</Text>
      {questions.map(question => (
        <p key={question.id}>{question.text}</p>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginVertical: 50,
  },
})