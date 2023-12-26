import { StyleSheet, TextInput } from 'react-native';


const InputName = ({ nbInput }) => {

    return(
        <TextInput 
            value={"Joueur "}
            style={styles.input}
        />
    );
    
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
});

export default InputName;