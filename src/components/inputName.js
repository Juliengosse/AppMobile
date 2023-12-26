import { StyleSheet, TextInput } from 'react-native';


const InputName = ({ nbInput }) => {

    return(
        <TextInput 
            placeholder= {`Joueur ${nbInput}`}  
            style={styles.input}
        />
    );
    
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        padding: 8,
        textAlign: 'center',
    },
});

export default InputName;