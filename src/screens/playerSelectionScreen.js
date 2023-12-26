import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { routes } from "../utils/routes";
import InputName from '../components/inputName';
import StandarButton from '../components/standarButton';

const PlayerSelectionScreen = () => {

    const [count, setCount] = useState(3);
    const navigation = useNavigation();

    const hundleClick = () => {
        navigation.navigate(routes.gameModeScreen);
    }

    // Créer un tableau avec le nombre d'éléments équivalent à la valeur de count
    const inputs = Array.from({ length: count }, (_, index) => index + 1);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Entrez le nom des joeurs</Text>
            <View style={styles.buttonContainer}>
                {inputs.map((input, index) => {
                    return <InputName key={index} nbInput={input}/>;
                })}
            </View>
            <StandarButton title={"ajouter des noms"} />
            <StandarButton title={"Jouez !"} hundleClick={hundleClick}/>
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
})

export default PlayerSelectionScreen;