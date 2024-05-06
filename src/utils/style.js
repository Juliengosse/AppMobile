import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
        textAlign: 'center',
    },
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
    buttonContainer: {
        top: 100
    },
    gameModetitle: {
        top: 50,
        fontWeight: 'bold', 
        fontSize: 30,
    }, 
    gameScreenTitle: {
        top: 100,
        fontWeight: 'bold', 
        fontSize: 30,
    },
    appTitle: {
      top: 200,
      fontWeight: 'bold', 
      fontSize: 30,
    },
    text: {
        color: 'white',
        fontSize: 25
    },
});