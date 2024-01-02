import React, { useState } from 'react';
import { Text, Button } from 'react-native-elements';
import { View, StyleSheet, ScrollView } from 'react-native';
import { routes } from '../utils/routes';
import InputName from '../components/inputName';

const PlayerSelectionScreen = ({ navigation } : any) => {

    const [count, setCount] = useState(3);

    const hundleClick = () => {
        navigation.navigate(routes.gameModeScreen);
    }

    // Créer un tableau avec le nombre d'éléments équivalent à la valeur de count
    const inputs = Array.from({ length: count }, (_, index) => index + 1);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Entrez le nom des joueurs</Text>
            <ScrollView  style={styles.inputsContainer}>
                {inputs.map((input, index) => {
                    return <InputName key={index} nbInput={input}/>;
                })}
            </ScrollView>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Ajoute un joueur"
                    icon={{
                        name: 'user',
                        type: 'font-awesome',
                        size: 15,
                        color: 'white',
                    }}
                    iconRight
                    iconContainerStyle={{ marginLeft: 10 }}
                    titleStyle={{ fontWeight: '700' }}
                    buttonStyle={{
                        backgroundColor: 'rgba(199, 43, 98, 1)',
                        borderColor: 'transparent',
                        borderWidth: 0,
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    onPress = {() => {setCount(count + 1)}}
                />
                <Button
                    title="Choix du mode"
                    buttonStyle={{
                        backgroundColor: 'black',
                        borderWidth: 2,
                        borderColor: 'white',
                        borderRadius: 30,
                    }}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ fontWeight: 'bold' }}
                    onPress = {hundleClick}
                />
            </View>
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
    title: {
        top: 50,
        fontWeight: 'bold', 
        fontSize: 30,
    },
    inputsContainer: {
        position: 'absolute',
        top: 150,
        height: 400,
        marginHorizontal: 20,
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 50,
    },
})

export default PlayerSelectionScreen;