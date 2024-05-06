import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import useData, { Question } from '../hooks/useData';
import { Button } from 'react-native-elements';
import { styles } from './../utils/style';


const  GameScreen = ({ route } : any) => {

  const { mode } = route.params;
  const { questions, getQuestions } = useData();
  const [questionsForMode, setquestionsForMode] = useState<Question[]>([]);
  var started = false;

  const start = () => {
    started = true;
  }

  const fetchData = async () => {
    await getQuestions();
    const filteredQuestions = questions.filter(question => question.gameMode.includes(mode));
    setquestionsForMode(filteredQuestions);
  };

  useEffect(() => {
    fetchData();
  }, [started]);

  return(
    <View style={styles.container}>
      <Text style={styles.gameScreenTitle}>{mode}</Text>
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

export default GameScreen;