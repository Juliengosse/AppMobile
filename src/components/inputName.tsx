import { TextInput } from 'react-native';
import { styles } from './../utils/style';


const InputName = ({ nbInput } : any) => {

    return(
        <TextInput 
            placeholder= {`Joueur ${nbInput}`}  
            style={styles.input}
        />
    );
    
}

export default InputName;