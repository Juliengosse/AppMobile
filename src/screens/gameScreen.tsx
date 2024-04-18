import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import useData, { Question } from '../hooks/useData';
import { Button } from 'react-native-elements';

const  GameScreen = ({ route } : any) => {

  const { mode } = route.params;
  const { questions, getQuestions } = useData();
  const [questionsForMode, setquestionsForMode] = useState<Question[]>([]);
  var started = false;

  const start = () => {
    started = true;
  }

  useEffect(() => {
    const fetchData = async () => {
      await getQuestions();
      console.log("getQuestions " + questions.length)
      const filteredQuestions = questions.filter(question => question.gameMode.includes(mode));
      console.log("filteredQuestions" + filteredQuestions.length)
      setquestionsForMode(filteredQuestions);
    };
  
    fetchData()
    console.log("useEffect")

    questionsForMode.forEach(q => console.log(q.questionStatement))
  
  }, [started]);

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{mode}</Text>
      <View style={styles.questionContainer}>
        <Text style={styles.text}>{questionsForMode.length > 0 ? questionsForMode[0].questionStatement : "Aucune question disponible"}</Text>
      </View>
      <Button
        title="Start"
        buttonStyle={{
            backgroundColor: 'black',
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 30,
        }}
        containerStyle={{
            position: "absolute",
            bottom: 75,
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
        }}
        titleStyle={{ fontWeight: 'bold' }}
        onPress={start}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  questionContainer: {
    position: 'absolute',
    top: 250,
    height: 400,
    width: 300,
    backgroundColor: 'black'
  },
  title: {
    top: 100,
    fontWeight: 'bold', 
    fontSize: 30,
  },
  text: {
    color: 'white',
    fontSize: 25
  }
})

export default GameScreen;